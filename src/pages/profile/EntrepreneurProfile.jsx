
import React from "react";
import { useParams } from "react-router-dom";

const EntrepreneurProfile = () => {
  const { id } = useParams();
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const user = users.find((u) => u.id.toString() === id);

  return (
    <div className="p-8 max-w-xl mx-auto bg-white rounded-xl shadow-md">
      <h1 className="text-3xl font-bold text-purple-700 mb-4">Entrepreneur Profile</h1>
      {user ? (
        <>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Startup Description:</strong> (Add manually)</p>
          <p><strong>Funding Need:</strong> (Add manually)</p>
          <p><strong>Pitch Deck:</strong> (Placeholder)</p>
        </>
      ) : (
        <p>User not found.</p>
      )}
    </div>
  );
};

export default EntrepreneurProfile;
