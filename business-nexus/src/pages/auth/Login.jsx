// // src/pages/Login.jsx
// import React, { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import { useAuth } from "../../context/AuthContext";

// const Login = () => {
//   const [formData, setFormData] = useState({ email: "", password: "" });
//   const { login } = useAuth();
//   const navigate = useNavigate();

//   const handleLogin = (e) => {
//     e.preventDefault();
//     const users = JSON.parse(localStorage.getItem("users")) || [];
//     const user = users.find(
//       (u) => u.email === formData.email && u.password === formData.password
//     );

//     if (!user) {
//       alert("Invalid credentials or not registered");
//       return;
//     }

//     login(user);
//     navigate(`/dashboard/${user.role}`);
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-green-100 to-blue-100">
//       <form onSubmit={handleLogin} className="bg-white p-8 rounded-xl shadow-lg w-96 space-y-4">
//         <h2 className="text-2xl font-bold text-center text-blue-700">Login</h2>

//         <input name="email" placeholder="Email" className="input-style" required onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
//         <input name="password" type="password" placeholder="Password" className="input-style" required onChange={(e) => setFormData({ ...formData, password: e.target.value })} />

//         <button className="btn-primary">Login</button>

//         <p className="text-sm text-center">
//           Don’t have an account? <Link to="/register" className="text-blue-600 font-semibold hover:underline">Register here</Link>
//         </p>
//       </form>
//     </div>
//   );
// };

// export default Login;
// src/pages/Login.jsx
// import React, { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// // import "./index.css";
// import { useAuth } from "../../context/AuthContext";

// const Login = () => {
//   const [formData, setFormData] = useState({ email: "", password: "" });
//   const { login } = useAuth();
//   const navigate = useNavigate();

//   const handleLogin = (e) => {
//     e.preventDefault();
//     const users = JSON.parse(localStorage.getItem("users")) || [];
//     const user = users.find((u) => u.email === formData.email && u.password === formData.password);
//     if (!user) return alert("Invalid credentials");
//     login(user);
//     navigate(`/dashboard/${user.role}`);
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 to-green-100">
//       <form onSubmit={handleLogin} className="bg-white p-8 rounded-xl shadow-lg w-96 space-y-4">
//         <h2 className="text-2xl font-bold text-center text-blue-700">Login</h2>
//         <input name="email" type="email" placeholder="Email" className="input-style" required onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
//         <input name="password" type="password" placeholder="Password" className="input-style" required onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
//         <button className="btn-primary">Login</button>
//         <p className="text-sm text-center">Don’t have an account? <Link to="/register" className="text-blue-600 font-semibold hover:underline">Register here</Link></p>
//       </form>
//     </div>
//   );
// };

// export default Login;
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find((u) => u.email === formData.email && u.password === formData.password);
    if (!user) return alert("Invalid credentials");
    login(user);
    navigate(`/dashboard/${user.role}`);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 to-green-100">
      <form onSubmit={handleLogin} className="bg-white p-8 rounded-xl shadow-lg w-96 space-y-4">
        <h2 className="text-2xl font-bold text-center text-blue-700">Login</h2>
        <input name="email" type="email" placeholder="Email" className="input-style" required onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
        <input name="password" type="password" placeholder="Password" className="input-style" required onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
        <button className="btn-primary">Login</button>
        <p className="text-sm text-center">Don’t have an account? <Link to="/register" className="text-blue-600 font-semibold hover:underline">Register here</Link></p>
      </form>
    </div>
  );
};

export default Login;