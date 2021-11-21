import React from "react";

const PopularSearchList = (props) => {
  if (!props.data) return <p>no data...</p>;

  return (
    <React.Fragment>
      <h1>Popular Searches</h1>

      {Object.entries(props.data).map((item) => (
        <p key={Math.random()}>
          {item[0]}.....{item[1]}
        </p>
      ))}
    </React.Fragment>
  );
};

export default PopularSearchList;
