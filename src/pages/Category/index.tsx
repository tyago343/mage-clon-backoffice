import { Link, Outlet } from "react-router-dom"
import DashboardRoutes from "src/routes/Dashboard";

const Category = () => {
  return (
    <div>
      <Link to={DashboardRoutes.CATEGORIES.CREATE}>Create</Link>
      <Outlet />
    </div>
  )
}

export default Category;