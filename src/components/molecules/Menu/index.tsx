import React, { useState } from "react";
import { FcShop, FcFactory } from "react-icons/fc";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import DashboardRoutes from "src/routes/Dashboard";
import styles from "./index.module.scss";
const Menu = () => {
  const [activeItem, setActiveItem] = useState("");
  return (
    <aside className={styles.menuWrapper}>
      <Link to={DashboardRoutes.INDEX} className={styles.logo}>
        <FcShop size={50} />
      </Link>
      <nav>
        <ul>
          <li>
            <div className={styles.menuItem}>
              <p onClick={() => setActiveItem("catalog")} className={styles.menuItemTitle}>
                <FcFactory size={50} />
                <span>Catalog</span>
              </p>
              <div
                className={`${styles.menuItemWrapper} ${
                  activeItem === "catalog" ? styles.active : ""
                }`}
              >
                <strong className={styles.menuItemSubtitle}>Catalog</strong>
                <span className={styles.menuItemClose}>
                  <AiOutlineClose size={20} />
                </span>
                <ul className={styles.menuItemList}>
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
export default Menu;
