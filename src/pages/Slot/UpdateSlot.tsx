import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useForm } from "react-hook-form";
import {
  useGetSlotsQuery,
  useUpdateSlotMutation,
} from "../../redux/api/slotApi";

const UpdateSlot: React.FC = () => {
  const { slotId } = useParams<{ slotId: string }>();
  const navigate = useNavigate();

  // Fetch the slot data
  const {
    data: slotData,
    error: fetchError,
    isLoading: fetchingSlot,
    refetch,
  } = useGetSlotsQuery(); // Fetch slot details
  console.log(slotData);

  const slots = slotData?.data || []; // Check if data is available and fall back to an empty array
  const slot = slots.find((slot) => slot._id === slotId);

  console.log("2", slot?.date);

  // Mutation for updating the slot
  const [updateSlot, { isLoading: isUpdating }] = useUpdateSlotMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    defaultValues: {
      roomId: "",
      roomNo: "", // Add default value for roomNo
      date: "",
      startTime: "",
      endTime: "",
    },
  });

  // On successful fetch, set default values in the form
  useEffect(() => {
    if (slot) {
      setValue("roomId", slot.room._id || "");
      setValue("roomNo", slot.room.roomNo || ""); // Set the room number
      setValue("date", slot.date || "");
      setValue("startTime", slot.startTime || "");
      setValue("endTime", slot.endTime || "");
    }
  }, [slot, setValue]);

  // Handle form submission
  const onSubmit = (formData: any) => {
    const updatedSlot = {
      id: slotId!, // The id retrieved from the URL
      roomId: formData.roomId,
      roomNo: formData.roomNo, // Include roomNo in the updated slot data
      date: formData.date,
      startTime: formData.startTime,
      endTime: formData.endTime,
    };

    // Call the mutation to update the slot
    updateSlot({ id: slotId!, data: updatedSlot })
      .unwrap()
      .then(() => {
        toast.success("Slot updated successfully!");
        refetch();
        navigate("/admin/dashboard?section=slot");
      })
      .catch((err) => {
        console.error("Error updating slot:", err);
        toast.error("Failed to update slot!");
      });
  };

  // Loading state while fetching the slot data
  if (fetchingSlot) {
    return <div>Loading...</div>;
  }

  // Error handling if fetching slot data fails
  if (fetchError) {
    return <div>Error fetching slot details</div>;
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      {/* Toastify Container */}
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />

      <h2 className="text-2xl font-semibold text-center mb-4">Update Slot</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Room ID */}
        <div>
          <label
            htmlFor="roomId"
            className="block text-sm font-medium text-gray-700"
          >
            Room ID
          </label>
          <input
            type="text"
            id="roomId"
            {...register("roomId")}
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
            readOnly
            className="mt-1 px-3 py-2 border border-gray-300 rounded-md w-full"
          />
        </div>

        {/* Date */}
        <div>
          <label
            htmlFor="date"
            className="block text-sm font-medium text-gray-700"
          >
            Date
          </label>
          <input
            type="date"
            id="date"
            defaultValue={slot?.date || ""}
            {...register("date")}
            className="mt-1 px-3 py-2 border border-gray-300 rounded-md w-full"
          />
          {errors.date && (
            <p className="text-red-500 text-sm">{errors.date.message}</p>
          )}
        </div>

        {/* Start Time */}
        <div>
          <label
            htmlFor="startTime"
            className="block text-sm font-medium text-gray-700"
          >
            Start Time
          </label>
          <input
            type="time"
            id="startTime"
            {...register("startTime")}
            className="mt-1 px-3 py-2 border border-gray-300 rounded-md w-full"
          />
          {errors.startTime && (
            <p className="text-red-500 text-sm">{errors.startTime.message}</p>
          )}
        </div>

        {/* End Time */}
        <div>
          <label
            htmlFor="endTime"
            className="block text-sm font-medium text-gray-700"
          >
            End Time
          </label>
          <input
            type="time"
            id="endTime"
            {...register("endTime")}
            className="mt-1 px-3 py-2 border border-gray-300 rounded-md w-full"
          />
          {errors.endTime && (
            <p className="text-red-500 text-sm">{errors.endTime.message}</p>
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
          {isUpdating ? "Updating..." : "Update Slot"}
        </button>
      </form>
    </div>
  );
};

export default UpdateSlot;
