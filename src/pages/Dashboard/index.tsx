import React from "react";
import Menu from "@Components/molecules/Menu";
import styles from "./index.module.scss";
import Header from "@Components/molecules/Header";
const Dashboard = () => {
  return (
    <main>
      <Menu />
      <div className={styles.pageWrapper}>
        Esto tiene que funcionar
        <Header />
        <main></main>
        <footer></footer>
      </div>
    </main>
  );
};
export default Dashboard;
