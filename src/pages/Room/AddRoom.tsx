import { useForm, SubmitHandler } from "react-hook-form";
import AdminRoute from "../admin/AdminRoute";
import { useCreateRoomMutation } from "../../redux/api/roomApi";

interface Room {
  id: string;
  name: string;
  roomNo: number;
  floorNo: number;
  capacity: number;
  pricePerSlot: number;
  amenities: string[]; // Ensure amenities is an array of strings
  imageLink: string; // Ensure imageLink is in your interface
}

const availableAmenities = ["Projector", "Whiteboard"];

const AddRoom: React.FC = () => {
  const [createRoom, { isLoading, error }] = useCreateRoomMutation(); // Using mutation hook from roomApi
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setValue,
    getValues,
  } = useForm<Room>({
    defaultValues: {
      amenities: [], // Initialize amenities as an empty array
    },
  });

  const onSubmit: SubmitHandler<Room> = async (data) => {
    const room = { ...data, id: crypto.randomUUID() }; // Add random ID for the new room

    try {
      // Call the API to create the room
      await createRoom(room).unwrap(); // unwrap to access the result directly
      reset(); // Reset form after successful creation
    } catch (err) {
      console.error("Error creating room:", err); // Handle any error
    }
  };

  const handleAmenityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedAmenity = event.target.value;
    const isChecked = event.target.checked;

    // Get the current amenities value
    const currentAmenities = getValues("amenities") || [];

    // Update the amenities list based on the checkbox state
    const updatedAmenities = isChecked
      ? [...currentAmenities, selectedAmenity] // Add if checked
      : currentAmenities.filter((amenity) => amenity !== selectedAmenity); // Remove if unchecked

    // Set the updated amenities value using setValue
    setValue("amenities", updatedAmenities);
  };

  return (
    <AdminRoute>
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
          Add Room
        </h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {/* Room Name */}
          <div className="col-span-1 sm:col-span-2">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Room Name
            </label>
            <input
              id="name"
              type="text"
              {...register("name", { required: "Room name is required" })}
              className="mt-1 block w-full rounded-md border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>

          {/* Room Number */}
          <div>
            <label
              htmlFor="roomNo"
              className="block text-sm font-medium text-gray-700"
            >
              Room No.
            </label>
            <input
              id="roomNo"
              type="number"
              {...register("roomNo", {
                required: "Room number is required",
                valueAsNumber: true,
              })}
              className="mt-1 block w-full rounded-md border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            {errors.roomNo && (
              <p className="text-red-500 text-sm">{errors.roomNo.message}</p>
            )}
          </div>

          {/* Floor Number */}
          <div>
            <label
              htmlFor="floorNo"
              className="block text-sm font-medium text-gray-700"
            >
              Floor No.
            </label>
            <input
              id="floorNo"
              type="number"
              {...register("floorNo", {
                required: "Floor number is required",
                valueAsNumber: true,
              })}
              className="mt-1 block w-full rounded-md border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
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
              id="capacity"
              type="number"
              {...register("capacity", {
                required: "Capacity is required",
                valueAsNumber: true,
              })}
              className="mt-1 block w-full rounded-md border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            {errors.capacity && (
              <p className="text-red-500 text-sm">{errors.capacity.message}</p>
            )}
          </div>

          {/* Price Per Slot */}
          <div>
            <label
              htmlFor="pricePerSlot"
              className="block text-sm font-medium text-gray-700"
            >
              Price Per Slot
            </label>
            <input
              id="pricePerSlot"
              type="number"
              {...register("pricePerSlot", {
                required: "Price per slot is required",
                valueAsNumber: true,
              })}
              className="mt-1 block w-full rounded-md border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            {errors.pricePerSlot && (
              <p className="text-red-500 text-sm">
                {errors.pricePerSlot.message}
              </p>
            )}
          </div>

          {/* Image Link */}
          <div className="col-span-1 sm:col-span-2">
            <label
              htmlFor="imageLink"
              className="block text-sm font-medium text-gray-700"
            >
              Image Link
            </label>
            <input
              id="imageLink"
              type="url"
              {...register("imageLink", { required: "Image link is required" })}
              className="mt-1 block w-full rounded-md border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            {errors.imageLink && (
              <p className="text-red-500 text-sm">{errors.imageLink.message}</p>
            )}
          </div>

          {/* Amenities (Checkboxes) */}
          <div className="col-span-1 sm:col-span-2">
            <label className="block text-sm font-medium text-gray-700">
              Amenities
            </label>
            <div className="grid grid-cols-2 gap-4">
              {availableAmenities.map((amenity) => (
                <label key={amenity} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    value={amenity}
                    onChange={handleAmenityChange}
                    className="h-4 w-4 text-indigo-500 border-gray-300 rounded"
                  />
                  <span className="text-sm">{amenity}</span>
                </label>
              ))}
            </div>
            {errors.amenities && (
              <p className="text-red-500 text-sm">
                {errors.amenities?.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <div className="col-span-1 sm:col-span-2">
            <button
              type="submit"
              className="w-full px-8 py-3 bg-[#005FA8] text-white font-semibold rounded-lg shadow-md hover:bg-[#002766] active:scale-95 transition-all mb-4 inline-block"
              disabled={isLoading}
            >
              {isLoading ? "Adding..." : "Add Room"}
            </button>
            {error && (
              <p className="text-red-500 text-center">{error.message}</p>
            )}
          </div>
        </form>
      </div>
    </AdminRoute>
  );
};

export default AddRoom;
