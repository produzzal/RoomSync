import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import RoomList from "./RoomList";
import SlotList from "./SlotList";

const AdminDashboard: React.FC = () => {
  const navigate = useNavigate();

  // Check if there's a saved section in localStorage or default to 'room'
  const [activeSection, setActiveSection] = useState<
    "room" | "slot" | "booking"
  >(
    (localStorage.getItem("activeSection") as "room" | "slot" | "booking") ||
      "room"
  );

  // Update the localStorage whenever the active section changes
  useEffect(() => {
    localStorage.setItem("activeSection", activeSection);
    // Change the URL based on the active section
    navigate(`?section=${activeSection}`, { replace: true });
  }, [activeSection, navigate]);

  return (
    <div className="container mx-auto p-6 max-w-screen-xl">
      {/* Section selection buttons */}
      <div className="flex mb-6 justify-center">
        <button
          onClick={() => setActiveSection("room")}
          className={`px-6 py-2 text-white font-semibold rounded-lg mr-4 ${
            activeSection === "room"
              ? "bg-blue-600"
              : "bg-gray-500 hover:bg-gray-600"
          }`}
        >
          Room Management
        </button>
        <button
          onClick={() => setActiveSection("slot")}
          className={`px-6 py-2 text-white font-semibold rounded-lg mr-4 ${
            activeSection === "slot"
              ? "bg-blue-600"
              : "bg-gray-500 hover:bg-gray-600"
          }`}
        >
          Slot Management
        </button>
        <button
          onClick={() => setActiveSection("booking")}
          className={`px-6 py-2 text-white font-semibold rounded-lg ${
            activeSection === "booking"
              ? "bg-blue-600"
              : "bg-gray-500 hover:bg-gray-600"
          }`}
        >
          Booking Management
        </button>
      </div>

      {/* Room Management Section */}
      {activeSection === "room" && (
        <div className="mb-12 bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
            Room Management
          </h2>
          <Link
            to="/admin/add-room"
            className="px-8 py-3 bg-[#005FA8] text-white font-semibold rounded-lg shadow-md hover:bg-[#002766] active:scale-95 transition-all mb-4 inline-block"
          >
            Create Room
          </Link>
          <RoomList />
        </div>
      )}

      {/* Slot Management Section */}
      {activeSection === "slot" && (
        <div className="mb-12 bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
            Slot Management
          </h2>
          <Link
            to="/admin/add-slot"
            className="px-8 py-3 bg-[#005FA8] text-white font-semibold rounded-lg shadow-md hover:bg-[#002766] active:scale-95 transition-all mb-4 inline-block"
          >
            Create Slot
          </Link>
          <SlotList />
        </div>
      )}

      {/* Booking Management Section */}
      {activeSection === "booking" && (
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
            Booking Management
          </h2>
          {/* Your table for Booking Management */}
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
