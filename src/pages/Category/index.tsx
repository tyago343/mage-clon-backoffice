import Button from "@Components/atoms/Button";
import Spinner from "@Components/atoms/Spinner";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import DashboardRoutes from "src/routes/Dashboard";
import { fetchCategoriesRequest } from "src/services/actions/category.action";
import { RootState } from "src/services/reducers";
import styles from "./index.module.scss";
const Category = () => {
  const dispatch = useDispatch();
  const { list: categoryList, pending } = useSelector(
    (state: RootState) => state.category
  );
  useEffect(() => {
    const controller = new AbortController();
    if (!categoryList.length) {
      dispatch(fetchCategoriesRequest())};
    return () => {
      controller.abort();
    };
  }, [categoryList.length]);
  return (
    <>
      <Spinner active={pending} />
      <div className={styles.wrapper}>
        <div className={styles.header}>
          {/* 
          Here the idea it's build a store selector
        */}
        </div>
        <div className={styles.columns}>
          <aside className={styles.aside}>
            <div>
              <Button>
                <Link to={DashboardRoutes.CATEGORIES.CREATE}>Create</Link>
              </Button>
            </div>
            <ul>
              {!pending &&
                categoryList.map((category) => (
                  <li key={`${category.name}_${category.id}`}>
                    <Link
                      to={DashboardRoutes.CATEGORIES.CATEGORY.replace(
                        ":identifier",
                        category.id
                      )}
                    >
                      {category.name}
                    </Link>
                  </li>
                ))}
            </ul>
          </aside>
          <main className={styles.container}>
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
};

export default Category;
