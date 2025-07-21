import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FiUser, FiMail, FiMessageSquare, FiArrowRight } from "react-icons/fi";

const InvestorDashboard = () => {
  const navigate = useNavigate();
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const entrepreneurs = users.filter((u) => u.role === "entrepreneur");

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="p-4 md:p-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <h1 className="text-2xl md:text-3xl font-bold text-indigo-700 mb-2">Entrepreneurs Directory</h1>
        <p className="text-gray-600">Discover innovative entrepreneurs to collaborate with</p>
      </motion.div>

      {entrepreneurs.length === 0 ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-white rounded-xl shadow-sm p-8 text-center"
        >
          <div className="max-w-md mx-auto">
            <div className="text-6xl mb-4">👋</div>
            <h3 className="text-xl font-semibold mb-2">No entrepreneurs found</h3>
            <p className="text-gray-600 mb-4">When entrepreneurs register, they'll appear here</p>
          </div>
        </motion.div>
      ) : (
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {entrepreneurs.map((entrepreneur) => (
            <motion.div
              key={entrepreneur.id}
              variants={item}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden border border-gray-100"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-indigo-100 w-12 h-12 rounded-full flex items-center justify-center text-indigo-600 mr-4">
                    <FiUser size={20} />
                  </div>
                  <div>
                    <h2 className="font-semibold text-lg">{entrepreneur.name}</h2>
                    <div className="flex items-center text-sm text-gray-500">
                      <FiMail className="mr-1" size={14} />
                      <span>{entrepreneur.email}</span>
                    </div>
                  </div>
                </div>

                <div className="flex space-x-3 mt-6">
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => navigate(`/profile/entrepreneur/${entrepreneur.id}`)}
                    className="flex-1 flex items-center justify-center bg-indigo-600 text-white py-2 px-4 rounded-lg text-sm font-medium"
                  >
                    View Profile
                    <FiArrowRight className="ml-2" size={14} />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => navigate(`/chat/${entrepreneur.id}`)}
                    className="flex-1 flex items-center justify-center bg-white border border-indigo-600 text-indigo-600 py-2 px-4 rounded-lg text-sm font-medium"
                  >
                    <FiMessageSquare className="mr-2" size={14} />
                    Message
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default InvestorDashboard;