import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useForm } from "react-hook-form";
import {
  useGetRoomsQuery,
  useUpdateRoomMutation,
} from "../../redux/api/roomApi";

const UpdateRoom: React.FC = () => {
  const { roomId } = useParams<{ roomId: string }>();
  const navigate = useNavigate();

  // Fetch the room data
  const {
    data: roomData,
    error: fetchError,
    isLoading: fetchingRoom,
    refetch,
  } = useGetRoomsQuery(); // Fetch room details

  const rooms = roomData?.data || []; // Check if data is available and fall back to an empty array
  const room = rooms.find((room) => room._id === roomId);

  // Mutation for updating the room
  const [updateRoom, { isLoading: isUpdating }] = useUpdateRoomMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    defaultValues: {
      name: "",
      roomNo: "",
      floorNo: "",
      capacity: "",
      pricePerSlot: "",
    },
  });

  // On successful fetch, set default values in the form
  useEffect(() => {
    if (room) {
      setValue("name", room.name || "");
      setValue("roomNo", room.roomNo || "");
      setValue("floorNo", room.floorNo || "");
      setValue("capacity", room.capacity || "");
      setValue("pricePerSlot", room.pricePerSlot || "");
    }
  }, [room, setValue]);

  // Handle form submission
  const onSubmit = (formData: any) => {
    const updatedRoom = {
      id: roomId!, // The id retrieved from the URL
      name: formData.name,
      roomNo: parseFloat(formData.roomNo),
      floorNo: parseFloat(formData.floorNo),
      capacity: parseFloat(formData.capacity),
      pricePerSlot: parseFloat(formData.pricePerSlot),
    };

    // Call the mutation to update the room
    updateRoom({ id: roomId!, data: updatedRoom })
      .unwrap()
      .then(() => {
        toast.success("Room updated successfully!");
        refetch(); // Refetch the updated room
        navigate("/admin/dashboard?section=room"); // Navigate to the same section in dashboard
      })
      .catch((err) => {
        console.error("Error updating room:", err);
        toast.error("Failed to update room!");
      });
  };

  // Loading state while fetching the room data
  if (fetchingRoom) {
    return <div>Loading...</div>;
  }

  // Error handling if fetching room data fails
  if (fetchError) {
    return <div>Error fetching room details</div>;
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      {/* Toastify Container */}
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />

      <h2 className="text-2xl font-semibold text-center mb-4">Update Room</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Name */}
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Room Name
          </label>
          <input
            type="text"
            id="name"
            {...register("name")}
            className="mt-1 px-3 py-2 border border-gray-300 rounded-md w-full"
          />
        </div>

        {/* Room No. */}
        <div>
          <label
            htmlFor="roomNo"
            className="block text-sm font-medium text-gray-700"
          >
            Room No.
          </label>
          <input
            type="text"
            id="roomNo"
            {...register("roomNo")}
            className="mt-1 px-3 py-2 border border-gray-300 rounded-md w-full"
          />
          {errors.roomNo && (
            <p className="text-red-500 text-sm">{errors.roomNo.message}</p>
          )}
        </div>

        {/* Floor No. */}
        <div>
          <label
            htmlFor="floorNo"
            className="block text-sm font-medium text-gray-700"
          >
            Floor No.
          </label>
          <input
            type="text"
            id="floorNo"
            {...register("floorNo")}
            className="mt-1 px-3 py-2 border border-gray-300 rounded-md w-full"
          />
          {errors.floorNo && (
            <p className="text-red-500 text-sm">{errors.floorNo.message}</p>
          )}
        </div>

        {/* Capacity */}
        <div>
          <label
            htmlFor="capacity"
            className="block text-sm font-medium text-gray-700"
          >
            Capacity
          </label>
          <input
            type="number"
            id="capacity"
            {...register("capacity")}
            className="mt-1 px-3 py-2 border border-gray-300 rounded-md w-full"
          />
          {errors.capacity && (
            <p className="text-red-500 text-sm">{errors.capacity.message}</p>
          )}
        </div>

        {/* PricePerSlot */}
        <div>
          <label
            htmlFor="pricePerSlot"
            className="block text-sm font-medium text-gray-700"
          >
            Price Per Slot
          </label>
          <input
            type="number"
            id="pricePerSlot"
            {...register("pricePerSlot")}
            className="mt-1 px-3 py-2 border border-gray-300 rounded-md w-full"
          />
          {errors.pricePerSlot && (
            <p className="text-red-500 text-sm">
              {errors.pricePerSlot.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isUpdating}
          className={`mt-4 px-4 py-2 w-full ${
            isUpdating
              ? "bg-gray-300 text-gray-700"
              : "bg-blue-500 text-white hover:bg-blue-600"
          } font-semibold rounded-md`}
        >
          {isUpdating ? "Updating..." : "Update Room"}
        </button>
      </form>
    </div>
  );
};

export default UpdateRoom;
