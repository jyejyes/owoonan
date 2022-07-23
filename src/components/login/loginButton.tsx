import React from "react";
import styled from "styled-components";

type PropType = {
  prop: string;
};
const LoginButton = ({ prop }: PropType) => (
  <StyledBtn>
    <a
      href={`http://owoonan.p-e.kr:8080/oauth2/authorization/${prop}?redirect_uri=http://localhost:3000/oauth/redirect`}
    >
      <img src={`image/${prop}.svg`} />
    </a>
  </StyledBtn>
);
export default LoginButton;

const StyledBtn = styled.button`
  width: 48px;
  height: 48px;
  border-radius: 50%;
`;
