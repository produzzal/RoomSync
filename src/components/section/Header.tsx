import React from "react";
import { motion } from "framer-motion";

const Header: React.FC = () => {
  return (
    <div
      className="hero bg-cover bg-center relative"
      style={{
        backgroundImage:
          'url("https://i.ibb.co.com/8m4YLtJ/240-F-80911186-Ro-BCsy-Lr-NTr-G7-Y1-EOy-Csa-CJO5-Dy-Hg-Tox.jpg")', // Your background image URL
      }}
    >
      <div className="absolute inset-0 bg-black opacity-40"></div>{" "}
      {/* Overlay for contrast */}
      <div className="hero-content text-center text-neutral-content relative z-10 px-6 sm:px-8 lg:px-16 py-12">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold text-white text-shadow-md">
            Book Your Ideal Meeting Room with Ease
          </h1>
          <p className="mb-5 text-lg text-white text-shadow-md">
            Efficient, hassle-free room booking for all your meeting needs.
          </p>
          <motion.button
            className="px-8 py-3 bg-[#005FA8] text-white font-semibold rounded-lg shadow-md hover:bg-[#002766] transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => (window.location.href = "/")}
          >
            Book Now
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Header;
