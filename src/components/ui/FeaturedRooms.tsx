import React from "react";
import { motion } from "framer-motion";
import RoomCard from "./RoomCard"; // Import RoomCard component
import { useGetRoomsQuery } from "../../redux/api/roomApi";

const FeaturedRooms: React.FC = () => {
  const { data: response } = useGetRoomsQuery();
  const rooms = response?.data || [];

  const displayedRooms = rooms.slice(0, 3); // Slice the array to show only the first 6 rooms

  return (
    <div className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-16">
      {/* Section Header */}
      <section className="text-center mb-12">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-[#003B95]"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }} // Triggers once when it enters view
        >
          Featured Rooms
        </motion.h2>
        <motion.p
          className="text-gray-600 mt-2 text-sm sm:text-base"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          Explore our top meeting rooms for your next session!
        </motion.p>
      </section>

      {/* Room Cards */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayedRooms.map((room) => (
          <RoomCard
            key={room.id}
            id={room.id}
            imageUrl={room.imageUrl}
            name={room.name}
            capacity={room.capacity}
            pricePerSlot={room.pricePerSlot}
          />
        ))}
      </section>

      {/* See More Button */}
      <div className="text-center mt-8">
        <motion.button
          className="px-8 py-3 bg-[#005FA8] text-white font-semibold rounded-lg shadow-md hover:bg-[#002766] transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => (window.location.href = "/meeting-rooms")}
        >
          See More Rooms
        </motion.button>
      </div>
    </div>
  );
};

export default FeaturedRooms;
