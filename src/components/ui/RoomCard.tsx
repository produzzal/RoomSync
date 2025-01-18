import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface RoomCardProps {
  id: number;
  imageUrl: string;
  name: string;
  capacity: string;
  pricePerSlot: string;
}

const RoomCard: React.FC<RoomCardProps> = ({
  id,
  imageUrl,
  name,
  capacity,
  pricePerSlot,
}) => {
  return (
    <motion.div
      key={id}
      className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      whileHover={{ scale: 1.05 }} // Hover scale effect
      viewport={{ once: true }} // Triggers once when it enters view
    >
      <img
        src={imageUrl}
        alt={name}
        className="w-full h-48 object-cover rounded-md"
      />
      <div className="mt-4">
        <motion.h3
          className="text-lg sm:text-xl font-semibold text-[#003B95]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {name}
        </motion.h3>
        <motion.p
          className="text-gray-600 mt-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {capacity}
        </motion.p>
        <motion.p
          className="text-gray-800 font-semibold mt-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.6 }}
          viewport={{ once: true }}
        >
          {pricePerSlot}
        </motion.p>
      </div>
      <motion.div
        className="mt-4 flex justify-between items-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.8 }}
        viewport={{ once: true }}
      >
        <Link
          to={`/rooms/${id}`} // Link to the Room Details page
          className="text-sm sm:text-base text-[#003B95] font-medium hover:underline"
        >
          See Details
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default RoomCard;
