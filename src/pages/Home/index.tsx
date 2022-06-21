import React from "react";
import Menu from "@Components/Menu";
import styles from './index.module.scss'
const Home = () => {
  return (
    <main>
      <Menu />
      <div className={styles.pageWrapper}>Esto tiene que funcionar</div>
      <header></header>
      <main></main>
      <footer></footer>
    </main>
  );
};
export default Home;
