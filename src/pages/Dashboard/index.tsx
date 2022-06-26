import React from "react";
import Menu from "@Components/molecules/Menu";
import styles from "./index.module.scss";
import Header from "@Components/molecules/Header";
const Dashboard = () => {
  return (
    <main>
      <Menu />
      <div className={styles.pageWrapper}>
        <div className={styles.noticesWrapper}>Esto tiene que funcionar</div>
        <Header />
        <main></main>
        <footer></footer>
      </div>
    </main>
  );
};
export default Dashboard;
