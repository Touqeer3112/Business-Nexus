import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Alert from "../../components/UI/Alert";

const Register = () => {
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
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-green-100 to-green-300">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-xl w-96 animate-fade-in"
      >
        <h2 className="text-2xl font-bold mb-4 text-center text-green-700">Register</h2>

        {showAlert && <Alert message="You are Registered Successfully!" type="success" />}

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
          placeholder="Full Name"
          className="w-full p-2 mb-4 border rounded"
          required
        />
        <input
          type="email"
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
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
        >
          Register
        </button>

        <p className="text-sm text-center mt-4">
          Already have an account? <Link to="/login" className="text-green-600 hover:underline">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
