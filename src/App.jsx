// import React from "react";
// import { Routes, Route, Navigate } from "react-router-dom";
// import Login from "./pages/auth/Login";
// import Register from "./pages/auth/Register";
// import InvestorDashboard from "./pages/dashboard/InvestorDashboard";
// import EntrepreneurDashboard from "./pages/dashboard/EntrepreneurDashboard";
// import InvestorProfile from "./pages/profile/InvestorProfile";
// import EntrepreneurProfile from "./pages/profile/EntrepreneurProfile";
// import { useAuth } from "./context/AuthContext";
// import DashboardLayout from "./layouts/DashboardLayout";

// const App = () => {
//   const { user } = useAuth();

//   return (
//     <Routes>
//       <Route path="/" element={<Navigate to="/login" />} />
//       <Route path="/login" element={<Login />} />
//       <Route path="/register" element={<Register />} />
      
//       <Route path="/dashboard/investor" element={
//         user?.role === "investor" ? <DashboardLayout><InvestorDashboard /></DashboardLayout> : <Navigate to="/login" />
//       } />
      
//       <Route path="/dashboard/entrepreneur" element={
//         user?.role === "entrepreneur" ? <DashboardLayout><EntrepreneurDashboard /></DashboardLayout> : <Navigate to="/login" />
//       } />

//       <Route path="/profile/investor/:id" element={<InvestorProfile />} />
//       <Route path="/profile/entrepreneur/:id" element={<EntrepreneurProfile />} />
//     </Routes>
//   );
// };

// export default App;
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/auth/Login.jsx";
import Register from "./pages/auth/Register.jsx";
import InvestorDashboard from "./pages/dashboard/InvestorDashboard.jsx";
import EntrepreneurDashboard from "./pages/dashboard/EntrepreneurDashboard.jsx";
import InvestorProfile from "./pages/profile/InvestorProfile.jsx";
import EntrepreneurProfile from "./pages/profile/EntrepreneurProfile.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard/investor" element={<InvestorDashboard />} />
      <Route path="/dashboard/entrepreneur" element={<EntrepreneurDashboard />} />
      <Route path="/profile/investor/:id" element={<InvestorProfile />} />
      <Route path="/profile/entrepreneur/:id" element={<EntrepreneurProfile />} />
    </Routes>
  );
}

export default App;