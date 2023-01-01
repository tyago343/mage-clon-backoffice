import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";

const UnauthenticatedApp = () => {
  return (
    <Routes>
      <Route index element={<Login />} />
    </Routes>
  );
};
export default UnauthenticatedApp;
