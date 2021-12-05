import React from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles["navbar"]}>
      <a className={styles["navbar__logo-container"]} href="/reddit-scraper-app">
        <div className={styles["navbar__logo"]}>R</div>
      </a>
      <div className={styles["navbar__title"]}>Reddit Scraper App</div>
    </div>
  );
};

export default Navbar;
