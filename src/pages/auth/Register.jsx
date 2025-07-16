// // src/pages/Register.jsx
// import React, { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";

// const Register = () => {
//   const [formData, setFormData] = useState({
//     name: "", email: "", password: "", role: "investor"
//   });
//   const navigate = useNavigate();

//   const handleRegister = (e) => {
//     e.preventDefault();
//     const users = JSON.parse(localStorage.getItem("users")) || [];

//     const exists = users.find((u) => u.email === formData.email);
//     if (exists) {
//       alert("User already exists. Please login.");
//       return;
//     }

//     users.push(formData);
//     localStorage.setItem("users", JSON.stringify(users));
//     alert("Registered! Now login.");
//     navigate("/login");
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-100 to-pink-100">
//       <form onSubmit={handleRegister} className="bg-white p-8 rounded-xl shadow-lg w-96 space-y-4">
//         <h2 className="text-2xl font-bold text-center text-purple-700">Register</h2>

//         <input name="name" placeholder="Full Name" className="input-style" required onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
//         <input name="email" type="email" placeholder="Email" className="input-style" required onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
//         <input name="password" type="password" placeholder="Password" className="input-style" required onChange={(e) => setFormData({ ...formData, password: e.target.value })} />

//         <select name="role" onChange={(e) => setFormData({ ...formData, role: e.target.value })} className="input-style bg-white">
//           <option value="investor">Investor</option>
//           <option value="entrepreneur">Entrepreneur</option>
//         </select>

//         <button className="btn-primary">Register</button>

//         <p className="text-sm text-center">
//           Already have an account? <Link to="/login" className="text-purple-600 font-semibold hover:underline">Login here</Link>
//         </p>
//       </form>
//     </div>
//   );
// };

// export default Register;
// src/pages/Register.jsx
// import React, { useState } from "react";
// // import "./index.css";
// import { useNavigate, Link } from "react-router-dom";

// const Register = () => {
//   const [formData, setFormData] = useState({ name: "", email: "", password: "", role: "investor" });
//   const navigate = useNavigate();

//   const handleRegister = (e) => {
//     e.preventDefault();
//     const users = JSON.parse(localStorage.getItem("users")) || [];
//     const exists = users.find((u) => u.email === formData.email);
//     if (exists) {
//       alert("User already exists.");
//       return;
//     }
//     users.push({ ...formData, id: Date.now() });
//     localStorage.setItem("users", JSON.stringify(users));
//     alert("Registration successful.");
//     navigate("/login");
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-100 to-pink-100">
//       <form onSubmit={handleRegister} className="bg-white p-8 rounded-xl shadow-lg w-96 space-y-4">
//         <h2 className="text-2xl font-bold text-center text-purple-700">Register</h2>
//         <input name="name" placeholder="Full Name" className="input-style" required onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
//         <input name="email" type="email" placeholder="Email" className="input-style" required onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
//         <input name="password" type="password" placeholder="Password" className="input-style" required onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
//         <select name="role" onChange={(e) => setFormData({ ...formData, role: e.target.value })} className="input-style bg-white">
//           <option value="investor">Investor</option>
//           <option value="entrepreneur">Entrepreneur</option>
//         </select>
//         <button className="btn-primary">Register</button>
//         <p className="text-sm text-center">Already registered? <Link to="/login" className="text-purple-600 font-semibold hover:underline">Login here</Link></p>
//       </form>
//     </div>
//   );
// };

// export default Register;
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "investor",
  });

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const newUser = { ...formData, id: Date.now() };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    alert("Registered successfully");
    navigate("/login");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-100 to-pink-100">
      <form onSubmit={handleRegister} className="bg-white p-8 rounded-xl shadow-lg w-96 space-y-4">
        <h2 className="text-2xl font-bold text-center text-purple-700">Register</h2>
        <input name="name" placeholder="Name" className="input-style" required onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
        <input name="email" type="email" placeholder="Email" className="input-style" required onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
        <input name="password" type="password" placeholder="Password" className="input-style" required onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
        <select name="role" className="input-style" onChange={(e) => setFormData({ ...formData, role: e.target.value })}>
          <option value="investor">Investor</option>
          <option value="entrepreneur">Entrepreneur</option>
        </select>
        <button className="btn-primary">Register</button>
        <p className="text-sm text-center">Already have an account? <Link to="/login" className="text-purple-600 font-semibold hover:underline">Login here</Link></p>
      </form>
    </div>
  );
};

export default Register;