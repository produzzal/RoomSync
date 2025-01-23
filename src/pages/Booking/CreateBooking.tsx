import { useForm } from "react-hook-form";
import { useGetSlotsQuery } from "../../redux/api/slotApi";
import { useAppSelector } from "../../redux/hooks";
import { RootState } from "../../redux/store";
import { useGetAllUsersQuery } from "../../redux/api/auth/authApi";
import { useCreateBookingMutation } from "../../redux/api/bookingApi";
import { useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CreateBooking = () => {
  const {
    data: slot,
    isLoading: isLoadingSlot,
    isError: isErrorSlot,
  } = useGetSlotsQuery();
  const { roomId } = useParams<{ roomId: string }>();
  const loggedUser = useAppSelector((state: RootState) => state.user.user);
  const { data, isLoading, isError, refetch } = useGetAllUsersQuery();
  const [
    createBooking,
    { isLoading: isBookingLoading, isError: isBookingError },
  ] = useCreateBookingMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    reset,
  } = useForm();

  if (isLoadingSlot || isLoading) {
    return <div>Loading...</div>;
  }

  if (isErrorSlot || !slot || isError) {
    return <div>Error loading slots. Please try again later.</div>;
  }

  const slotData = slot.data;
  const users = data?.data;
  const user = users.find((user) => user.email === loggedUser.email);

  if (user) {
    setValue("name", user.name);
    setValue("email", user.email);
    setValue("phone", user.phone);
  }

  const selectedDate = watch("date");

  const filteredSlots = selectedDate
    ? slotData.filter(
        (slot: any) => slot.date === selectedDate && !slot.isBooked
      )
    : [];

  const onSubmit = (formData: any) => {
    // Get all selected slot IDs from form data
    const selectedSlotIds = Array.isArray(formData.timeStart)
      ? formData.timeStart
      : formData.timeStart
      ? [formData.timeStart]
      : [];

    if (selectedSlotIds.length === 0) {
      toast.error("Please select at least one slot.");
      return;
    }

    // Validate selected slots against filteredSlots
    const unavailableSlots = selectedSlotIds.filter(
      (slotId: string) =>
        !filteredSlots.some((slot: any) => slot._id === slotId)
    );

    if (unavailableSlots.length > 0) {
      toast.error("Some of the selected slots are unavailable.");
      return;
    }

    // Calculate totalAmount based on the selected slots
    const totalAmount = selectedSlotIds.reduce(
      (total: number, slotId: string) => {
        const selectedSlot = filteredSlots.find(
          (slot: any) => slot._id === slotId
        );
        return total + (selectedSlot?.price || 100);
      },
      0
    );

    const bookingData = {
      user: user._id,
      userDetails: {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
      },
      date: formData.date,
      slots: selectedSlotIds,
      room: roomId,
      totalAmount: totalAmount,
      isConfirmed: "unconfirmed",
      isDeleted: false,
    };

    console.log("bookingData", bookingData);

    const handleBooking = async () => {
      try {
        const res = await createBooking(bookingData).unwrap(); // Await the promise
        console.log(res);
        if (res) {
          window.location.href = res.data.paymentInfo.payment_url;
          refetch();
          reset();
        } else {
          toast.error("Unexpected error occurred during booking.");
        }
      } catch (error) {
        console.error("Booking creation failed:", error);
        toast.error(error.message || "Booking creation failed");
      }
    };

    handleBooking();
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-8 lg:px-16">
      <div className="container mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Reserve Your Spot & Plan Your Perfect Day!
        </h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <h2 className="text-xl font-semibold text-center">
              Your Information
            </h2>
            <label htmlFor="name" className="block text-lg font-medium">
              Name
            </label>
            <input
              id="name"
              type="text"
              className="w-full p-3 border rounded-lg"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-lg font-medium">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full p-3 border rounded-lg"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="phone" className="block text-lg font-medium">
              Phone Number
            </label>
            <input
              id="phone"
              type="tel"
              className="w-full p-3 border rounded-lg"
              {...register("phone", { required: "Phone number is required" })}
            />
            {errors.phone && (
              <p className="text-red-500 text-sm">{errors.phone.message}</p>
            )}
          </div>

          <div className="mb-4 mt-8">
            <label htmlFor="date" className="block text-lg font-medium">
              Select Date For Booking
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

          {selectedDate && filteredSlots.length === 0 ? (
            <div className="text-center text-red-500">
              No available slots for the selected date.
            </div>
          ) : (
            filteredSlots.length > 0 && (
              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-2">Available Slots</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full table-auto">
                    <thead>
                      <tr className="bg-gray-200">
                        <th className="px-4 py-2 border text-left">
                          Start Time
                        </th>
                        <th className="px-4 py-2 border text-left">End Time</th>
                        <th className="px-4 py-2 border text-center">
                          Select Slot
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredSlots.map((slot, index) => (
                        <tr key={index} className="border-b hover:bg-gray-100">
                          <td className="px-4 py-2">{slot.startTime}</td>
                          <td className="px-4 py-2">{slot.endTime}</td>
                          <td className="px-4 py-2 text-center">
                            <input
                              type="checkbox"
                              value={slot._id}
                              {...register("timeStart", { valueAs: "array" })}
                            />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )
          )}

          {filteredSlots.length > 0 && (
            <div className="text-center mt-6">
              <button
                type="submit"
                className="w-full px-8 py-3 bg-[#005FA8] text-white font-semibold rounded-lg shadow-md hover:bg-[#002766] transition-colors"
                disabled={isBookingLoading}
              >
                {isBookingLoading ? "processing..." : "Proceed to Payment"}
              </button>
            </div>
          )}
        </form>
      </div>

      {/* Toast Container */}
      <ToastContainer />
    </div>
  );
};

export default CreateBooking;
