import React from "react";
import { Routes, Route } from "react-router-dom";
import DashboardRoutes from "../routes/Dashboard";
import Home from "./Home";
const AutenticatedApp = () => {
  return <><Route path={DashboardRoutes.INDEX} element={<Home />} /></>;
};
export default AutenticatedApp;
