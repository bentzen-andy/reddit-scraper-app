import React from "react";
import GridSquare from "./GridSquare";

const HeatmapLandscapeStyle = ({ dayHour, maxDailyPosts }) => {
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
      <table cellSpacing="0" cellPadding="0" border="0">
        <thead>
          <tr>
            <th></th>
            <th>
              <div>12</div>
              <div>AM</div>
            </th>
            <th>
              <div>1</div>
              <div>AM</div>
            </th>
            <th>
              <div>2</div>
              <div>AM</div>
            </th>
            <th>
              <div>3</div>
              <div>AM</div>
            </th>
            <th>
              <div>4</div>
              <div>AM</div>
            </th>
            <th>
              <div>5</div>
              <div>AM</div>
            </th>
            <th>
              <div>6</div>
              <div>AM</div>
            </th>
            <th>
              <div>7</div>
              <div>AM</div>
            </th>
            <th>
              <div>8</div>
              <div>AM</div>
            </th>
            <th>
              <div>9</div>
              <div>AM</div>
            </th>
            <th>
              <div>10</div>
              <div>AM</div>
            </th>
            <th>
              <div>11</div>
              <div>AM</div>
            </th>
            <th>
              <div>12</div>
              <div>PM</div>
            </th>
            <th>
              <div>1</div>
              <div>PM</div>
            </th>
            <th>
              <div>2</div>
              <div>PM</div>
            </th>
            <th>
              <div>3</div>
              <div>PM</div>
            </th>
            <th>
              <div>4</div>
              <div>PM</div>
            </th>
            <th>
              <div>5</div>
              <div>PM</div>
            </th>
            <th>
              <div>6</div>
              <div>PM</div>
            </th>
            <th>
              <div>7</div>
              <div>PM</div>
            </th>
            <th>
              <div>8</div>
              <div>PM</div>
            </th>
            <th>
              <div>9</div>
              <div>PM</div>
            </th>
            <th>
              <div>10</div>
              <div>PM</div>
            </th>
            <th>
              <div>11</div>
              <div>PM</div>
            </th>
          </tr>
        </thead>
        <tbody>
          {dayHour.map((days, i) => (
            <tr key={i}>
              <td style={{ textAlign: "right" }}>{week[i]}</td>
              {days.map((day, j) => (
                <GridSquare
                  key={j}
                  numPosts={day}
                  maxDailyPosts={maxDailyPosts}
                />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HeatmapLandscapeStyle;
