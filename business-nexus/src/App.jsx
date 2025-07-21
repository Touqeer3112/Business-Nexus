import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/auth/Login.jsx";
import Register from "./pages/auth/Register.jsx";
import Home from "./pages/auth/Home.jsx";
import InvestorDashboard from "./pages/dashboard/InvestorDashboard.jsx";
import EntrepreneurDashboard from "./pages/dashboard/EntrepreneurDashboard.jsx";
import InvestorProfile from "./pages/profile/InvestorProfile.jsx";
import EntrepreneurProfile from "./pages/profile/EntrepreneurProfile.jsx";
import ChatPage from "./pages/auth/Chat.jsx"; 
import DashboardLayout from "./layout/DashboardLayout.jsx";
import { useAuth } from "./context/AuthContext.jsx";

function App() {
  const { currentUser } = useAuth();

  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Protected Routes */}
      {currentUser && (
        <>
          {currentUser.role === "investor" && (
            <Route
              path="/dashboard/investor"
              element={
                <DashboardLayout>
                  <InvestorDashboard />
                </DashboardLayout>
              }
            />
          )}

          {currentUser.role === "entrepreneur" && (
            <Route
              path="/dashboard/entrepreneur"
              element={
                <DashboardLayout>
                  <EntrepreneurDashboard />
                </DashboardLayout>
              }
            />
          )}

          <Route
            path="/profile/investor/:id"
            element={
              <DashboardLayout>
                <InvestorProfile />
              </DashboardLayout>
            }
          />
          <Route
            path="/profile/entrepreneur/:id"
            element={
              <DashboardLayout>
                <EntrepreneurProfile />
              </DashboardLayout>
            }
          />

          <Route
            path="/chat/:userId"
            element={
              <DashboardLayout>
                <ChatPage /> {/* Updated to use ChatPage */}
              </DashboardLayout>
            }
          />
        </>
      )}

      {/* Fallback route */}
      <Route path="*" element={<Navigate to={currentUser ? "/" : "/login"} />} />
    </Routes>
  );
}

export default App;