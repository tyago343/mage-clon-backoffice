import CreateCategory from "@Components/molecules/CategoryCreator";
import CategoryViewer from "@Components/molecules/CategoryViewer";
import { Route, Routes } from "react-router-dom";
import Category from "./pages/Category";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Product";
import DashboardRoutes from "./routes/Dashboard";

const AuthenticatedApp = () => {
  return (
    <Routes>
      <Route path={DashboardRoutes.INDEX} element={<Dashboard />}>
        <Route path={DashboardRoutes.PRODUCTS} element={<Products />} />
        <Route path={DashboardRoutes.CATEGORIES.INDEX} element={<Category />}>
          <Route
            path={DashboardRoutes.CATEGORIES.CREATE}
            element={<CreateCategory />}
          />
          <Route
            path={DashboardRoutes.CATEGORIES.CATEGORY}
            element={<CategoryViewer />}
          />
        </Route>
      </Route>
    </Routes>
  );
};
export default AuthenticatedApp;
