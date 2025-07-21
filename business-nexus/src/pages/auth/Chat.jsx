import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { FiSend, FiImage, FiPaperclip, FiSmile } from "react-icons/fi";
import { IoCheckmarkDone } from "react-icons/io5";

const ChatComponent = () => {
  const { userId } = useParams();
  const { currentUser } = useAuth();
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const messagesEndRef = useRef(null);

  const chatKey = `chat_${currentUser?.id}_to_${userId}`;

  useEffect(() => {
    const saved = localStorage.getItem(chatKey);
    if (saved) {
      setChatHistory(JSON.parse(saved));
    }
  }, [chatKey]);

  useEffect(() => {
    scrollToBottom();
  }, [chatHistory]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSend = () => {
    if (!message.trim()) return;
    
    const newMessage = {
      sender: currentUser.name,
      text: message,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      read: false
    };

    const updatedChat = [...chatHistory, newMessage];
    setChatHistory(updatedChat);
    localStorage.setItem(chatKey, JSON.stringify(updatedChat));
    setMessage("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-100px)] max-w-3xl mx-auto p-4">
      {/* Chat Header */}
      <div className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-t-lg shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
            {userId.charAt(0).toUpperCase()}
          </div>
          <div>
            <h2 className="font-semibold text-gray-800 dark:text-white">User {userId}</h2>
            <p className="text-xs text-gray-500 dark:text-gray-400">online</p>
          </div>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-4 bg-gray-50 dark:bg-gray-700">
        {chatHistory.length === 0 && (
          <div className="flex flex-col items-center justify-center h-full text-gray-500 dark:text-gray-400">
            <p className="text-lg">Start a conversation with User {userId}</p>
            <p className="text-sm mt-2">Messages are saved locally</p>
          </div>
        )}

        {chatHistory.map((msg, index) => (
          <div
            key={index}
            className={`mb-4 flex ${
              msg.sender === currentUser.name ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl shadow-sm ${
                msg.sender === currentUser.name
                  ? "bg-blue-500 text-white rounded-tr-none"
                  : "bg-white dark:bg-gray-600 text-gray-800 dark:text-gray-100 rounded-tl-none"
              }`}
            >
              {msg.sender !== currentUser.name && (
                <p className="font-semibold text-sm">{msg.sender}</p>
              )}
              <p className="my-1">{msg.text}</p>
              <div className="flex items-center justify-end space-x-1 mt-1">
                <span className="text-xs opacity-70">{msg.time}</span>
                {msg.sender === currentUser.name && (
                  <IoCheckmarkDone className={`text-xs ${msg.read ? "text-blue-300" : "text-gray-300"}`} />
                )}
              </div>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Message Input */}
      <div className="bg-white dark:bg-gray-800 p-3 rounded-b-lg shadow-sm border-t border-gray-200 dark:border-gray-700">
        <div className="flex items-center space-x-2">
          <button className="p-2 text-gray-500 hover:text-blue-500 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
            <FiPaperclip size={18} />
          </button>
          <button className="p-2 text-gray-500 hover:text-blue-500 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
            <FiImage size={18} />
          </button>
          <button className="p-2 text-gray-500 hover:text-blue-500 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
            <FiSmile size={18} />
          </button>
          <input
            type="text"
            className="flex-1 border border-gray-300 dark:border-gray-600 px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
            placeholder="Type your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <button
            onClick={handleSend}
            disabled={!message.trim()}
            className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            <FiSend size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatComponent;