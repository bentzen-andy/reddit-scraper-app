import React from "react";
import styles from "./ErrorMessage.module.css";

const ErrorMessage = (props) => {
  return <div className={styles["error-text"]}>{props.msg}</div>;
};

export default ErrorMessage;
