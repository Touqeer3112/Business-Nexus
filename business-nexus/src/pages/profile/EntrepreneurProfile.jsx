import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FiUser, FiMail, FiBriefcase, FiDollarSign, FiFileText, FiArrowLeft, FiMessageSquare } from "react-icons/fi";

const EntrepreneurProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const user = users.find((u) => u.id.toString() === id);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-4xl mx-auto">
        <motion.button
          whileHover={{ x: -3 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate(-1)}
          className="flex items-center text-indigo-600 mb-6"
        >
          <FiArrowLeft className="mr-2" />
          Back to Dashboard
        </motion.button>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-xl shadow-sm overflow-hidden"
        >
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-6 text-white">
            <div className="flex items-center">
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mr-4">
                <FiUser size={24} />
              </div>
              <div>
                <h1 className="text-2xl font-bold">{user?.name || "Entrepreneur Profile"}</h1>
                <p className="opacity-90">Startup Founder</p>
              </div>
            </div>
          </div>

          {user ? (
            <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-purple-100 p-3 rounded-lg mr-4">
                    <FiMail className="text-purple-600" size={20} />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Email</h3>
                    <p className="text-gray-900">{user.email}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-purple-100 p-3 rounded-lg mr-4">
                    <FiBriefcase className="text-purple-600" size={20} />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Startup Description</h3>
                    <p className="text-gray-900">Revolutionizing the tech industry with innovative solutions</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-purple-100 p-3 rounded-lg mr-4">
                    <FiDollarSign className="text-purple-600" size={20} />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Funding Need</h3>
                    <p className="text-gray-900">$500,000 seed round</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-purple-100 p-3 rounded-lg mr-4">
                    <FiFileText className="text-purple-600" size={20} />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Pitch Deck</h3>
                    <a href="#" className="text-purple-600 hover:underline">View Pitch Deck</a>
                  </div>
                </div>
              </div>

              <div className="md:col-span-2 pt-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => navigate(`/chat/${user.id}`)}
                  className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-3 rounded-lg font-medium flex items-center justify-center"
                >
                  <FiMessageSquare className="mr-2" />
                  Send Message
                </motion.button>
              </div>
            </div>
          ) : (
            <div className="p-8 text-center">
              <p className="text-gray-600">User not found</p>
            </div>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default EntrepreneurProfile;