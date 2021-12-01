import { render } from "@testing-library/react";
import HeatmapLandscapeStyle from "./HeatmapLandscapeStyle";

describe("HeatmapLandscapeStyle Component: with normal input.", () => {
  it("renders <td> elements if valid data given as input - test_id: HeatmapLandscapeStyle_1", () => {
    // Arrange
    const maxDailyPosts = 167;
    const dayHour = new Array(7);
    dayHour[0] = new Array(24);
    dayHour[1] = new Array(24);
    dayHour[2] = new Array(24);
    dayHour[3] = new Array(24);
    dayHour[4] = new Array(24);
    dayHour[5] = new Array(24);
    dayHour[6] = new Array(24);
    let count = 0;
    for (let i = 0; i < 7; i++) {
      for (let j = 0; j < 24; j++) {
        dayHour[i][j] = count;
        count++;
      }
    }
    // Input is defined with a loop. So output should look like this:
    // [ ["Sunday", 0, 1, 2, 3 ... etc ]
    //   ["Monday", 24, 25, 26, 27 ... etc ]
    //   ["Tuesday", 48, 49, 50, 51 ... etc ]
    //   ...
    // ]

    const { container } = render(
      <HeatmapLandscapeStyle dayHour={dayHour} max={maxDailyPosts} />
    );

    // Act ...

    // Assert
    const tableData = container.querySelectorAll("td");
    expect(tableData.length).toBe(175); // 24 hrs * 7 days + 7 day_labels = 175

    expect(tableData[0].innerHTML).toBe("Sunday");
    expect(tableData[1].innerHTML).toBe("-");
    expect(tableData[2].innerHTML).toBe("1");
    expect(tableData[3].innerHTML).toBe("2");
    expect(tableData[4].innerHTML).toBe("3");
    expect(tableData[5].innerHTML).toBe("4");
    expect(tableData[6].innerHTML).toBe("5");
    expect(tableData[7].innerHTML).toBe("6");
    expect(tableData[8].innerHTML).toBe("7");
    expect(tableData[9].innerHTML).toBe("8");
    expect(tableData[10].innerHTML).toBe("9");
    expect(tableData[11].innerHTML).toBe("10");
    expect(tableData[12].innerHTML).toBe("11");
    expect(tableData[13].innerHTML).toBe("12");
    expect(tableData[14].innerHTML).toBe("13");
    expect(tableData[15].innerHTML).toBe("14");
    expect(tableData[16].innerHTML).toBe("15");
    expect(tableData[17].innerHTML).toBe("16");
    expect(tableData[18].innerHTML).toBe("17");
    expect(tableData[19].innerHTML).toBe("18");
    expect(tableData[20].innerHTML).toBe("19");
    expect(tableData[21].innerHTML).toBe("20");
    expect(tableData[22].innerHTML).toBe("21");
    expect(tableData[23].innerHTML).toBe("22");
    expect(tableData[24].innerHTML).toBe("23");
    expect(tableData[25].innerHTML).toBe("Monday");
    expect(tableData[26].innerHTML).toBe("24");

    expect(tableData[173].innerHTML).toBe("166");
    expect(tableData[174].innerHTML).toBe("167");
  });
});
