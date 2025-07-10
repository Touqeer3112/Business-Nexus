import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Alert from "../../components/UI/Alert";

const Login = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState("investor");
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowAlert(true);
    setTimeout(() => {
      navigate(role === "investor" ? "/dashboard/investor" : "/dashboard/entrepreneur");
    }, 1500);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 to-blue-300">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-xl w-96 animate-fade-in"
      >
        <h2 className="text-2xl font-bold mb-4 text-center text-blue-700">Login</h2>

        {showAlert && <Alert message="You are Logged In!" type="success" />}

        <select
          className="w-full p-2 mb-4 border rounded"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="investor">Investor</option>
          <option value="entrepreneur">Entrepreneur</option>
        </select>

        <input
          type="text"
          placeholder="Email"
          className="w-full p-2 mb-4 border rounded"
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 mb-4 border rounded"
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Login
        </button>

        <p className="text-sm text-center mt-4">
          Don't have an account? <Link to="/register" className="text-blue-600 hover:underline">Register</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;