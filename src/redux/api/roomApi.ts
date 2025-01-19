import { baseApi } from "./baseApi"; // Import your baseApi setup

export const roomApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createRoom: builder.mutation({
      query: (room) => ({
        url: "/rooms", // The API endpoint for creating a room
        method: "POST",
        body: room, // Room data being sent
      }),
    }),
    getRooms: builder.query({
      query: () => ({
        url: "/rooms", // The API endpoint for fetching rooms
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
