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
            <p className={styles.menuItem}>
              <FcFactory size={50} />
              <span>Catalog</span>
            </p>
          </li>
        </ul>
      </nav>
    </aside>
  );
};
export default Header;
