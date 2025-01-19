import { Link } from "react-router-dom";
import RoomList from "./RoomList";

const AdminDashboard: React.FC = () => {
  return (
    <div className="container mx-auto p-6 max-w-screen-xl">
      {/* Room Management Section */}
      <div className="mb-12 bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
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

      {/* Slot Management Section */}
      <div className="mb-12 bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Slot Management
        </h2>
        <Link
          to="/admin/add-slot"
          className="px-8 py-3 bg-[#005FA8] text-white font-semibold rounded-lg shadow-md hover:bg-[#002766] active:scale-95 transition-all mb-4 inline-block"
        >
          Create Slot
        </Link>
      </div>

      {/* Booking Management Section */}
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Booking Management
        </h2>
        <Link
          to="/admin/bookings"
          className="px-8 py-3 bg-[#005FA8] text-white font-semibold rounded-lg shadow-md hover:bg-[#002766] active:scale-95 transition-all mb-4 inline-block"
        >
          Create Booking
        </Link>
        <table className="table-auto w-full border-separate border-spacing-0.5 rounded-lg overflow-hidden">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                Room Name
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                User Name
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                Date & Time
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                Status
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white">
            <tr className="border-b hover:bg-gray-50">
              <td className="px-6 py-4 text-sm text-gray-800">Room 101</td>
              <td className="px-6 py-4 text-sm text-gray-800">John Doe</td>
              <td className="px-6 py-4 text-sm text-gray-800">
                2025-01-20 9:00 AM
              </td>
              <td className="px-6 py-4 text-sm text-gray-800">Confirmed</td>
              <td className="px-6 py-4 text-sm">
                <button className="bg-green-500 text-white py-1 px-3 rounded-lg mr-2 hover:bg-green-600 transition duration-300">
                  Approve
                </button>
                <button className="bg-red-500 text-white py-1 px-3 rounded-lg hover:bg-red-600 transition duration-300">
                  Reject
                </button>
                <button className="bg-gray-500 text-white py-1 px-3 rounded-lg hover:bg-gray-600 transition duration-300">
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;
