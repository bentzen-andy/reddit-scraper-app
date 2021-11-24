import React, { useEffect } from "react";
import useScreenSize from "../../hooks/useScreenSize";
import HeatmapLandscapeStyle from "./HeatmapLandscapeStyle";
import HeatmapPortraitStyle from "./HeatmapPortraitStyle";

const RedditDataList = (props) => {
  const { height, width } = useScreenSize();

  const defineDayHourData = () => {
    let dayHour = [
      new Array(24).fill(0),
      new Array(24).fill(0),
      new Array(24).fill(0),
      new Array(24).fill(0),
      new Array(24).fill(0),
      new Array(24).fill(0),
      new Array(24).fill(0),
    ];

    for (const item of props.data) {
      if (item.day === 0) dayHour[0][parseInt(item.hour, 10)]++;
      else if (item.day === 1) dayHour[1][parseInt(item.hour, 10)]++;
      else if (item.day === 2) dayHour[2][parseInt(item.hour, 10)]++;
      else if (item.day === 3) dayHour[3][parseInt(item.hour, 10)]++;
      else if (item.day === 4) dayHour[4][parseInt(item.hour, 10)]++;
      else if (item.day === 5) dayHour[5][parseInt(item.hour, 10)]++;
      else if (item.day === 6) dayHour[6][parseInt(item.hour, 10)]++;
    }
    return dayHour;
  };

  const dayHour = defineDayHourData();

  // every time the screen size changes (e.g., user rotates iPad), check
  // if screen is landscape or portrait and adjust heatmap table accordingly
  useEffect(() => {
    if (!props.data || props.data.length === 0) return <p>No data...</p>;
    if (width > height) return <HeatmapLandscapeStyle dayHour={dayHour} />;
    else return <HeatmapPortraitStyle dayHour={dayHour} screenWidth={width} />;
  }, [height, width, dayHour, props.data]);

  if (!props.data || props.data.length === 0) return <p>No data...</p>;
  if (width > height) return <HeatmapLandscapeStyle dayHour={dayHour} />;
  else return <HeatmapPortraitStyle dayHour={dayHour} screenWidth={width} />;
};

export default RedditDataList;
