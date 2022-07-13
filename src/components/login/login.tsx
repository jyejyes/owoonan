import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Login = () => (
  <Container>
    <button>
      <Link to="http://localhost:8080/oauth2/authorization/google?redirect_uri=http://localhost:3000/oauth/redirect ">
        구글
      </Link>
    </button>
    <button></button>
    <button></button>
  </Container>
);

export default Login;

const Container = styled.div``;
