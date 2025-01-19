import { baseApi } from "./baseApi";

export const slotApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createSlot: builder.mutation({
      query: (slot) => ({
        url: "/slots", // The API endpoint for creating a room
        method: "POST",
        body: slot, // Room data being sent
      }),
    }),
  }),
});
export const { useCreateSlotMutation } = slotApi;
