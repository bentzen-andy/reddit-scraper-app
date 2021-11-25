import React from "react";
import styles from "./HeatmapTitle.module.css";

const HeatmapTitle = (props) => {
  return (
    <div className={styles["title"]}>
      Top rated Reddit posts for: www.reddit.com/r/
      {props.subreddit}
    </div>
  );
};

export default HeatmapTitle;
