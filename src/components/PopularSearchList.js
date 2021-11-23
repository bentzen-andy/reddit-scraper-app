import React from "react";
import styles from "./PopularSearchList.module.css";

const PopularSearchList = (props) => {
  return (
    <div className={styles["popular-search-list"]}>
      <div className={styles["popular-search-list__heading"]}>
        Popular Searches
      </div>
      {(!props.data || props.data.length === 0) && <p>no data...</p>}
      {props.data.map((item) => (
        <div
          className={styles["popular-search-list__subreddit"]}
          key={item.subreddit}
        >
          {item.subreddit}
        </div>
      ))}
    </div>
  );
};

export default PopularSearchList;
