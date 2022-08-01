import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getUser } from "../../api/apiClient";
import { loginAction } from "../../redux/loginSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

type PropType = {
  prop: string;
};
const LoginButton = ({ prop }: PropType) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    setToken(new URLSearchParams(location.search).get("token"));
  }, [window.location]);

  useEffect(() => {
    if (token !== null) {
      localStorage.setItem("token", `${token}`);
      getUser().then((res) => {
        dispatch(loginAction(res.data));
        navigate("/");
      });
    }
  }, [token]);

  return (
    <StyledBtn>
      <a
        href={`http://owoonan.p-e.kr:8080/oauth2/authorization/${prop}?redirect_uri=http://localhost:3000/oauth/redirect`}
      >
        <img src={`image/${prop}.svg`} />
      </a>
    </StyledBtn>
  );
};
export default LoginButton;

const StyledBtn = styled.button`
  width: 48px;
  height: 48px;
  border-radius: 50%;
`;
