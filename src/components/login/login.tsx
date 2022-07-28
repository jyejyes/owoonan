import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { saveToken } from "../../redux/tokenSlice";
import styled from "styled-components";
import LoginButton from "./loginButton";

const Login = () => {
  const dispatch = useDispatch();
  const check = useSelector((state) => state);
  const navigate = useNavigate();

  const [token, setToken] = useState<string | null>(null);
  useEffect(() => {
    setToken(new URLSearchParams(location.search).get("token"));

    if (token) {
      dispatch(saveToken(token));
      if (check) {
        // navigate("/");
      }
    }
  }, [token]);

  return (
    <Container>
      <Logo src="/image/logo.svg" />
      <LogoLetter>오운완</LogoLetter>
      <LoginLetter>3초만에 간편 로그인</LoginLetter>
      <BtnContainer>
        <LoginButton prop={"kakao"} />
        <LoginButton prop={"naver"} />
        <LoginButton prop={"google"} />
      </BtnContainer>
    </Container>
  );
};

export default Login;

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Logo = styled.img`
  position: absolute;
  top: 111px;
  width: 98px;
  height: 98px;
`;
const LogoLetter = styled.p`
  position: absolute;
  top: 246.46px;
  font-family: "SDSamliphopangche";
  font-size: 48px;
  color: ${({ theme }) => theme.color.deepBlue};
`;

const LoginLetter = styled.p`
  position: absolute;
  top: 457px;
  font-family: "NotoSansKR_Regular";
  font-size: ${({ theme }) => theme.size.medium};
`;

const BtnContainer = styled.div`
  position: absolute;
  width: 202px;
  top: 509px;
  display: flex;
  justify-content: space-between;
`;
