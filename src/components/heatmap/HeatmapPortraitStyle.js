import React from "react";
import GridSquare from "./GridSquare";

const HeatmapPortraitStyle = ({ dayHour, screenWidth, maxDailyPosts }) => {
  const invertDayHour = (dayHour) => {
    let hourDay = new Array(24);
    for (let i = 0; i < hourDay.length; i++) {
      hourDay[i] = new Array(7).fill(0);
    }

    for (let i = 0; i < hourDay.length; i++) {
      for (let j = 0; j < hourDay[i].length; j++) {
        hourDay[i][j] = dayHour[j][i];
      }
    }

    return hourDay;
  };

  const getDaysOfWeek = () => {
    if (screenWidth >= 480) {
      return (
        <tr>
          <th></th>
          <th>Sun</th>
          <th>Mon</th>
          <th>Tue</th>
          <th>Wed</th>
          <th>Thr</th>
          <th>Fri</th>
          <th>Sat</th>
        </tr>
      );
    } else {
      return (
        <tr>
          <th></th>
          <th>S</th>
          <th>M</th>
          <th>T</th>
          <th>W</th>
          <th>T</th>
          <th>F</th>
          <th>S</th>
        </tr>
      );
    }
  };

  const hourDay = invertDayHour(dayHour);

  return (
    <div>
      <table className="heatmap" cellSpacing="0" cellPadding="0" border="0">
        <thead>{getDaysOfWeek()}</thead>
        <tbody>
          {hourDay.map((hours, i) => (
            <tr key={i}>
              <td>
                {i % 12 === 0 ? 12 : i % 12} {i < 12 ? "AM" : "PM"}
              </td>
              {hours.map((hour, j) => (
                <GridSquare key={j} numPosts={hour} maxDailyPosts={maxDailyPosts} />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HeatmapPortraitStyle;
