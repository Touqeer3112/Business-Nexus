import React from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center shadow-lg">
      <h1 className="text-lg font-bold tracking-wide">Business Nexus</h1>
      <button
        onClick={handleLogout}
        className="bg-white text-blue-600 px-4 py-2 rounded-md hover:bg-blue-100 shadow-md transition duration-300"
      >
        Logout
      </button>
    </nav>
  );
};

export default Navbar;