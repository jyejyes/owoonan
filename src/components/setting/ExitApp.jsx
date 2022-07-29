import React from "react";
import styled from "styled-components";

const ExitApp = () => {
  return (
    <ExitWrapper>
      <div className="info-name">
        <p className="logout">로그아웃</p>
      </div>
      <div className="info-name">
        <p className="exit">회원탈퇴</p>
      </div>
    </ExitWrapper>
  );
};

export default ExitApp;

const ExitWrapper = styled.section`
  background: white;
  position: relative;
  margin: 2rem 0;

  .info-name {
    width: 100%;
    padding: 2rem 1.8rem;
    cursor: pointer;

    &:hover {
      background: #f3f3f3;
    }
  }
  .exit,
  .logout {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: -0.5px;
    color: #000000;
  }

  .exit {
    color: #ff1711;
  }
`;
