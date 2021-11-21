import React from "react";

const RedditDataList = (props) => {
  let dayHour = {
    sun: new Array(24).fill(0),
    mon: new Array(24).fill(0),
    tue: new Array(24).fill(0),
    wed: new Array(24).fill(0),
    thr: new Array(24).fill(0),
    fri: new Array(24).fill(0),
    sat: new Array(24).fill(0),
  };

  for (const item of props.data) {
    if (item.day === 0) dayHour.sun[parseInt(item.hour, 10)]++;
    if (item.day === 1) dayHour.mon[parseInt(item.hour, 10)]++;
    if (item.day === 2) dayHour.tue[parseInt(item.hour, 10)]++;
    if (item.day === 3) dayHour.wed[parseInt(item.hour, 10)]++;
    if (item.day === 4) dayHour.thr[parseInt(item.hour, 10)]++;
    if (item.day === 5) dayHour.fri[parseInt(item.hour, 10)]++;
    if (item.day === 6) dayHour.sat[parseInt(item.hour, 10)]++;
  }

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
          <tr>
            <td>Sunday</td>
            {dayHour.sun.map((hour, i) => (
              <td key={`0-${i}`}>{hour}</td>
            ))}
          </tr>
          <tr>
            <td>Monday</td>
            {dayHour.mon.map((hour, i) => (
              <td key={`0-${i}`}>{hour}</td>
            ))}
          </tr>
          <tr>
            <td>Tuesday</td>
            {dayHour.tue.map((hour, i) => (
              <td key={`0-${i}`}>{hour}</td>
            ))}
          </tr>
          <tr>
            <td>Wednesday</td>
            {dayHour.wed.map((hour, i) => (
              <td key={`0-${i}`}>{hour}</td>
            ))}
          </tr>
          <tr>
            <td>Thursday</td>
            {dayHour.thr.map((hour, i) => (
              <td key={`0-${i}`}>{hour}</td>
            ))}
          </tr>
          <tr>
            <td>Friday</td>
            {dayHour.fri.map((hour, i) => (
              <td key={`0-${i}`}>{hour}</td>
            ))}
          </tr>
          <tr>
            <td>Saturday</td>
            {dayHour.sat.map((hour, i) => (
              <td key={`0-${i}`}>{hour}</td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default RedditDataList;
