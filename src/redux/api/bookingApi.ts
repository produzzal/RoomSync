import { baseApi } from "./baseApi"; // Import your baseApi setup

export const bookingApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createBooking: builder.mutation({
      query: (booking) => ({
        url: "/bookings",
        method: "POST",
        body: booking,
      }),
    }),
  }),
});

export const { useCreateBookingMutation } = bookingApi;
