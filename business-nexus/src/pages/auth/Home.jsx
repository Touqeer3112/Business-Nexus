import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FiMenu, 
  FiX, 
  FiArrowRight,
  FiHome,
  FiInfo,
  FiBriefcase,
  FiMail,
  FiLogIn,
  FiUserPlus,
  FiChevronRight,
  FiUsers,
  FiCheckCircle,
  FiFileText,
  FiBarChart2,
  FiLock,
  FiMessageSquare,
  FiCalendar
} from "react-icons/fi";
import { 
  FaLinkedin, 
  FaFacebook, 
  FaTwitter,
  FaHandshake,
  FaProjectDiagram,
  FaUserTie,
  FaTasks,
  FaChartLine,
  FaShieldAlt,
  FaBuilding
} from "react-icons/fa";

// Reusable component for navigation links
const NavLink = ({ to, icon, text }) => (
  <Link 
    to={to} 
    className="text-gray-500 hover:text-indigo-600 inline-flex items-center px-1 pt-1 text-sm font-medium transition-colors"
  >
    {icon}
    <span className="ml-2">{text}</span>
  </Link>
);

// Reusable component for mobile navigation links
const MobileNavLink = ({ to, icon, text, isPrimary = false }) => (
  <Link
    to={to}
    className={`flex items-center ${isPrimary 
      ? 'bg-indigo-600 text-white' 
      : 'text-gray-500 hover:bg-gray-50 hover:text-gray-700'} 
      block pl-3 pr-4 py-2 rounded-md text-base font-medium transition-colors`}
  >
    <span className="mr-3">{icon}</span>
    {text}
  </Link>
);

// Reusable component for footer links
const FooterLink = ({ to, text }) => (
  <li>
    <Link 
      to={to} 
      className="text-gray-400 hover:text-white transition-colors"
    >
      {text}
    </Link>
  </li>
);

// Reusable component for social icons
const SocialIcon = ({ href, icon }) => (
  <motion.a
    whileHover={{ y: -3 }}
    whileTap={{ scale: 0.9 }}
    href={href}
    className="text-gray-400 hover:text-white transition-colors"
  >
    {icon}
  </motion.a>
);

const Home = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const features = [
    { icon: <FaHandshake className="text-indigo-600" size={24} />, title: "Business Collaboration" },
    { icon: <FaProjectDiagram className="text-indigo-600" size={24} />, title: "Project Management" },
    { icon: <FaUserTie className="text-indigo-600" size={24} />, title: "Employee Portal" },
    { icon: <FaTasks className="text-indigo-600" size={24} />, title: "Task Tracking" },
    { icon: <FaChartLine className="text-indigo-600" size={24} />, title: "Analytics Dashboard" },
    { icon: <FaShieldAlt className="text-indigo-600" size={24} />, title: "Secure Platform" }
  ];

  const steps = [
    { icon: <FiUserPlus size={24} />, title: "Create an Account", description: "Sign up in just 2 minutes" },
    { icon: <FaBuilding size={24} />, title: "Set up your Business", description: "Add your company details" },
    { icon: <FiUsers size={24} />, title: "Start Collaborating", description: "Connect with partners" }
  ];

  const testimonials = [
    { 
      name: "Sarah Johnson", 
      role: "CEO, TechSolutions", 
      quote: "Business Nexus transformed how we collaborate with partners.",
      icon: <FiCheckCircle className="text-indigo-500" />
    },
    { 
      name: "Michael Chen", 
      role: "Founder, StartupX", 
      quote: "The analytics tools helped us grow 3x faster.",
      icon: <FiBarChart2 className="text-indigo-500" />
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex-shrink-0 flex items-center">
                <motion.span 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent"
                >
                  Business Nexus
                </motion.span>
              </Link>
              <div className="hidden md:ml-10 md:flex md:space-x-8">
                <NavLink to="/" icon={<FiHome size={18} />} text="Home" />
                <NavLink to="/about" icon={<FiInfo size={18} />} text="About" />
                <NavLink to="/services" icon={<FiBriefcase size={18} />} text="Services" />
                <NavLink to="/contact" icon={<FiMail size={18} />} text="Contact" />
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <Link 
                to="/login" 
                className="flex items-center text-gray-500 hover:text-indigo-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                <FiLogIn className="mr-2" />
                Login
              </Link>
              <Link 
                to="/register" 
                className="flex items-center bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700 transition-colors"
              >
                <FiUserPlus className="mr-2" />
                Sign Up
              </Link>
            </div>
            <div className="-mr-2 flex items-center md:hidden">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100 focus:outline-none"
              >
                {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="pt-2 pb-3 space-y-1">
                <MobileNavLink to="/" icon={<FiHome />} text="Home" />
                <MobileNavLink to="/about" icon={<FiInfo />} text="About" />
                <MobileNavLink to="/services" icon={<FiBriefcase />} text="Services" />
                <MobileNavLink to="/contact" icon={<FiMail />} text="Contact" />
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <MobileNavLink to="/login" icon={<FiLogIn />} text="Login" />
                  <MobileNavLink to="/register" icon={<FiUserPlus />} text="Sign Up" isPrimary />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Connecting Businesses for a Better Future
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
          >
            Your gateway to smart collaboration, project management, and networking.
          </motion.p>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <Link
              to="/register"
              className="inline-flex items-center bg-white text-indigo-600 px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 font-medium"
            >
              Get Started
              <FiArrowRight className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* About Preview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:flex lg:items-center lg:justify-between"
          >
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">About Business Nexus</h2>
              <p className="text-lg text-gray-600 mb-8">
                Business Nexus is a comprehensive platform designed to bridge the gap between businesses, 
                investors, and entrepreneurs. We provide tools for collaboration, project management, 
                and networking to help your business thrive in the digital age.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-medium transition-colors"
              >
                Learn more about us
                <FiChevronRight className="ml-2" />
              </Link>
            </div>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-10 lg:mt-0 lg:w-1/2 lg:pl-12"
            >
              <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl p-8 h-64 flex items-center justify-center">
                <FaBuilding className="text-indigo-600" size={80} />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900">Our Core Features</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to streamline your business operations
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="bg-indigo-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900">How It Works</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Get started in just a few simple steps
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                className="text-center"
              >
                <div className="bg-indigo-100 w-20 h-20 mx-auto rounded-full flex items-center justify-center text-indigo-600 mb-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900">What Our Clients Say</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <div className="flex mb-4">
                  {testimonial.icon}
                  <p className="text-gray-600 italic ml-2">"{testimonial.quote}"</p>
                </div>
                <div className="flex items-center">
                  <div className="bg-indigo-100 w-10 h-10 rounded-full flex items-center justify-center text-indigo-600 font-bold mr-4">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-6"
          >
            Ready to take your business to the next level?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl mb-8 max-w-3xl mx-auto"
          >
            Join thousands of businesses already using Business Nexus to grow and collaborate.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Link
              to="/register"
              className="flex items-center justify-center bg-white text-indigo-600 px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 font-medium"
            >
              Join Now
            </Link>
            <Link
              to="/demo"
              className="flex items-center justify-center bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg shadow-lg hover:bg-white hover:text-indigo-600 transition-all duration-300 font-medium"
            >
              <FiCalendar className="mr-2" />
              Book a Demo
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Business Nexus</h3>
              <p className="text-gray-400">
                Connecting businesses for a better future through collaboration and innovation.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <FooterLink to="/" text="Home" />
                <FooterLink to="/about" text="About" />
                <FooterLink to="/services" text="Services" />
                <FooterLink to="/contact" text="Contact" />
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <FooterLink to="/privacy" text="Privacy Policy" />
                <FooterLink to="/terms" text="Terms of Service" />
                <FooterLink to="/cookies" text="Cookie Policy" />
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
              <div className="flex space-x-4">
                <SocialIcon href="#" icon={<FaLinkedin size={20} />} />
                <SocialIcon href="#" icon={<FaFacebook size={20} />} />
                <SocialIcon href="#" icon={<FaTwitter size={20} />} />
              </div>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400"
          >
            <p>© 2025 Business Nexus. All rights reserved.</p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
};

export default Home;