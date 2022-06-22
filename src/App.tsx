import React from "react";
import Login from "./pages/Login";
import "./assets/styles/_global.scss";
import { Route, Routes } from "react-router-dom";
import DashboardRoutes from "./routes/Dashboard";
import IsUserAllowed from "./services/utils/utils";
import Dashboard from "./pages/Dashboard";
function App() {
  return (
    <Routes>
      <Route index element={<Login />} />
      <Route path={DashboardRoutes.LOGIN} element={<Login />} />
      <Route
        path={DashboardRoutes.INDEX}
        element={
          <IsUserAllowed>
            <Dashboard />
          </IsUserAllowed>
        }
      />
    </Routes>
  );
}

export default App;
