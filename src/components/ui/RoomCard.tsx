import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface RoomCardProps {
  image: string;
  name: string;
  capacity: number;
  pricePerSlot: number;
}

const RoomCard: React.FC<RoomCardProps> = ({
  image,
  name,
  capacity,
  pricePerSlot,
}) => {
  return (
    <motion.div
      className="bg-white border rounded-lg shadow-lg transform transition-all duration-300 ease-in-out hover:scale-102"
      whileHover={{ scale: 1.02 }} // Slightly zoom in the card on hover
      whileTap={{ scale: 0.98 }} // Slightly shrink the card on click
      transition={{ duration: 0.3 }} // Smooth transition for scaling
    >
      {/* Image */}
      <motion.div
        className="relative overflow-hidden rounded-t-lg"
        whileHover={{ scale: 1.05 }} // Slightly zoom in the image on hover
        transition={{ duration: 0.2 }} // Faster transition for the image zoom
      >
        <img
          src={image}
          alt={name}
          className="object-cover w-full h-60 md:h-48 lg:h-64 transition-transform duration-300" // Different heights for various screens
        />
      </motion.div>

      {/* Content */}
      <div className="p-4 md:p-6 space-y-4">
        {/* Room Name */}
        <h2 className="text-xl md:text-2xl font-bold text-gray-700">{name}</h2>

        {/* Capacity */}
        <p className="text-base md:text-lg text-gray-700 font-medium">
          Capacity: {capacity}
        </p>

        {/* Price Per Slot */}
        <p className="text-lg md:text-xl font-semibold text-gray-700">
          PricePerSlot: ${pricePerSlot}
        </p>

        {/* See Details Button */}
        <motion.button
          className="px-8 py-3 bg-[#005FA8] text-white font-semibold rounded-lg shadow-md hover:bg-[#002766] transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => (window.location.href = "")}
        >
          See Details
        </motion.button>
      </div>
    </motion.div>
  );
};

export default RoomCard;
