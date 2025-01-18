import React from "react";
import { motion } from "framer-motion";
import RoomCard from "./RoomCard"; // Import RoomCard component

const FeaturedRooms: React.FC = () => {
  const rooms = [
    {
      id: 1,
      imageUrl: "https://via.placeholder.com/300",
      name: "Conference Room A",
      capacity: "12 people",
      pricePerSlot: "$100/hour",
    },
    {
      id: 2,
      imageUrl: "https://via.placeholder.com/300",
      name: "Meeting Room B",
      capacity: "8 people",
      pricePerSlot: "$75/hour",
    },
    {
      id: 3,
      imageUrl: "https://via.placeholder.com/300",
      name: "Board Room C",
      capacity: "15 people",
      pricePerSlot: "$120/hour",
    },
    {
      id: 4,
      imageUrl: "https://via.placeholder.com/300",
      name: "Training Room D",
      capacity: "25 people",
      pricePerSlot: "$150/hour",
    },
    {
      id: 5,
      imageUrl: "https://via.placeholder.com/300",
      name: "Strategy Room E",
      capacity: "10 people",
      pricePerSlot: "$80/hour",
    },
    {
      id: 6,
      imageUrl: "https://via.placeholder.com/300",
      name: "Small Meeting Room F",
      capacity: "5 people",
      pricePerSlot: "$50/hour",
    },
    {
      id: 7,
      imageUrl: "https://via.placeholder.com/300",
      name: "Collaboration Room G",
      capacity: "20 people",
      pricePerSlot: "$110/hour",
    },
    {
      id: 8,
      imageUrl: "https://via.placeholder.com/300",
      name: "Executive Room H",
      capacity: "6 people",
      pricePerSlot: "$90/hour",
    },
  ];

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
          onClick={() => (window.location.href = "/")}
        >
          See More Rooms
        </motion.button>
      </div>
    </div>
  );
};

export default FeaturedRooms;
