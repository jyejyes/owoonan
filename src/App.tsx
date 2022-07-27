import React from "react";
import RootRouter from "./routes";
import styled from "styled-components";

function App() {
  return (
    <Backgound>
      <Container>
        <RootRouter />
      </Container>
    </Backgound>
  );
}

export default App;

const Backgound = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
`;

const Container = styled.div`
  padding: 0px;
  margin: 0px;
  width: 360px;
  height: 640px;
  background-color: white;
`;
