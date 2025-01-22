import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the Slot type
interface Slot {
  _id: string;
  isBooked: boolean;
}

// Define the Booking state
interface BookingState {
  room: {
    name: string | null;
    bookingDate: string | null;
    isBooked: boolean;
  };
  slots: Slot[]; // Array of slots
}

const initialState: BookingState = {
  room: {
    name: null,
    bookingDate: null,
    isBooked: false,
  },
  slots: [], // Initialize with an empty array
};

const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    // Book the room by setting name, date, and booking status
    bookRoom: (
      state,
      action: PayloadAction<{ name: string; bookingDate: string }>
    ) => {
      state.room.name = action.payload.name;
      state.room.bookingDate = action.payload.bookingDate;
      state.room.isBooked = true;
    },

    // Update the `isBooked` status for the selected slots
    updateSlotBookingStatus(state, action: PayloadAction<string[]>) {
      // Update slot booking status
      state.slots = state.slots.map((slot) =>
        action.payload.includes(slot._id) ? { ...slot, isBooked: true } : slot
      );
    },

    // Set the initial slots (could be from an API)
    setSlots(state, action: PayloadAction<Slot[]>) {
      state.slots = action.payload;
    },
  },
});

export const { bookRoom, updateSlotBookingStatus, setSlots } =
  bookingSlice.actions;

export default bookingSlice.reducer;
