import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { UserState } from "../../interfaces/user.interfaces";
import { RootState } from "../reducers";
export type IsUserAllowedProps = {
  children: JSX.Element;
  redirectPath?: string;
};
function IsUserAllowed({ children, redirectPath = "/login" }: IsUserAllowedProps) {
  const { user } = useSelector((state: RootState): UserState => state.user);
  const location = useLocation();
  return user?.id ? children : <Navigate to={redirectPath} replace state={{ from: location }} />;
}
export default IsUserAllowed;
