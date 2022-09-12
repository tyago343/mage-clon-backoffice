import Button from "@Components/atoms/Button";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link, Outlet } from "react-router-dom"
import DashboardRoutes from "src/routes/Dashboard";
import { fetchCategoriesRequest } from "src/services/actions/category.action";
import { RootState } from "src/services/reducers";

const Category = () => {
  const dispatch = useDispatch();
  const {categories, pending } = useSelector((state: RootState) => state.category);
  useEffect(() => {
    dispatch(fetchCategoriesRequest());
    return () => {};
  }, [dispatch])
  return (
    <div>
      <div>
        {/* 
          Here the idea it's build a store selector
        */}
      </div>
      {
        pending && "pensando"
      }
      {
        !pending && categories && categories.map(category => (
          <div>
            {category.name}
          </div>
        ))
      }
      <Button>
        <Link to={DashboardRoutes.CATEGORIES.CREATE}>Create</Link>
      </Button>
      <Outlet />
    </div>
  )
}

export default Category;