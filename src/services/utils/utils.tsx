import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { UserState } from "../../interfaces/user.interfaces";
import DashboardRoutes from "../../routes/Dashboard";
import { RootState } from "../reducers";
function IsUserAllowed({ children }: { children: JSX.Element }) {
  const { user } = useSelector((state: RootState): UserState => state.user);
  return user?.id ? children : <Navigate to={DashboardRoutes.LOGIN} />;
}
export default IsUserAllowed;
