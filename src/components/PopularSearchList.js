import React from "react";

const PopularSearchList = (props) => {
  if (!props.data) return <p>no data...</p>;
  if (Object.keys(props.data).length === 0) return <p>no data...</p>;

  return (
    <React.Fragment>
      {Object.entries(props.data).map((item) => (
        <p key={item[0]}>
          {item[0]}.....{item[1]}
        </p>
      ))}
    </React.Fragment>
  );
};

export default PopularSearchList;
