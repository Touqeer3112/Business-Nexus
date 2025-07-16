
import React from "react";
import { useNavigate } from "react-router-dom";

const InvestorDashboard = () => {
  const navigate = useNavigate();
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const entrepreneurs = users.filter((u) => u.role === "entrepreneur");

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-indigo-700 mb-6">Entrepreneurs</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {entrepreneurs.map((entrepreneur) => (
          <div key={entrepreneur.id} className="bg-white shadow-md rounded-xl p-6">
            <h2 className="text-xl font-semibold">{entrepreneur.name}</h2>
            <p className="text-sm text-gray-600">{entrepreneur.email}</p>
            <button
              onClick={() => navigate(`/profile/entrepreneur/${entrepreneur.id}`)}
              className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
            >
              View Profile
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InvestorDashboard;
