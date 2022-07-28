import React from "react";
import styled from "styled-components";
import MenuButton from "./menuButton";

const MenuBar = () => (
  <Container>
    <MenuButton prop={"exercise"} />
    <MenuButton prop={"record"} />
    <MenuButton prop={"statistic"} />
    <MenuButton prop={"setting"} />
  </Container>
);

export default MenuBar;

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 9rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 3rem;
`;
