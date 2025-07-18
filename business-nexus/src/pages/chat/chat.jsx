import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Chat = () => {
  const { userId } = useParams();
  const { currentUser } = useAuth();
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([]);

  const chatKey = `chat_${currentUser?.id}_to_${userId}`;

  useEffect(() => {
    const saved = localStorage.getItem(chatKey);
    if (saved) {
      setChatHistory(JSON.parse(saved));
    }
  }, [chatKey]);

  const handleSend = () => {
    if (!message.trim()) return;
    const newMessage = {
      sender: currentUser.name,
      text: message,
      time: new Date().toLocaleTimeString(),
    };

    const updatedChat = [...chatHistory, newMessage];
    setChatHistory(updatedChat);
    localStorage.setItem(chatKey, JSON.stringify(updatedChat));
    setMessage("");
  };

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-blue-600">
        Chat with User {userId}
      </h2>

      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md h-96 overflow-y-auto mb-4 border border-gray-200">
        {chatHistory.map((msg, index) => (
          <div
            key={index}
            className={`mb-3 flex ${
              msg.sender === currentUser.name ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-xs px-4 py-2 rounded-xl shadow-md text-sm ${
                msg.sender === currentUser.name
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
              }`}
            >
              <p className="font-semibold">{msg.sender}</p>
              <p>{msg.text}</p>
              <p className="text-xs mt-1 opacity-70">{msg.time}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-2">
        <input
          type="text"
          className="flex-1 border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
          placeholder="Type your message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          onClick={handleSend}
          className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition shadow"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
