import React from "react";

const PopularSearchList = (props) => {
  if (!props.data) return <p>no data...</p>;
  if (props.data.length === 0) return <p>no data...</p>;

  return (
    <React.Fragment>
      {props.data.map((item) => (
        <p key={item.subreddit}>
          {item.subreddit}.....{item.count}
        </p>
      ))}
    </React.Fragment>
  );
};

export default PopularSearchList;
