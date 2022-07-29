import React from "react";
import styled from "styled-components";
import AppInformation from "../components/setting/AppInformation";
import ExitApp from "../components/setting/ExitApp";
import UserInformation from "../components/setting/UserInformation";
import Tabbar from "../components/Tabbar";

const SettingPage = () => {
  return (
    <>
      <SettingWrapper>
        <UserInformation />
        <AppInformation />
        <ExitApp />
      </SettingWrapper>
      <Tabbar />
    </>
  );
};

export default SettingPage;

const SettingWrapper = styled.main`
  width: 100%;
  height: 100vh;
  background: #f3f3f3;
  overflow: scroll;

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;
