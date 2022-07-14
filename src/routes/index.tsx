import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RecordPage from "../pages/RecordPage";
import SettingPage from "../pages/SettingPage";
import StatisticPage from "../pages/StatisticPage";
import WorkOutPage from "../pages/WorkOutPage";
import MainPage from "../pages/MainPage";
import AddRoutine from "../pages/AddRoutinePage";

const RootRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/oauth/redirect/" element={<MainPage />} />
        <Route path="/record" element={<RecordPage />} />
        <Route path="/statistic" element={<StatisticPage />} />
        <Route path="/setting" element={<SettingPage />} />
        <Route path="/workout" element={<WorkOutPage />} />
        <Route path="/addroutine" element={<AddRoutine />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RootRouter;
