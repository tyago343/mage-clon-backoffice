import Button from "@Components/atoms/Button";
import Spinner from "@Components/atoms/Spinner";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link, Outlet } from "react-router-dom"
import DashboardRoutes from "src/routes/Dashboard";
import { fetchCategoriesRequest } from "src/services/actions/category.action";
import { RootState } from "src/services/reducers";

const Category = () => {
  const dispatch = useDispatch();
  const { categories, pending } = useSelector((state: RootState) => state.category);
  useEffect(() => {
    if (!categories.length)
      dispatch(fetchCategoriesRequest());
    return () => { };
  }, [dispatch, categories.length])
  return (
    <>
      <Spinner active={pending} />
      <div>
        <div>
          {/* 
          Here the idea it's build a store selector
        */}
        </div>
        <ul>
          {
            !pending && categories.map(category => (
              <li key={`${category.name}_${category.id}`}>
                <Link
                  to={DashboardRoutes.CATEGORIES.CATEGORY.replace(":identifier", category.id)}
                >
                  {category.name}
                </Link>
              </li>
            ))
          }
        </ul>
        <Button>
          <Link to={DashboardRoutes.CATEGORIES.CREATE}>Create</Link>
        </Button>
        <Outlet />
      </div>
    </>
  )
}

export default Category;