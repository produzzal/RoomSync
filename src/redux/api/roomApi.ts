import { baseApi } from "./baseApi"; // Import your baseApi setup

export const roomApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createRoom: builder.mutation({
      query: (room) => ({
        url: "/rooms",
        method: "POST",
        body: room,
      }),
    }),
    getRooms: builder.query({
      query: () => ({
        url: "/rooms",
        method: "GET",
      }),
    }),
    getRoom: builder.query({
      query: (roomId) => ({
        url: `/rooms/${roomId}`,
        method: "GET",
      }),
    }),
    updateRoom: builder.mutation({
      query: ({ id, data }) => ({
        url: `/rooms/${id}`,
        method: "PUT",
        body: data,
      }),
    }),
    deleteRoom: builder.mutation({
      query: (roomId) => ({
        url: `/rooms/${roomId}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useCreateRoomMutation,
  useGetRoomsQuery,
  useUpdateRoomMutation,
  useDeleteRoomMutation,
} = roomApi;
