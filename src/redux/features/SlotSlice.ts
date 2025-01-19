// redux/features/SlotSlice.ts
import { createSlice } from "@reduxjs/toolkit";

interface SlotState {
  slots: Array<{
    room: string;
    date: string;
    startTime: string;
    endTime: string;
  }>;
}

const initialState: SlotState = {
  slots: [],
};

const slotSlice = createSlice({
  name: "slots",
  initialState,
  reducers: {
    addSlot: (state, action) => {
      state.slots.push(action.payload);
    },
  },
});

export const { addSlot } = slotSlice.actions;
export default slotSlice.reducer;
