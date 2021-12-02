import React from "react";
import GridSquare from "./GridSquare";

const HeatmapLandscapeStyle = ({ dayHour, maxDailyPosts }) => {
  const week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  return (
    <div>
      <table className="heatmap" cellSpacing="0" cellPadding="0" border="0">
        <thead>
          <tr>
            <th></th>
            {dayHour[0].map((hour, i) => (
              <th key={i}>
                <div>{i % 12 === 0 ? 12 : i % 12}</div>
                <div>{i < 12 ? "AM" : "PM"}</div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {dayHour.map((days, i) => (
            <tr key={i}>
              <td style={{ textAlign: "right" }}>{week[i]}</td>
              {days.map((day, j) => (
                <GridSquare key={j} numPosts={day} maxDailyPosts={maxDailyPosts} />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HeatmapLandscapeStyle;
