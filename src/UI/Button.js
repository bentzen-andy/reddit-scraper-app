import React from "react";
import styles from "./Button.module.css";

const Button = (props) => {
  return (
    <button className={styles["btn"]} onClick={props.onClick}>
      {props.btnText}
    </button>
  );
};

export default Button;
