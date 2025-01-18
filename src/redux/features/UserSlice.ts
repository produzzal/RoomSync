import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Initialize state with values from localStorage, if available
const initialState = {
  token: localStorage.getItem("token") || "",
  user: JSON.parse(
    localStorage.getItem("user") ||
      '{"_id": "", "email": "", "role": "", "exp": "", "iat": ""}'
  ),
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
      localStorage.setItem("token", action.payload); // Save token to localStorage
    },
    setUser: (state, action: PayloadAction<any>) => {
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload)); // Save user to localStorage
    },
    clearUser: (state) => {
      state.token = "";
      state.user = {
        _id: "",
        email: "",
        role: "",
        exp: "",
        iat: "",
      };
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    },
  },
});

export const { setToken, setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
