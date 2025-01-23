import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { useGetRoomQuery } from "../../redux/api/roomApi";

const defaultImage =
  "https://via.placeholder.com/600x400?text=Room+Image+Not+Available";

const RoomDetails = () => {
  const navigate = useNavigate();
  const { roomId } = useParams<{ roomId: string }>();

  // Fetch room data using RTK Query
  const { data: room, error, isLoading } = useGetRoomQuery(roomId);

  // Local state for the main image
  const [mainImage, setMainImage] = useState(defaultImage);

  // Handle loading state
  if (isLoading) {
    return <p className="text-center text-gray-500">Loading room details...</p>;
  }

  // Handle error state
  if (error) {
    return (
      <p className="text-center text-red-500">
        Unable to fetch room details. Please try again later.
      </p>
    );
  }

  // Ensure room data is available
  if (!room) {
    return (
      <p className="text-center text-gray-500">
        Room not found or invalid room ID.
      </p>
    );
  }

  const roomData = room.data;

  // Initialize the main image and additional images
  const additionalImages = roomData.images?.length
    ? roomData.images
    : [
        "https://i.ibb.co/gdZJGG5/download.jpg",
        "https://i.ibb.co/72w0Nn2/download.jpg",
        "https://i.ibb.co/M8PJk5s/download.jpg",
      ];

  // Update main image if room data is valid
  if (roomData.imageLink && mainImage === defaultImage) {
    setMainImage(roomData.imageLink);
  }

  return (
    <div className="room-details-container flex flex-col items-center p-6 space-y-8 bg-gray-50 min-h-screen">
      {/* Header: Title with Room Details */}
      <header className="text-center w-full mb-10">
        <h1 className="text-4xl font-bold text-gray-800">
          A Closer Look at This Room
        </h1>
      </header>

      {/* Room Name */}
      <motion.div
        className="room-name w-full text-center mb-4"
        initial={{ opacity: 0.5, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-semibold text-gray-800">
          {roomData.name}
        </h2>
      </motion.div>

      {/* Main Image */}
      <motion.div
        className="main-image w-full max-w-4xl mb-6"
        initial={{ opacity: 0.5, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <img
          src={mainImage}
          alt={`Room ${roomData.name}`}
          className="w-full h-auto rounded-lg shadow-lg object-cover"
        />
      </motion.div>

      {/* Additional Images */}
      {additionalImages.length > 0 && (
        <div className="additional-images flex space-x-4 overflow-x-auto mt-4 mb-6">
          {additionalImages.map((image, index) => (
            <motion.div
              key={index}
              className="additional-image w-32 h-32 cursor-pointer"
              onClick={() => setMainImage(image)}
              whileHover={{ scale: 1.1 }}
            >
              <img
                src={image}
                alt={`Room ${roomData.name} - ${index + 1}`}
                className="w-full h-full object-cover rounded-lg shadow-md"
              />
            </motion.div>
          ))}
        </div>
      )}

      {/* Room Details with Scroll Animation */}
      <motion.div
        className="details-section w-full max-w-3xl bg-white p-8 rounded-lg shadow-lg space-y-6 mt-8"
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.6 },
        }}
        initial={{ opacity: 0, y: 50 }} // Animation when it is out of view
        viewport={{ once: true }} // Trigger only once when the element enters the viewport
      >
        <h2 className="text-3xl font-bold text-gray-800">Room Information</h2>
        <ul className="text-lg text-gray-700 space-y-4">
          <li className="flex justify-between">
            <span className="font-semibold text-gray-800">Room No.:</span>{" "}
            <span className="text-gray-600">{roomData.roomNo}</span>
          </li>
          <li className="flex justify-between">
            <span className="font-semibold text-gray-800">Floor No.:</span>{" "}
            <span className="text-gray-600">{roomData.floorNo}</span>
          </li>
          <li className="flex justify-between">
            <span className="font-semibold text-gray-800">Capacity:</span>{" "}
            <span className="text-gray-600">{roomData.capacity}</span>
          </li>
          <li className="flex justify-between">
            <span className="font-semibold text-gray-800">Price Per Slot:</span>{" "}
            <span className="text-gray-600">{roomData.pricePerSlot} BDT</span>
          </li>
          <li className="flex justify-between">
            <span className="font-semibold text-gray-800">Amenities:</span>{" "}
            <span className="text-gray-600">
              {roomData.amenities?.join(", ") || "No amenities listed"}
            </span>
          </li>
        </ul>
      </motion.div>

      {/* Book Now Button */}
      <motion.button
        className="px-8 py-3 bg-[#005FA8] text-white font-semibold rounded-lg shadow-md hover:bg-[#002766] transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => (window.location.href = `/booking/${roomId}`)}
      >
        Book Now
      </motion.button>
    </div>
  );
};

export default RoomDetails;
