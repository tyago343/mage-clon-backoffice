import React from "react";
import { FcShop, FcFactory } from "react-icons/fc";
import { Link } from "react-router-dom";
import DashboardRoutes from "src/routes/Dashboard";
import styles from "./index.module.scss";
const Header = () => {
  return (
    <aside className={styles.menuWrapper}>
      <Link to={DashboardRoutes.INDEX} className={styles.logo}>
        <FcShop size={50} />
      </Link>
      <nav>
        <ul>
          <li>
            <div className={styles.menuItem}>
              <FcFactory size={50} />
              <span>Catalog</span>
              <div>
                <h2>Catalog</h2>
                <ul>
                  <li>
                    <Link to={DashboardRoutes.PRODUCTS}>Products</Link>
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </nav>
    </aside>
  );
};
export default Header;
