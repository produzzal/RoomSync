import { baseApi } from "./baseApi";

export const slotApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createSlot: builder.mutation({
      query: (slot) => ({
        url: "/slots",
        method: "POST",
        body: slot,
      }),
    }),
    getSlots: builder.query({
      query: () => ({
        url: "/slots",
        method: "GET",
      }),
    }),
    updateSlot: builder.mutation({
      query: ({ id, data }) => ({
        url: `/slots/${id}`,
        method: "PUT",
        body: data,
      }),
    }),
    deleteSlot: builder.mutation({
      query: (slotId) => ({
        url: `/slots/${slotId}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useCreateSlotMutation,
  useGetSlotsQuery,
  useUpdateSlotMutation,
  useDeleteSlotMutation,
} = slotApi;
