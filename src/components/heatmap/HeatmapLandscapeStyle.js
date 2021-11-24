import React from "react";

const HeatmapLandscapeStyle = ({ dayHour }) => {
  const week = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>12 AM</th>
            <th>1 AM</th>
            <th>2 AM</th>
            <th>3 AM</th>
            <th>4 AM</th>
            <th>5 AM</th>
            <th>6 AM</th>
            <th>7 AM</th>
            <th>8 AM</th>
            <th>9 AM</th>
            <th>10 AM</th>
            <th>11 AM</th>
            <th>12 PM</th>
            <th>1 PM</th>
            <th>2 PM</th>
            <th>3 PM</th>
            <th>4 PM</th>
            <th>5 PM</th>
            <th>6 PM</th>
            <th>7 PM</th>
            <th>8 PM</th>
            <th>9 PM</th>
            <th>10 PM</th>
            <th>11 PM</th>
          </tr>
        </thead>
        <tbody>
          {dayHour.map((days, i) => (
            <tr key={i}>
              <td>{week[i]}</td>
              {days.map((day, j) => (
                <td key={j}>{day}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HeatmapLandscapeStyle;
