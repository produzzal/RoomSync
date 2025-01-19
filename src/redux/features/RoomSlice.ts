import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the Room type if you haven't already
interface Room {
  id: string;
  name: string;
  roomNo: string;
  floorNo: string;
  capacity: number;
  pricePerSlot: number;
}

interface RoomState {
  rooms: Room[];
  roomData: Room | null; // Add roomData to store fetched room
}

const initialState: RoomState = {
  rooms: [],
  roomData: null, // Initialize as null
};

const roomSlice = createSlice({
  name: "room",
  initialState,
  reducers: {
    createRoom: (state, action: PayloadAction<Room>) => {
      state.rooms.push(action.payload);
    },
    updateRoom: (state, action: PayloadAction<Room>) => {
      const index = state.rooms.findIndex(
        (room) => room.id === action.payload.id
      );
      if (index !== -1) {
        state.rooms[index] = action.payload;
      }
    },
    deleteRoom: (state, action: PayloadAction<string>) => {
      state.rooms = state.rooms.filter((room) => room.id !== action.payload); // Remove room by ID
    },
    setRoomData: (state, action: PayloadAction<Room>) => {
      state.roomData = action.payload; // Update roomData with fetched room
    },
    searchQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload; // Update the search query
    },
    setCapacityFilter(state, action: PayloadAction<string>) {
      state.capacityFilter = action.payload;
    },
    setPriceFilter(state, action: PayloadAction<string>) {
      state.priceFilter = action.payload;
    },
    setSortOrder(state, action: PayloadAction<string>) {
      state.sortOrder = action.payload;
    },
    clearFilters(state) {
      state.query = "";
      state.capacityFilter = "";
      state.priceFilter = "";
      state.sortOrder = "ascending";
    },
  },
});

export const {
  createRoom,
  updateRoom,
  deleteRoom,
  setRoomData,
  searchQuery,
  setCapacityFilter,
  setPriceFilter,
  setSortOrder,
  clearFilters,
} = roomSlice.actions;
export default roomSlice.reducer;
