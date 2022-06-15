import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import "./assets/styles/_global.scss";
import DashboardRoutes from "./routes/Dashboard";
function App() {
  return (
    <Routes>
      <Route path={DashboardRoutes.LOGIN} element={<Login />} />
    </Routes>
  );
}

export default App;
