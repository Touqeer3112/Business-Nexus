import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import InvestorDashboard from "./pages/dashboard/investor";
import EntrepreneurDashboard from "./pages/dashboard/entrepreneur";
import InvestorProfile from "./pages/profile/InvestorProfile";
import EntrepreneurProfile from "./pages/profile/EntrepreneurProfile";
import DashboardLayout from "./layouts/DashboardLayout";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/dashboard/investor"
        element={
          <DashboardLayout>
            <InvestorDashboard />
          </DashboardLayout>
        }
      />
      <Route
        path="/dashboard/entrepreneur"
        element={
          <DashboardLayout>
            <EntrepreneurDashboard />
          </DashboardLayout>
        }
      />
      <Route path="/profile/investor/:id" element={<InvestorProfile />} />
      <Route path="/profile/entrepreneur/:id" element={<EntrepreneurProfile />} />
    </Routes>
  );
};

export default App;
