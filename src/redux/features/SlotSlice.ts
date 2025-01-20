import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the Slot interface (ensure it matches the structure of slot data)
interface Slot {
  _id: string;
  roomId: string;
  date: string;
  startTime: string;
  endTime: string;
}

interface SlotState {
  slots: Slot[];
}

const initialState: SlotState = {
  slots: [],
};

const slotSlice = createSlice({
  name: "slots",
  initialState,
  reducers: {
    addSlot: (state, action: PayloadAction<Slot>) => {
      state.slots.push(action.payload); // Add a new slot
    },
    updateSlot: (state, action: PayloadAction<Slot>) => {
      const index = state.slots.findIndex(
        (slot) => slot._id === action.payload._id // Match by _id
      );
      if (index !== -1) {
        state.slots[index] = { ...state.slots[index], ...action.payload }; // Update the existing slot
      }
    },
    removeSlot: (state, action: PayloadAction<string>) => {
      state.slots = state.slots.filter((slot) => slot._id !== action.payload);
    },
  },
});

export const { addSlot, updateSlot } = slotSlice.actions;
export default slotSlice.reducer;
