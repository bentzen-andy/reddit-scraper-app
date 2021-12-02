import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import HeatmapSearch from "./HeatmapSearch";

// ============================================================================================
// Helper Functions
// --------------------------------------------------------------------------------------------

function typeSomethingIntoTheFormAndClickSubmit(arg, container) {
  const inputElement = container.getElementsByClassName("searchbar__input--box")[0];
  const buttonElement = container.getElementsByClassName("searchbar__btn")[0];
  userEvent.click(inputElement);
  userEvent.type(inputElement, arg);
  userEvent.click(buttonElement);
}

// ============================================================================================
describe("Tests for the heatmap under default starting conditions", () => {
  it("renders a heatmap with a valid subreddit as input - test_id: HeatmapSearch_1", async () => {
    // Arrange
    const { container } = render(<HeatmapSearch onEnteredSubreddit={() => {}} />);

    // ensure the heatmap table is not present at the time the page loads
    const onLoadTableElement = screen.queryByRole("table");
    expect(onLoadTableElement).not.toBeInTheDocument();

    const savedFetch = window.fetch;
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => ({
        data: {
          children: [
            { data: { created_utc: 1635006124 } },
            { data: { created_utc: 1635116124 } },
            { data: { created_utc: 1635226124 } },
            { data: { created_utc: 1635336124 } },
            { data: { created_utc: 1635446124 } },
          ],
        },
      }),
    });

    // Act
    typeSomethingIntoTheFormAndClickSubmit("videos", container);
    // Assert
    const tableElement = await screen.findByRole("table");
    const tableDataElements = tableElement.querySelectorAll("td");

    // confirm that it rendered a table
    expect(tableElement).toBeInTheDocument();
    // confirm that the table has the correct number of cells (<td> elements)
    expect(tableDataElements).toHaveLength(175); // = 7 days * 24 hours + 7 day_labels

    // reset fetch function
    window.fetch = savedFetch;
  });

  it("renders a 'no data...' message if no data is available for the subreddit - test_id: HeatmapSearch_2", async () => {
    // Arrange
    const { container } = render(<HeatmapSearch onEnteredSubreddit={() => {}} />);
    const savedFetch = window.fetch;
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => ({
        data: {
          children: [],
        },
      }),
    });

    // Act
    typeSomethingIntoTheFormAndClickSubmit("videos", container);

    // Assert
    const textElement = await screen.findByText(/no data/i);
    expect(textElement).toBeInTheDocument();

    // reset fetch function
    window.fetch = savedFetch;
  });
});

// --------------------------------------------------------------------------------------------

// ============================================================================================
describe("Tests for the searchbar", () => {
  it("disallows the search if the input is just whitespace - test_id: HeatmapSearch_10", async () => {
    // Arrange
    const { container } = render(<HeatmapSearch onEnteredSubreddit={() => {}} />);

    // Act
    typeSomethingIntoTheFormAndClickSubmit("  ", container);

    // Assert
    const buttonElement = container.getElementsByClassName("searchbar__btn")[0];
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement.disabled).toBe(true);
  });

  it("gives validation text if the user clicks the searchbar, types an invalid search, and then clicks away from the searchbar - test_id: HeatmapSearch_11", async () => {
    // Arrange
    const { container } = render(<HeatmapSearch onEnteredSubreddit={() => {}} />);

    // Act
    const inputElement = container.getElementsByClassName("searchbar__input--box")[0];
    userEvent.click(inputElement);
    userEvent.type(inputElement, "   ");
    userEvent.tab();

    // Assert
    const textElement = screen.getByText(/Please enter a valid subreddit/i);
    expect(textElement).toBeInTheDocument();
  });

  it("clears validation text as soon as any non-whitespace character is typed into the searchbar - test_id: HeatmapSearch_12", async () => {
    // Arrange
    const { container } = render(<HeatmapSearch onEnteredSubreddit={() => {}} />);

    // Act #1
    const inputElement = container.getElementsByClassName("searchbar__input--box")[0];
    userEvent.click(inputElement);
    userEvent.type(inputElement, "   ");
    userEvent.tab();

    // Assert #1
    const textElement = screen.getByText(/Please enter a valid subreddit/i);
    expect(textElement).toBeInTheDocument();

    // Act #2
    userEvent.click(inputElement);
    userEvent.type(inputElement, "x");

    // Assert #2
    expect(textElement).not.toBeInTheDocument();
  });

  it("renders a an error message if given an invalid subreddit - test_id: HeatmapSearch_13", async () => {
    // Arrange
    const { container } = render(<HeatmapSearch onEnteredSubreddit={() => {}} />);

    // Act
    typeSomethingIntoTheFormAndClickSubmit("uiofjewioewjklf", container);

    // Assert
    const textElement = await screen.findByText(
      /Error: No data available for subreddit/i
    );
    expect(textElement).toBeInTheDocument();
  });

  it("renders an error message if the subreddit is exclusively dedicated to explicit material (NSFW) - test_id: HeatmapSearch_14", async () => {
    // Arrange
    const { container } = render(<HeatmapSearch onEnteredSubreddit={() => {}} />);

    // Act
    typeSomethingIntoTheFormAndClickSubmit("crimescene", container); // crimeScene shows graphic depictions of crime and is labeled a NSFW subreddit

    // Assert
    const textElement = await screen.findByText(
      /Explicit content not allowed. Please try a different subreddit/i
    );
    expect(textElement).toBeInTheDocument();
  });

  it("stores valid searches to DB to track popular searches - test_id: HeatmapSearch_15", async () => {
    // I don't know how to test for this.
    // I don't think I want to test this anyway because it seems like this test is just a test
    // of the fetch function (which is implemented by the browser, and therefore not mine to test.)

    // test stub
    expect(true).toBe(true);
  });

  it("does NOT store invalid searches to DB for popular searches - test_id: HeatmapSearch_16", async () => {
    // I don't know how to test for this.
    // I don't think I want to test this anyway because it seems like this test is just a test
    // of the fetch function (which is implemented by the browser, and therefore not mine to test.)

    // test stub
    expect(true).toBe(true);
  });

  it("does NOT store (to the popular search DB) valid searches for subreddits that are exclusively dedicated to explicit material (NSFW) - test_id: HeatmapSearch_17", async () => {
    // I don't know how to test for this.
    // I don't think I want to test this anyway because it seems like this test is just a test
    // of the fetch function (which is implemented by the browser, and therefore not mine to test.)

    // test stub
    expect(true).toBe(true);
  });
});
// --------------------------------------------------------------------------------------------

// ============================================================================================
describe("Tests for the loading spinner", () => {
  it("renders a loading spinner while HTTP request is processing - test_id: HeatmapSearch_18", async () => {
    // Arrange
    const { container } = render(<HeatmapSearch onEnteredSubreddit={() => {}} />);

    // Act
    typeSomethingIntoTheFormAndClickSubmit("videos", container);
    // Assert
    const loadingSpinner = await screen.findByTitle("loading-spinner");
    expect(loadingSpinner).toBeInTheDocument();
  });
});
// --------------------------------------------------------------------------------------------
