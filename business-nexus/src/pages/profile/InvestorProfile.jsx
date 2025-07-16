
import React from "react";
import { useParams } from "react-router-dom";

const InvestorProfile = () => {
  const { id } = useParams();
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const user = users.find((u) => u.id.toString() === id);

  return (
    <div className="p-8 max-w-xl mx-auto bg-white rounded-xl shadow-md">
      <h1 className="text-3xl font-bold text-blue-700 mb-4">Investor Profile</h1>
      {user ? (
        <>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Investment Interests:</strong> (Add manually)</p>
          <p><strong>Portfolio Companies:</strong> (Add manually)</p>
        </>
      ) : (
        <p>User not found.</p>
      )}
    </div>
  );
};

export default InvestorProfile;
