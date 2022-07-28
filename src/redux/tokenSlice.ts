import { createSlice } from "@reduxjs/toolkit";

interface TokenState {
  token: string | null;
}
const initialState: TokenState = { token: null };

const tokenSlice = createSlice({
  name: "tokenStorage",
  initialState,
  reducers: {
    saveToken: (state, action) => {
      state.token = action.payload;
    },
    deleteToken: (state, action) => {
      state.token = null;
    },
  },
});

export default tokenSlice;
export const { saveToken, deleteToken } = tokenSlice.actions;
