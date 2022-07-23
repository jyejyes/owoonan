import React from "react";
import { useSelector } from "react-redux";
import Exercise from "../components/exercise/exercise";
import Login from "../components/login/login";
import { RootReducer } from "../redux/store";

const MainPage = () => {
  const token = useSelector((state: RootReducer) => state.saveToken.token);
  console.log(token);
  return <div>{token ? <Login /> : <Exercise />}</div>;
};

export default MainPage;
