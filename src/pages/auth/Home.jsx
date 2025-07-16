import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 to-white px-4">
      <div className="text-center max-w-xl">
        <h1 className="text-4xl md:text-5xl font-bold text-indigo-800 mb-6">
          🌐 Welcome to Business Nexus
        </h1>
        <p className="text-gray-700 text-lg mb-8">
          A platform that connects Investors & Entrepreneurs to build the future together.
        </p>
        <div className="space-x-4">
          <Link
            to="/login"
            className="bg-indigo-600 text-white px-6 py-2 rounded-full shadow hover:bg-indigo-700 transition"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="bg-white border border-indigo-600 text-indigo-600 px-6 py-2 rounded-full shadow hover:bg-indigo-50 transition"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
