import React from "react";
import styled from "styled-components";

type PropType = {
  pageName: string;
};
const PageNameBar = ({ pageName }: PropType) => (
  <Container>
    <PageName>{pageName}</PageName>
  </Container>
);
export default PageNameBar;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 5rem;
  border-bottom: 1px solid ${({ theme }) => theme.color.whisper};
`;

const PageName = styled.h1`
  font-family: "SEBANG_Gothic";
  font-size: 2rem;
`;
