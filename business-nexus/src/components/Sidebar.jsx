import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FiHome, 
  FiUser, 
  FiBriefcase, 
  FiMessageSquare, 
  FiSettings,
  FiChevronLeft,
  FiLogOut
} from "react-icons/fi";
import { useAuth } from "../context/AuthContext";

const Sidebar = () => {
  const { logout } = useAuth();
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);
  const [activeHover, setActiveHover] = useState(null);

  const navItems = [
    { path: "/dashboard", name: "Dashboard", icon: FiHome },
    { path: "/profile", name: "Profile", icon: FiUser },
    { path: "/projects", name: "Projects", icon: FiBriefcase },
    { path: "/messages", name: "Messages", icon: FiMessageSquare },
    { path: "/settings", name: "Settings", icon: FiSettings },
  ];

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <motion.aside
      initial={{ width: 240 }}
      animate={{ width: collapsed ? 80 : 240 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={`bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 h-full flex flex-col border-r border-gray-200 dark:border-gray-700 transition-all duration-300 ${collapsed ? 'px-2' : 'px-4'}`}
    >
      {/* Collapse Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={toggleCollapse}
        className={`self-end mt-4 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-500 dark:text-gray-400 ${collapsed ? 'mx-auto' : ''}`}
      >
        <FiChevronLeft className={`transition-transform ${collapsed ? 'rotate-180' : ''}`} />
      </motion.button>

      {/* Navigation Items */}
      <nav className="flex-1 mt-6">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                onMouseEnter={() => setActiveHover(item.path)}
                onMouseLeave={() => setActiveHover(null)}
                className={({ isActive }) => 
                  `flex items-center p-3 rounded-lg transition-all duration-200 ${isActive 
                    ? 'bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400' 
                    : 'hover:bg-gray-100 dark:hover:bg-gray-700'}`
                }
              >
                <item.icon size={20} className="flex-shrink-0" />
                {!collapsed && (
                  <motion.span 
                    initial={{ opacity: 1 }}
                    animate={{ opacity: collapsed ? 0 : 1 }}
                    className="ml-3"
                  >
                    {item.name}
                  </motion.span>
                )}
                <AnimatePresence>
                  {activeHover === item.path && collapsed && (
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0 }}
                      className="absolute left-full ml-2 px-3 py-2 bg-white dark:bg-gray-800 rounded-md shadow-lg whitespace-nowrap z-10 border border-gray-200 dark:border-gray-700"
                    >
                      {item.name}
                    </motion.div>
                  )}
                </AnimatePresence>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Logout Button */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={logout}
        className={`flex items-center p-3 mb-4 rounded-lg text-red-500 hover:bg-red-50 dark:hover:bg-red-900/30 transition-colors ${collapsed ? 'justify-center' : ''}`}
      >
        <FiLogOut size={20} />
        {!collapsed && (
          <motion.span 
            initial={{ opacity: 1 }}
            animate={{ opacity: collapsed ? 0 : 1 }}
            className="ml-3"
          >
            Logout
          </motion.span>
        )}
      </motion.button>
    </motion.aside>
  );
};

export default Sidebar;