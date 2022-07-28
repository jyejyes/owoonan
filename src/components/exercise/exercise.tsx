import React from "react";
import styled from "styled-components";
import MenuBar from "../menuBar/menuBar";
import PageNameBar from "../pageNameBar/pageNameBar";
import RoutineList from "../routineList/routineList";

const Exercise = () => (
  <Container>
    <PageNameBar pageName={"운동"} />
    <RoutineList />
    <MenuBar />
  </Container>
);

export default Exercise;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
