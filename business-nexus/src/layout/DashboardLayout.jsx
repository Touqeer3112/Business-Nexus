import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const DashboardLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6 bg-gray-50 dark:bg-gray-900 transition-all duration-300">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;