
import React from "react";
import { useNavigate } from "react-router-dom";

const EntrepreneurDashboard = () => {
  const navigate = useNavigate();
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const investors = users.filter((u) => u.role === "investor");

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-green-700 mb-6">Investors</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {investors.map((investor) => (
          <div
            key={investor.id}
            className="bg-white shadow-md rounded-xl p-6"
          >
            <h2 className="text-xl font-semibold">{investor.name}</h2>
            <p className="text-sm text-gray-600">{investor.email}</p>
            <div className="mt-4 space-x-2">
              <button
                onClick={() =>
                  navigate(`/profile/investor/${investor.id}`)
                }
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
              >
                View Profile
              </button>
              <button
                onClick={() => navigate(`/chat/${investor.id}`)}
                className="px-4 py-2 bg-gray-200 text-green-700 rounded-lg hover:bg-gray-300 transition"
              >
                Message
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EntrepreneurDashboard;
