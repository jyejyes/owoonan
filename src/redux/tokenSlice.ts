import { createSlice } from "@reduxjs/toolkit";

const tokenSlice = createSlice({
  name: "tokenStorage",
  initialState: { token: null },
  reducers: {
    saveToken: (state, action) => {
      state.token = action.payload;
    },
    deleteToken: (state, action) => {
      state.token = action.payload;
    },
  },
});

export default tokenSlice;
export const { saveToken, deleteToken } = tokenSlice.actions;
