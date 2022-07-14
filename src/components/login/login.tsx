import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../routes/loginSlice";
import styled from "styled-components";

const Login = () => {
  const dispatch = useDispatch();
  const check = useSelector((state) => state);
  const navigate = useNavigate();

  const [token, setToken] = useState("");

  useEffect(() => {
    setToken(new URLSearchParams(location.search).get("token"));
    if (token) {
      dispatch(login(token));
      if (check) {
        navigate("/");
      }
    }
  }, [token]);
  return (
    <Container>
      <button>
        <a href="http://owoonan.p-e.kr:8080/oauth2/authorization/google?redirect_uri=http://localhost:3000/oauth/redirect ">
          구글
        </a>
      </button>
      <button>
        <a href="http://owoonan.p-e.kr:8080/oauth2/authorization/naver?redirect_uri=http://localhost:3000/oauth/redirect ">
          네이버
        </a>
      </button>
      <button>
        <a href="http://owoonan.p-e.kr:8080/oauth2/authorization/kakao?redirect_uri=http://localhost:3000/oauth/redirect ">
          카카오
        </a>
      </button>
    </Container>
  );
};

export default Login;

const Container = styled.div``;
