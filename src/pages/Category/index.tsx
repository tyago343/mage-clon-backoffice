import Button from "@Components/atoms/Button";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link, Outlet } from "react-router-dom"
import DashboardRoutes from "src/routes/Dashboard";

const Category = () => {
  const dispatch = useDispatch();
  const categories = useSelector(state => state)
  return (
    <div>
      <div>
        {/* 
          Here the idea it's build a store selector
        */}
      </div>
      <Button>
        <Link to={DashboardRoutes.CATEGORIES.CREATE}>Create</Link>
      </Button>
      <Outlet />
    </div>
  )
}

export default Category;