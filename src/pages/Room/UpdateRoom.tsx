import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useForm, Controller } from "react-hook-form";
import { setRoomData } from "../../redux/features/RoomSlice";
import {
  useGetRoomsQuery,
  useUpdateRoomMutation,
} from "../../redux/api/roomApi";

// Type for room data
const UpdateRoom: React.FC = () => {
  const { roomId } = useParams<{ roomId: string }>();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Redux: Get room data (in case it's already stored in Redux)
  const roomData = useSelector((state: any) => state.room.roomData);

  // API hook: Fetch room data by ID
  const { data, error, isLoading } = useGetRoomsQuery(roomId!);

  // Mutation hook for updating the room
  const [updateRoom, { isLoading: isUpdating, error: updateError }] =
    useUpdateRoomMutation();

  // React Hook Form setup
  const { control, handleSubmit, setValue } = useForm({
    defaultValues: {
      name: roomData?.name || "",
      roomNo: roomData?.roomNo || "",
      floorNo: roomData?.floorNo || "",
      capacity: roomData?.capacity || "",
      pricePerSlot: roomData?.pricePerSlot || "",
      amenities: roomData?.amenities || [],
    },
  });

  // If data exists, populate the form fields directly using setValue
  if (data) {
    setValue("name", data.name);
    setValue("roomNo", data.roomNo);
    setValue("floorNo", data.floorNo);
    setValue("capacity", data.capacity);
    setValue("pricePerSlot", data.pricePerSlot);
    dispatch(setRoomData(data)); // Save room data in Redux if needed
  }

  // Submit handler for the form
  const onSubmit = (formData) => {
    const updatedRoom = {
      id: roomId!,
      name: formData.name,
      roomNo: formData.roomNo ? Number(formData.roomNo) : undefined,
      floorNo: formData.floorNo ? Number(formData.floorNo) : undefined,
      capacity: formData.capacity ? Number(formData.capacity) : undefined,
      pricePerSlot: formData.pricePerSlot
        ? Number(formData.pricePerSlot)
        : undefined,
      amenities: formData.amenities,
      isDeleted: formData.isDeleted,
    };

    updateRoom({ id: roomId!, data: updatedRoom })
      .unwrap()
      .then(() => {
        navigate(`/admin/dashboard`);
        window.location.reload();
      })
      .catch((err) => {
        console.error("Error updating room:", err);
      });
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading room data: {error.message}</div>;

  const errorMessage = updateError ? updateError.message : "";

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-center mb-4">Update Room</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Room Name
          </label>
          <Controller
            control={control}
            name="name"
            render={({ field }) => (
              <input
                {...field}
                id="name"
                className="input w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            )}
          />
        </div>

        <div>
          <label
            htmlFor="roomNo"
            className="block text-sm font-medium text-gray-700"
          >
            Room Number
          </label>
          <Controller
            control={control}
            name="roomNo"
            render={({ field }) => (
              <input
                type="number"
                {...field}
                id="roomNo"
                className="input w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            )}
          />
        </div>

        <div>
          <label
            htmlFor="floorNo"
            className="block text-sm font-medium text-gray-700"
          >
            Floor Number
          </label>
          <Controller
            control={control}
            name="floorNo"
            render={({ field }) => (
              <input
                type="number"
                {...field}
                id="floorNo"
                className="input w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            )}
          />
        </div>

        <div>
          <label
            htmlFor="capacity"
            className="block text-sm font-medium text-gray-700"
          >
            Capacity
          </label>
          <Controller
            control={control}
            name="capacity"
            render={({ field }) => (
              <input
                type="number"
                {...field}
                id="capacity"
                className="input w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            )}
          />
        </div>

        <div>
          <label
            htmlFor="pricePerSlot"
            className="block text-sm font-medium text-gray-700"
          >
            Price per Slot
          </label>
          <Controller
            control={control}
            name="pricePerSlot"
            render={({ field }) => (
              <input
                type="number"
                {...field}
                id="pricePerSlot"
                className="input w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            )}
          />
        </div>

        <div>
          <button
            type="submit"
            className="px-8 py-3 bg-[#005FA8] text-white font-semibold rounded-lg shadow-md hover:bg-[#002766] transition-colors w-full disabled:opacity-50"
            disabled={isUpdating}
          >
            {isUpdating ? "Updating..." : "Update Room"}
          </button>
        </div>

        {updateError && (
          <div className="text-red-500 text-center mt-2">
            Error updating room: {errorMessage || "Something went wrong!"}
          </div>
        )}
      </form>
    </div>
  );
};

export default UpdateRoom;
