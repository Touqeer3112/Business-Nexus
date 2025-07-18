import React from "react";

const Sidebar = () => (
  <aside className="w-64 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 p-4 shadow-md min-h-full">
    <ul className="space-y-4 text-lg font-medium">
      <li className="hover:text-blue-500 transition">Dashboard</li>
      <li className="hover:text-blue-500 transition">Profile</li>
    </ul>
  </aside>
);

export default Sidebar;