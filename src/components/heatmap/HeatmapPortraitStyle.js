import React from "react";

const HeatmapPortraitStyle = ({ dayHour, screenWidth }) => {
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

  const hourDay = invertDayHour(dayHour);

  const getDaysOfWeek = () => {
    console.log(screenWidth);
    if (screenWidth >= 480) {
      return (
        <tr>
          <th></th>
          <th>Sunday</th>
          <th>Monday</th>
          <th>Tuesday</th>
          <th>Wednesday</th>
          <th>Thursday</th>
          <th>Friday</th>
          <th>Saturday</th>
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

  return (
    <div>
      <table>
        <thead>{getDaysOfWeek()}</thead>
        <tbody>
          {hourDay.map((hours, i) => (
            <tr key={i}>
              <td>
                {i % 12 === 0 ? 12 : i % 12} {i < 12 ? "AM" : "PM"}
              </td>
              {hours.map((hour, j) => (
                <td key={j}>{hour}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HeatmapPortraitStyle;
