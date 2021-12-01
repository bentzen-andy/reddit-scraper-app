import { render } from "@testing-library/react";
import RedditDataList from "./RedditDataList";

describe("RedditDataList Component: Tests with normal input.", () => {
  it("renders <td> elements if valid data is given as input - test_id: RedditDataList_1", () => {
    // Arrange
    let input = [];
    input.push({ day: 0, hour: 0 });
    input.push({ day: 0, hour: 0 });

    input.push({ day: 4, hour: 4 });
    input.push({ day: 4, hour: 4 });
    input.push({ day: 4, hour: 4 });
    input.push({ day: 4, hour: 4 });

    input.push({ day: 6, hour: 23 });
    input.push({ day: 6, hour: 23 });
    input.push({ day: 6, hour: 23 });
    input.push({ day: 6, hour: 23 });
    input.push({ day: 6, hour: 23 });
    input.push({ day: 6, hour: 23 });

    const { container } = render(<RedditDataList data={input} />);

    // Act ...

    // Assert
    const tableData = container.querySelectorAll("td");
    expect(tableData.length).toBe(175); // 24 hrs * 7 days + 7 day_labels = 175

    // <day_index> * 24hrs + <hour_index> + nbr_of_day_labels_so_far
    expect(tableData[0 * 24 + 0 + 1].innerHTML).toBe("2");
    expect(tableData[4 * 24 + 4 + 5].innerHTML).toBe("4");
    expect(tableData[6 * 24 + 23 + 7].innerHTML).toBe("6");
  });
});
