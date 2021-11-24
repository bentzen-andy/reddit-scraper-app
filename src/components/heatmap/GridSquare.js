import React from "react";
import styles from "./GridSquare.module.css";

const GridSquare = (props) => {
  let postScore = props.numPosts / 1.0;
  postScore = (postScore / props.maxDailyPosts) * 6;
  postScore = Math.round(postScore);
  const color = `color-${postScore}`;

  return (
    <td className={`${styles["grid-square"]} ${styles[color]}`}>
      {props.numPosts}
    </td>
  );
};

export default GridSquare;
