import React from "react";
import styles from "./Button.module.css";

const Button = (props) => {
  const cssClasses = props.className
    ? `${props.className} ${styles["btn"]}`
    : styles["btn"];

  return (
    <button className={cssClasses} onClick={props.onClick}>
      {props.btnText}
    </button>
  );
};

export default Button;
