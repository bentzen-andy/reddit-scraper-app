import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

// ============================================================================================
describe("Tests for the heatmap under default starting conditions", () => {
  it("renders a heatmap with a valid subreddit as input - test_id: App_1", () => {
    // Arrange

    // Act

    // Assert
    expect(false).toBe(true);
  });

  it("renders a 'no data...' message if no data is available for the subreddit - test_id: App_2", () => {
    // Arrange

    // Act

    // Assert
    expect(false).toBe(true);
  });
});
// --------------------------------------------------------------------------------------------

// ============================================================================================
describe("Tests for the heatmap under non-default starting conditions", () => {
  it("renders a heatmap with a valid subreddit as input after a valid heatmap is already loaded - test_id: App_3", () => {
    // Arrange

    // Act

    // Assert
    expect(false).toBe(true);
  });

  it("renders a heatmap with a valid subreddit as input after an invalid search result is already loaded - test_id: App_4", () => {
    // Arrange

    // Act

    // Assert
    expect(false).toBe(true);
  });

  it("renders a heatmap with a valid subreddit as input after an valid search that yields no data is already loaded - test_id: App_5", () => {
    // Arrange

    // Act

    // Assert
    expect(false).toBe(true);
  });
});
// --------------------------------------------------------------------------------------------

// ============================================================================================
describe("Tests for the heatmap to ensure old results get cleared away properly when a new search is entered", () => {
  it("clears away the old heatmap when a new search is issued - test_id: App_6", () => {
    // Arrange

    // Act

    // Assert
    expect(false).toBe(true);
  });

  it("clears away the 'invalid search' message when a new search is issued - test_id: App_7", () => {
    // Arrange

    // Act

    // Assert
    expect(false).toBe(true);
  });

  it("clears away the 'no data...' message when a new search is issued - test_id: App_8", () => {
    // Arrange

    // Act

    // Assert
    expect(false).toBe(true);
  });

  it("clears away the 'no explicit searches allowed' message when a new search is issued - test_id: App_9", () => {
    // Arrange

    // Act

    // Assert
    expect(false).toBe(true);
  });
});
// --------------------------------------------------------------------------------------------

// ============================================================================================
describe("Tests for the searchbar", () => {
  it("disallows the search if the input is just whitespace - test_id: App_10", () => {
    // Arrange

    // Act

    // Assert
    expect(false).toBe(true);
  });

  it("gives validation text if the user clicks the searchbar, types an invalid search, and then clicks away from the searchbar - test_id: App_11", () => {
    // Arrange

    // Act

    // Assert
    expect(false).toBe(true);
  });

  it("clears validation text if as soon as any non-whitespace character is typed into the searchbar - test_id: App_12", () => {
    // Arrange

    // Act

    // Assert
    expect(false).toBe(true);
  });

  it("renders a an error message if given an invalid subreddit - test_id: App_13", () => {
    // Arrange

    // Act

    // Assert
    expect(false).toBe(true);
  });

  it("renders an error message if the subreddit is exclusively dedicated to explicit material (NSFW) - test_id: App_14", () => {
    // Arrange

    // Act

    // Assert
    expect(false).toBe(true);
  });

  it("stores valid searches to DB to track popular searches - test_id: App_15", () => {
    // Arrange

    // Act

    // Assert
    expect(false).toBe(true);
  });

  it("does NOT store invalid searches to DB for popular searches - test_id: App_16", () => {
    // Arrange

    // Act

    // Assert
    expect(false).toBe(true);
  });

  it("does NOT store (to the popular search DB) valid searches for subreddits that are exclusively dedicated to explicit material (NSFW) - test_id: App_17", () => {
    // Arrange

    // Act

    // Assert
    expect(false).toBe(true);
  });
});
// --------------------------------------------------------------------------------------------

// ============================================================================================
describe("Tests for the popular search list", () => {
  it("renders a list the title heading: 'Popular Searches' - test_id: App_18", () => {
    // Arrange

    // Act

    // Assert
    expect(false).toBe(true);
  });

  it("renders a list of 5 popular searches from the past - test_id: App_19", () => {
    // Arrange

    // Act

    // Assert
    expect(false).toBe(true);
  });

  it("renders a list of popular searches in descending order by popularity - test_id: App_20", () => {
    // Arrange

    // Act

    // Assert
    expect(false).toBe(true);
  });

  it("renders a messages that says 'no data...' if no popular search data is available - test_id: App_21", () => {
    // Arrange

    // Act

    // Assert
    expect(false).toBe(true);
  });
});
