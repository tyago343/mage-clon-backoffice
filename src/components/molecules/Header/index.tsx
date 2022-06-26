import React from "react";
import { useSelector } from "react-redux";
import { FaSearch, FaBell } from "react-icons/fa";
import UserMenu from "../UserMenu";
import { RootState } from "src/services/reducers";
import { UserState } from "src/interfaces/user.interfaces";
import styles from "./index.module.scss";

const Header = () => {
  const { user } = useSelector((state: RootState): UserState => state.user);

  return (
    <header className={styles.headerWrapper}>
      <div>
        <h1 className="page-title">Name of page / Dashboard </h1>
      </div>
      <div className={styles.actionsWrapper}>
        <div>
          <FaSearch size={20} />
        </div>
        <div>
          <FaBell size={20} />
        </div>
        <UserMenu user={user} />
      </div>
    </header>
  );
};
export default Header;
