import React from "react";

const Alert = ({ message, type }) => {
  const bgColor = type === "success" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700";
  return (
    <div
      className={`p-3 my-4 rounded shadow text-sm text-center animate-fade-in ${bgColor}`}
    >
      {message}
    </div>
  );
};

export default Alert;