import React from "react";
import styles from "./PopularSearchList.module.css";

const PopularSearchList = (props) => {
  const getSubredditList = () => {
    if (!props.data || props.data.length === 0)
      return <p className={styles["popular-search-list__no-data"]}>no data...</p>;
    else {
      return props.data.map((item) => (
        <div className={styles["popular-search-list__subreddit"]} key={item.subreddit}>
          {item.subreddit}
        </div>
      ));
    }
  };

  return (
    <div className={styles["popular-search-list"]}>
      <div className={styles["popular-search-list__heading"]}>Popular Searches</div>
      {getSubredditList()}
    </div>
  );
};

export default PopularSearchList;
