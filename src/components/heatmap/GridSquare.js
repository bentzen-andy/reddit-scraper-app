import React from "react";
import styles from "./GridSquare.module.css";

const GridSquare = (props) => {
  let postScore = props.numPosts / 1.0;
  postScore = (postScore / props.maxDailyPosts) * 6;
  postScore = postScore < 1 && postScore > 0 ? 1 : postScore;
  postScore = Math.round(postScore);
  const color = `color-${postScore}`;

  return (
    <td className={`${styles["grid-square"]} ${styles[color]}`}>
      {props.numPosts === 0 ? "-" : props.numPosts}
    </td>
  );
};

export default GridSquare;
