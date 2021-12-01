import { render } from "@testing-library/react";
import HeatmapPortraitStyle from "./HeatmapPortraitStyle";

describe("HeatmapPortraitStyle Component: with normal input.", () => {
  it("renders <td> elements if valid data given as input - test_id: HeatmapPortraitStyle_1", () => {
    // Arrange
    const maxDailyPosts = 167;
    let hourDay = new Array(7);
    for (let i = 0; i < hourDay.length; i++) {
      hourDay[i] = new Array(24).fill(0);
    }

    let count = 0;
    for (let i = 0; i < hourDay.length; i++) {
      for (let j = 0; j < hourDay[i].length; j++) {
        hourDay[i][j] = count++;
      }
    }

    // Input is defined with a loop. So output should look like this:
    // [ ["12 AM", 0, 24, 48, 72 ... etc ]
    //   ["1 AM", 1, 25, 49, 73 ... etc ]
    //   ["2 AM", 2, 26, 50, 74 ... etc ]
    //   ...
    // ]

    const { container } = render(
      <HeatmapPortraitStyle dayHour={hourDay} max={maxDailyPosts} />
    );

    // Act ...

    // Assert
    const tableData = container.querySelectorAll("td");
    expect(tableData.length).toBe(192); // 24 hrs * 7 days + 24 hour_labels = 192

    expect(tableData[0].innerHTML).toBe("12 AM");
    expect(tableData[1].innerHTML).toBe("-");
    expect(tableData[2].innerHTML).toBe("24");
    expect(tableData[3].innerHTML).toBe("48");
    expect(tableData[4].innerHTML).toBe("72");
    expect(tableData[5].innerHTML).toBe("96");
    expect(tableData[6].innerHTML).toBe("120");
    expect(tableData[7].innerHTML).toBe("144");
    expect(tableData[8].innerHTML).toBe("1 AM");
    expect(tableData[9].innerHTML).toBe("1");
    expect(tableData[10].innerHTML).toBe("25");
    expect(tableData[11].innerHTML).toBe("49");

    expect(tableData[189].innerHTML).toBe("119");
    expect(tableData[190].innerHTML).toBe("143");
    expect(tableData[191].innerHTML).toBe("167");
  });
});
