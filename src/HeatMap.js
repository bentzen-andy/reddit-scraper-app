import React from "react";

const HeatMap = () => {
  const data = async () => {
    const response = await fetch(
      "https://www.reddit.com/r/askreddit/top.json?t=month&limit=100"
    );
    const data = await response.json();
    const data_1 = data.data.children.map((item) => ({
      upvote_ratio: item.data.upvote_ratio,
      day: new Date(item.data.created_utc * 1000).getDay(),
      date: new Date(item.data.created_utc * 1000)
        .toLocaleString("en-GB", { timeZone: "UTC" })
        .split(", ")[0],
      time: new Date(item.data.created_utc * 1000)
        .toLocaleString("en-GB", { timeZone: "UTC" })
        .split(", ")[1],
      hour: new Date(item.data.created_utc * 1000)
        .toLocaleString("en-GB", { timeZone: "UTC" })
        .split(", ")[1]
        .split(":")[0],
    }));
    const data_2 = data_1.sort((a, b) => b.upvote_ratio - a.upvote_ratio);
    const data_3 = data_2.sort(
      (a_1, b_1) => parseInt(a_1.hour) - parseInt(b_1.hour)
    );
    const data_4 = data_3.sort(
      (a_2, b_2) => parseInt(a_2.day) - parseInt(b_2.day)
    );
    return console.log(data_4);
  };

  return <div>{data.map}</div>;
};

export default HeatMap;
