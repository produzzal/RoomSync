import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const ErrorPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 to-blue-300 text-center px-6 overflow-hidden">
      {/* Floating Decorative Elements */}
      <motion.div
        className="absolute top-10 left-10 w-32 h-32 bg-blue-300 rounded-full opacity-40"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, repeatType: "loop" }}
      ></motion.div>
      <motion.div
        className="absolute bottom-10 right-10 w-24 h-24 bg-blue-500 rounded-full opacity-30"
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 3, repeat: Infinity, repeatType: "loop" }}
      ></motion.div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="text-9xl font-extrabold text-[#003B95] mb-6 drop-shadow-lg">
          404
        </h1>
        <motion.p
          className="text-lg text-gray-800 mb-12 font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Oops! We couldn’t find the page you’re looking for. 🚀
        </motion.p>
      </motion.div>

      {/* Decorative SVG or Emoji */}
      <motion.div
        initial={{ scale: 0.8, rotate: -10 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 10,
        }}
        className="mb-8"
      >
        <span role="img" aria-label="astronaut" className="text-7xl">
          🪐✨
        </span>
      </motion.div>

      {/* Go Home Button */}
      <motion.button
        onClick={() => navigate("/")}
        className="px-8 py-4 bg-[#003B95] text-white font-semibold rounded-full shadow-md hover:bg-[#002766] transform hover:scale-105 transition-transform duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        Go to Home
      </motion.button>
    </div>
  );
};

export default ErrorPage;
