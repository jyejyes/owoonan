import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Exercise from "../components/exercise/exercise";
import Login from "../components/login/login";
import { logoutAction } from "../redux/loginSlice";
import { RootReducer } from "../redux/store";

const MainPage = () => {
  const [loginState, setLoginState] = useState(false);
  const { loginStatus } = useSelector((state: RootReducer) => state.loginAction);

  useEffect(() => {
    setLoginState(loginStatus);
  }, [loginState, loginStatus]);

  return <>{loginState ? <Exercise /> : <Login />}</>;
};

export default MainPage;
