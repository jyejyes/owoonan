import React from "react";
import { useSelector } from "react-redux";
import Login from "../components/login/login";

const MainPage = () => {
  const token = useSelector((state: { login }) => state.login.token);
  console.log(token);
  return (
    <h1>
      메인페이지: 로그인 or 운동
      <Login />
    </h1>
  );
};

export default MainPage;
