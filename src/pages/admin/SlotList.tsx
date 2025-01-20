import React from "react";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  useDeleteSlotMutation,
  useGetSlotsQuery,
} from "../../redux/api/slotApi";

const SlotList: React.FC = () => {
  const { data: response, error, isLoading, refetch } = useGetSlotsQuery();
  const slots = response?.data || [];
  console.log("slots", slots);
  const [deleteSlot] = useDeleteSlotMutation();

  if (isLoading) {
    return <div className="text-center">Loading...</div>;
  }

  if (error) {
    return <div className="text-center">No Slots Found</div>;
  }

  // Filter out slots with deleted rooms
  const filteredSlots = slots.filter(
    (slot) => !slot.room?.isDeleted // Exclude rooms with isDeleted: true
  );

  const handleDelete = async (slotId: string) => {
    const toastId = toast.dark(
      <div className="flex flex-col items-center">
        <p>Are you sure you want to delete this toast?</p>
        <div className="flex gap-4 mt-4">
          <button
            onClick={async () => {
              try {
                // Proceed with deletion
                const result = await deleteSlot(slotId).unwrap();
                if (result.success) {
                  // Deletion successful, show success message
                  toast.success("Slot deleted successfully!");
                  // Refetch the room list
                  refetch();
                } else {
                  // Deletion failed
                  toast.error("Failed to delete slot.");
                }
              } catch (err) {
                console.error("Error deleting slot:", err);
                toast.error("Failed to delete slot.");
              }
              toast.dismiss(toastId); // Dismiss the confirmation toast
            }}
            className="bg-green-500 text-white py-1 px-4 rounded-lg hover:bg-green-600 transition duration-300"
          >
            Yes
          </button>
          <button
            onClick={() => {
              toast.info("Slot deletion cancelled.");
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

  return (
    <div className="p-4">
      {/* Toastify Container */}
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />

      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-separate border-spacing-0.5 rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                Room Name
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                Room No.
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                Date
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                Start Time
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                End Time
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {filteredSlots.length === 0 ? (
              <tr>
                <td
                  colSpan={6}
                  className="px-4 py-4 text-center text-sm text-gray-800"
                >
                  No available slots
                </td>
              </tr>
            ) : (
              filteredSlots.map((slot) => (
                <tr key={slot._id} className="border-b hover:bg-gray-50">
                  <td className="px-4 py-4 text-sm text-gray-800">
                    {slot.room?.name}
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-800">
                    {slot.room?.roomNo}
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-800">
                    {slot.date}
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-800">
                    {slot.startTime}
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-800">
                    {slot.endTime}
                  </td>
                  <td className="px-4 py-4 text-sm flex gap-2">
                    {/* Update button */}
                    {slot._id && (
                      <Link
                        to={`/admin/update-slot/${slot._id}`}
                        className="bg-yellow-400 text-white py-1 px-3 rounded-lg hover:bg-yellow-500 transition duration-300"
                      >
                        Update
                      </Link>
                    )}

                    {/* Delete button */}
                    <button
                      className="bg-red-500 text-white py-1 px-3 rounded-lg hover:bg-red-600 transition duration-300"
                      disabled={isLoading} // Disable the button while loading
                      onClick={() => handleDelete(slot._id)}
                    >
                      {isLoading ? "Deleting..." : "Delete"}
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SlotList;
