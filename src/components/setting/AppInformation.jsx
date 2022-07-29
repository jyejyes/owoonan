import React from "react";
import styled from "styled-components";

const AppInformation = () => {
  const appInformations = {
    version: {
      name: "버전",
      route: "",
    },
    inquire: {
      name: "문의하기",
      route: "",
    },
    terms: {
      name: "이용약관",
      route: "",
    },
    policy: {
      name: "개인정보 보호정책",
      route: "",
    },
  };
  return (
    <AppInformationWrapper>
      {Object.entries(appInformations).map((item, index) => (
        <div className="info-name" key={index}>
          <p className="info-text">{item[1].name}</p>
        </div>
      ))}
    </AppInformationWrapper>
  );
};
export default AppInformation;

const AppInformationWrapper = styled.section`
  background: white;
  position: relative;
  margin: 2rem 0;
  & > div {
  }

  .info-name {
    width: 100%;
    padding: 2rem 1.8rem;
    cursor: pointer;

    &:hover {
      background: #f3f3f3;
    }
  }
  .info-text {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: -0.5px;
    color: #000000;
  }
`;
