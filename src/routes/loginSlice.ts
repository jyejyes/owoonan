import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "loginSlice",
  initialState: { token: "" },
  reducers: {
    login: (state, action) => {
      state.token = action.payload;
    },
    logout: (state, action) => {
      state.token = "";
    },
  },
});

export default loginSlice;
export const { login, logout } = loginSlice.actions;
