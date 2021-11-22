import React from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles["navbar"]}>
      <div className={styles["navbar__logo"]}>
        <a href="/">[LOGO]</a>
      </div>
      <div className={styles["navbar__title"]}>Reddit Scraper App</div>
    </div>
  );
};

export default Navbar;
