import React from "react";
import {
  useDeleteRoomMutation,
  useGetRoomsQuery,
} from "../../redux/api/roomApi";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RoomList: React.FC = () => {
  const { data: response, error, isLoading, refetch } = useGetRoomsQuery();
  const rooms = response?.data || [];

  const [deleteRoom] = useDeleteRoomMutation();

  // Function to handle the deletion
  const handleDelete = async (roomId: string) => {
    const toastId = toast.dark(
      <div className="flex flex-col items-center">
        <p>Are you sure you want to delete this room?</p>
        <div className="flex gap-4 mt-4">
          <button
            onClick={async () => {
              try {
                // Proceed with deletion
                const result = await deleteRoom(roomId).unwrap();
                if (result.success) {
                  // Deletion successful, show success message
                  toast.success("Room deleted successfully!");
                  // Refetch the room list
                  refetch();
                } else {
                  // Deletion failed
                  toast.error("Failed to delete room.");
                }
              } catch (err) {
                console.error("Error deleting room:", err);
                toast.error("Failed to delete room.");
              }
              toast.dismiss(toastId); // Dismiss the confirmation toast
            }}
            className="bg-green-500 text-white py-1 px-4 rounded-lg hover:bg-green-600 transition duration-300"
          >
            Yes
          </button>
          <button
            onClick={() => {
              toast.info("Room deletion cancelled.");
              toast.dismiss(toastId); // Dismiss the confirmation toast on cancel
            }}
            className="bg-red-500 text-white py-1 px-4 rounded-lg hover:bg-red-600 transition duration-300"
          >
            No
          </button>
        </div>
      </div>,
      {
        position: "top-right",
        autoClose: false, // Disable auto-close to keep it open until user action
        hideProgressBar: true,
      }
    );
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading rooms</div>;
  }

  return (
    <div className="p-4">
      {/* Toastify Container */}
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />

      <div className="overflow-x-auto">
        <table className="table-auto w-full border-separate border-spacing-0.5 rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                Room Name
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                Room No.
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                Floor No.
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                Capacity
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                PricePerSlot
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {rooms.map((room) => (
              <tr key={room._id} className="border-b hover:bg-gray-50">
                <td className="px-4 py-4 text-sm text-gray-800">{room.name}</td>
                <td className="px-4 py-4 text-sm text-gray-800">
                  {room.roomNo}
                </td>
                <td className="px-4 py-4 text-sm text-gray-800">
                  {room.floorNo}
                </td>
                <td className="px-4 py-4 text-sm text-gray-800">
                  {room.capacity}
                </td>
                <td className="px-4 py-4 text-sm text-gray-800">
                  ${room.pricePerSlot}
                </td>
                <td className="px-4 py-4 text-sm flex gap-2">
                  {/* Update button */}
                  {room._id && (
                    <Link
                      to={`/admin/update-room/${room._id}`}
                      className="bg-yellow-400 text-white py-1 px-3 rounded-lg hover:bg-yellow-500 transition duration-300"
                    >
                      Update
                    </Link>
                  )}

                  {/* Delete button */}
                  <button
                    className="bg-red-500 text-white py-1 px-3 rounded-lg hover:bg-red-600 transition duration-300"
                    onClick={() => handleDelete(room._id)} // Pass roomId to handleDelete
                    disabled={isLoading} // Disable the button while deleting
                  >
                    {isLoading ? "Deleting..." : "Delete"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RoomList;
