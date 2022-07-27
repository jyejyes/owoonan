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

  top: 550px;
  width: 360px;
  height: 90px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 30px;
`;
