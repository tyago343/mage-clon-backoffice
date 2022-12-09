import Menu from "@Components/molecules/Menu";
import styles from "./index.module.scss";
import Header from "@Components/molecules/Header";
import { Outlet } from "react-router-dom";
const Dashboard = () => {
  return (
    <>
      <Menu />
      <div className={styles.pageWrapper}>
        <div className={styles.noticesWrapper}>Esto tiene que funcionar</div>
        <Header />
        <main className={styles.content}>
          <Outlet />
        </main>
        <footer></footer>
      </div>
    </>
  );
};
export default Dashboard;
