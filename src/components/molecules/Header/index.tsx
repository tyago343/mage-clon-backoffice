import React from "react";
import { useSelector } from "react-redux";
import { UserState } from "src/interfaces/user.interfaces";
import { RootState } from "src/services/reducers";
import UserMenu from "../UserMenu";
import styles from "./index.module.scss";
import { FaUser } from "react-icons/fa";

const Header = () => {
  const { user } = useSelector((state: RootState): UserState => state.user);

  return (
    <header className={styles.headerWrapper}>
      <div>
        <h1 className="page-title">Name of page / Dashboard </h1>
      </div>
      <div className={styles.actionsWrapper}>
        <div>        <FaUser size={20} />
</div>
        <div>        <FaUser size={20} />
</div>
        <UserMenu user={user} />
      </div>
    </header>
  );
};
export default Header;
