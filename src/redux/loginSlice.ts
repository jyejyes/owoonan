import { createSlice } from "@reduxjs/toolkit";

interface UserState {
  loginStatus: boolean;
  userData: UserData | null;
}
interface UserData {
  usename: string;
  roleType: string;
  email: string;
}
const initialState: UserState = { loginStatus: false, userData: null };

const LoginSlice = createSlice({
  name: "loginSlice",
  initialState,
  reducers: {
    loginAction: (state, action) => {
      state.loginStatus = true;
      state.userData = action.payload;
    },
    logoutAction: (state) => {
      state.loginStatus = false;
      state.userData = null;
      localStorage.removeItem("token");
    },
  },
});

export default LoginSlice;
export const { loginAction, logoutAction } = LoginSlice.actions;
