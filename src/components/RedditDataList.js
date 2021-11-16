import React from "react";

const RedditDataList = (props) => {
  let dayHour = {
    sunday: new Array(24).fill(0),
    monday: new Array(24).fill(0),
    tuesday: new Array(24).fill(0),
    wednesday: new Array(24).fill(0),
    thursday: new Array(24).fill(0),
    friday: new Array(24).fill(0),
    saturday: new Array(24).fill(0),
  };

  for (const item of props.data) {
    if (item.day === 0) dayHour.sunday[parseInt(item.hour, 10)]++;
    if (item.day === 1) dayHour.monday[parseInt(item.hour, 10)]++;
    if (item.day === 2) dayHour.tuesday[parseInt(item.hour, 10)]++;
    if (item.day === 3) dayHour.wednesday[parseInt(item.hour, 10)]++;
    if (item.day === 4) dayHour.thursday[parseInt(item.hour, 10)]++;
    if (item.day === 5) dayHour.friday[parseInt(item.hour, 10)]++;
    if (item.day === 6) dayHour.saturday[parseInt(item.hour, 10)]++;
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
            {dayHour.sunday.map((hour) => (
              <td key={Math.random()}>{hour}</td>
            ))}
          </tr>
          <tr>
            <td>Monday</td>
            {dayHour.monday.map((hour) => (
              <td key={Math.random()}>{hour}</td>
            ))}
          </tr>
          <tr>
            <td>Tuesday</td>
            {dayHour.tuesday.map((hour) => (
              <td key={Math.random()}>{hour}</td>
            ))}
          </tr>
          <tr>
            <td>Wednesday</td>
            {dayHour.wednesday.map((hour) => (
              <td key={Math.random()}>{hour}</td>
            ))}
          </tr>
          <tr>
            <td>Thursday</td>
            {dayHour.thursday.map((hour) => (
              <td key={Math.random()}>{hour}</td>
            ))}
          </tr>
          <tr>
            <td>Friday</td>
            {dayHour.friday.map((hour) => (
              <td key={Math.random()}>{hour}</td>
            ))}
          </tr>
          <tr>
            <td>Saturday</td>
            {dayHour.saturday.map((hour) => (
              <td key={Math.random()}>{hour}</td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default RedditDataList;
