import React from "react";
import { useForm } from "react-hook-form";
import {
  useCreateSlotMutation,
  useGetSlotsQuery,
} from "../../redux/api/slotApi";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface IFormInputs {
  room: string;
  date: string;
  startTime: string;
  endTime: string;
}

const AddSlot: React.FC = () => {
  const [createSlot, { isLoading, error }] = useCreateSlotMutation();
  const { refetch } = useGetSlotsQuery();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormInputs>();

  const onSubmit = async (data: IFormInputs) => {
    try {
      await createSlot(data).unwrap();
      reset();
      // unwrap to handle success or error
      toast.success("Slot successfully created!");
      refetch();
    } catch (err) {
      toast.error("Error creating slot. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-8 lg:px-16">
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar
        newestOnTop
        closeButton
      />
      <div className="container mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Add New Slot
        </h2>

        {/* Error Message */}
        {error && (
          <p className="text-red-500 mb-4">
            There was an error creating the slot. Please try again.
          </p>
        )}

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Room Input */}
          <div className="mb-4">
            <label htmlFor="room" className="block text-lg font-medium">
              Room ID
            </label>
            <input
              id="room"
              type="text"
              placeholder="Room ID"
              className="w-full p-3 border rounded-lg"
              {...register("room", { required: "Room is required" })}
            />
            {errors.room && (
              <p className="text-red-500 text-sm">{errors.room.message}</p>
            )}
          </div>

          {/* Date Input */}
          <div className="mb-4">
            <label htmlFor="date" className="block text-lg font-medium">
              Date
            </label>
            <input
              id="date"
              type="date"
              className="w-full p-3 border rounded-lg"
              {...register("date", { required: "Date is required" })}
            />
            {errors.date && (
              <p className="text-red-500 text-sm">{errors.date.message}</p>
            )}
          </div>

          {/* Start Time Input */}
          <div className="mb-4">
            <label htmlFor="startTime" className="block text-lg font-medium">
              Start Time
            </label>
            <input
              id="startTime"
              type="time"
              className="w-full p-3 border rounded-lg"
              {...register("startTime", { required: "Start time is required" })}
            />
            {errors.startTime && (
              <p className="text-red-500 text-sm">{errors.startTime.message}</p>
            )}
          </div>

          {/* End Time Input */}
          <div className="mb-4">
            <label htmlFor="endTime" className="block text-lg font-medium">
              End Time
            </label>
            <input
              id="endTime"
              type="time"
              className="w-full p-3 border rounded-lg"
              {...register("endTime", { required: "End time is required" })}
            />
            {errors.endTime && (
              <p className="text-red-500 text-sm">{errors.endTime.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600"
              disabled={isLoading} // Disable button while loading
            >
              {isLoading ? "Adding..." : "Add Slot"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddSlot;
