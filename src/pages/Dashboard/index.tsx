import React from "react";
import Menu from "@Components/molecules/Menu";
import styles from "./index.module.scss";
import UserMenu from "@Components/molecules/UserMenu";
import { useSelector } from "react-redux";
import { RootState } from "src/services/reducers";
import { UserState } from "src/interfaces/user.interfaces";
const Dashboard = () => {
  const { user } = useSelector((state: RootState): UserState => state.user);
  return (
    <main>
      <Menu />
      <div className={styles.pageWrapper}>
        Esto tiene que funcionar
        <header>
          <h1>Name of page / Dashboard </h1>
          <div>Search</div>
          <div>Notifications</div>
          <UserMenu user={user} />
        </header>
        <main></main>
        <footer></footer>
      </div>
    </main>
  );
};
export default Dashboard;
