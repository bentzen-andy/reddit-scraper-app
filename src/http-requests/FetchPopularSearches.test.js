import ReactDOM from "react-dom";
import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import FetchPopularSearches from "./FetchPopularSearches";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  ReactDOM.unmountComponentAtNode(container);
  container.remove();
  container = null;
});

// ============================================================================================
describe("Tests for the popular search list", () => {
  it("renders a title heading: 'Popular Searches' - test_id: FetchPopularSearches_1", async () => {
    // Arrange
    let mockResponse = {
      "-MptFQItqiR92t93CxST": { subreddit: "askreddit", count: 1 },
      "-MptFQItqiR92t9S4xST": { subreddit: "askreddit", count: 1 },
      "-MptFQItqiR3yt9SCxST": { subreddit: "pics", count: 1 },
      "-MptFQItqiRy33t9CxST": { subreddit: "pics", count: 1 },
      "-MptFQItqiRjef84CxST": { subreddit: "pics", count: 1 },
      "-Mp8gQItqiRjef84CxST": { subreddit: "pics", count: 1 },
      "-MptFQItqiR92t92jxST": { subreddit: "askreddit", count: 1 },
      "-MptFe6tqiR92t9932jT": { subreddit: "maybemaybemaybe", count: 1 },
      "-MUHUe6tqiR92t9932jT": { subreddit: "maybemaybemaybe", count: 1 },
      "-Mp8fjhtqiR92t92jxST": { subreddit: "cfb", count: 1 },
      "-Mp8fjhtqiR92t9j3xST": { subreddit: "cfb", count: 1 },
      "-MptFe6t03rjJGTt92ST": { subreddit: "askscience", count: 1 },
      "-M88Fe6t03rjJGTt92ST": { subreddit: "askscience", count: 1 },
      "-MptFe6tqiR98JGmh3ST": { subreddit: "videos", count: 1 },
    };

    jest.spyOn(global, "fetch").mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockResponse),
      })
    );

    // Act
    // Use the asynchronous version of act to apply resolved promises
    await act(async () => {
      ReactDOM.render(<FetchPopularSearches subreddit={""} />, container);
    });

    // Assert
    const textElement = container.querySelector(".popular-search-list__heading");
    expect(textElement.textContent).toBe("Popular Searches");

    // Tear-down
    global.fetch.mockRestore();
  });

  it("renders a list of 5 popular searches from the past - test_id: FetchPopularSearches_2", async () => {
    // Setup
    let mockResponse = {
      "-MptFQItqiR92t93CxST": { subreddit: "askreddit", count: 1 },
      "-MptFQItqiR92t9S4xST": { subreddit: "askreddit", count: 1 },
      "-MptFQItqiR3yt9SCxST": { subreddit: "pics", count: 1 },
      "-MptFQItqiRy33t9CxST": { subreddit: "pics", count: 1 },
      "-MptFQItqiRjef84CxST": { subreddit: "pics", count: 1 },
      "-Mp8gQItqiRjef84CxST": { subreddit: "pics", count: 1 },
      "-MptFQItqiR92t92jxST": { subreddit: "askreddit", count: 1 },
      "-MptFe6tqiR92t9932jT": { subreddit: "maybemaybemaybe", count: 1 },
      "-MUHUe6tqiR92t9932jT": { subreddit: "maybemaybemaybe", count: 1 },
      "-Mp8fjhtqiR92t92jxST": { subreddit: "cfb", count: 1 },
      "-Mp8fjhtqiR92t9j3xST": { subreddit: "cfb", count: 1 },
      "-MptFe6t03rjJGTt92ST": { subreddit: "askscience", count: 1 },
      "-M88Fe6t03rjJGTt92ST": { subreddit: "askscience", count: 1 },
      "-MptFe6tqiR98JGmh3ST": { subreddit: "videos", count: 1 },
    };

    jest.spyOn(global, "fetch").mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockResponse),
      })
    );

    // Act
    // Use the asynchronous version of act to apply resolved promises
    await act(async () => {
      ReactDOM.render(<FetchPopularSearches subreddit={""} />, container);
    });

    // Assert
    const popularSearchListElements = container.querySelectorAll(
      ".popular-search-list__subreddit"
    );
    expect(popularSearchListElements).toHaveLength(5);

    // Tear-down
    global.fetch.mockRestore();
  });

  it("renders a list of 4 popular searches from the past - test_id: FetchPopularSearches_2a", async () => {
    // Setup
    let mockResponse = {
      "-MptFQItqiR92t93CxST": { subreddit: "askreddit", count: 1 },
      "-MptFQItqiR92t9S4xST": { subreddit: "askreddit", count: 1 },
      "-MptFQItqiR3yt9SCxST": { subreddit: "pics", count: 1 },
      "-MptFQItqiRy33t9CxST": { subreddit: "pics", count: 1 },
      "-MptFQItqiRjef84CxST": { subreddit: "pics", count: 1 },
      "-Mp8gQItqiRjef84CxST": { subreddit: "pics", count: 1 },
      "-MptFQItqiR92t92jxST": { subreddit: "askreddit", count: 1 },
      "-MptFe6tqiR92t9932jT": { subreddit: "maybemaybemaybe", count: 1 },
      "-MUHUe6tqiR92t9932jT": { subreddit: "maybemaybemaybe", count: 1 },
      "-Mp8fjhtqiR92t92jxST": { subreddit: "cfb", count: 1 },
      "-Mp8fjhtqiR92t9j3xST": { subreddit: "cfb", count: 1 },
    };

    jest.spyOn(global, "fetch").mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockResponse),
      })
    );

    // Act
    // Use the asynchronous version of act to apply resolved promises
    await act(async () => {
      ReactDOM.render(<FetchPopularSearches subreddit={""} />, container);
    });

    // Assert
    const popularSearchListElements = container.querySelectorAll(
      ".popular-search-list__subreddit"
    );
    expect(popularSearchListElements).toHaveLength(4);

    // Tear-down
    global.fetch.mockRestore();
  });

  it("renders a list of 3 popular searches from the past - test_id: FetchPopularSearches_2b", async () => {
    // Setup
    let mockResponse = {
      "-MptFQItqiR92t93CxST": { subreddit: "askreddit", count: 1 },
      "-MptFQItqiR92t9S4xST": { subreddit: "askreddit", count: 1 },
      "-MptFQItqiR3yt9SCxST": { subreddit: "pics", count: 1 },
      "-MptFQItqiRy33t9CxST": { subreddit: "pics", count: 1 },
      "-MptFQItqiRjef84CxST": { subreddit: "pics", count: 1 },
      "-Mp8gQItqiRjef84CxST": { subreddit: "pics", count: 1 },
      "-MptFQItqiR92t92jxST": { subreddit: "askreddit", count: 1 },
      "-MptFe6tqiR92t9932jT": { subreddit: "maybemaybemaybe", count: 1 },
      "-MUHUe6tqiR92t9932jT": { subreddit: "maybemaybemaybe", count: 1 },
    };

    jest.spyOn(global, "fetch").mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockResponse),
      })
    );

    // Act
    // Use the asynchronous version of act to apply resolved promises
    await act(async () => {
      ReactDOM.render(<FetchPopularSearches subreddit={""} />, container);
    });

    // Assert
    const popularSearchListElements = container.querySelectorAll(
      ".popular-search-list__subreddit"
    );
    expect(popularSearchListElements).toHaveLength(3);

    // Tear-down
    global.fetch.mockRestore();
  });

  it("renders a list of 0 popular searches from the past - test_id: FetchPopularSearches_2c", async () => {
    // Setup
    let mockResponse = {};

    jest.spyOn(global, "fetch").mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockResponse),
      })
    );

    // Act
    // Use the asynchronous version of act to apply resolved promises
    await act(async () => {
      ReactDOM.render(<FetchPopularSearches subreddit={""} />, container);
    });

    // Assert
    const popularSearchListElements = container.querySelectorAll(
      ".popular-search-list__subreddit"
    );
    expect(popularSearchListElements).toHaveLength(0);

    // Tear-down
    global.fetch.mockRestore();
  });

  it("renders a messages that says 'no data...' if no popular search data is available - test_id: FetchPopularSearches_3", async () => {
    // Setup
    let mockResponse = {};

    jest.spyOn(global, "fetch").mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockResponse),
      })
    );

    // Act
    // Use the asynchronous version of act to apply resolved promises
    await act(async () => {
      ReactDOM.render(<FetchPopularSearches subreddit={""} />, container);
    });

    // Assert
    const el = container.querySelector(".popular-search-list__no-data");
    expect(el.textContent).toBe("no data...");

    // Tear-down
    global.fetch.mockRestore();
  });

  it("renders a list of popular searches in descending order by popularity - test_id: FetchPopularSearches_4", async () => {
    // Setup
    let mockResponse = {
      "-MptFQItqiR92t93CxST": { subreddit: "askreddit", count: 1 }, // ct = 4
      "-MptFQItqiR92t9S4xST": { subreddit: "askreddit", count: 1 },
      "-MptFQItqiR3yt9SCxST": { subreddit: "pics", count: 1 }, // ct = 5
      "-MptFQItqiRy33t9CxST": { subreddit: "pics", count: 1 },
      "-MptFQItqi3jef84CxST": { subreddit: "pics", count: 1 },
      "-MptFQItqiRjef84CxST": { subreddit: "pics", count: 1 },
      "-Mp8gQItqiRjef84CxST": { subreddit: "pics", count: 1 },
      "-MptFQItqiR92t92jxST": { subreddit: "askreddit", count: 1 },
      "-MptFQetqiR92t92jxST": { subreddit: "askreddit", count: 1 },
      "-MptFe6tqiR92t9932jT": { subreddit: "maybemaybemaybe", count: 1 }, // ct = 2
      "-MUHUe6tqiR92t9932jT": { subreddit: "maybemaybemaybe", count: 1 },
      "-Mp8fjhtqiR92t92jxST": { subreddit: "cfb", count: 1 }, // ct = 3
      "-Mp8fjhtqi692t92jxST": { subreddit: "cfb", count: 1 },
      "-Mp8fjhtqiR92t9j3xST": { subreddit: "cfb", count: 1 },
      "-MptFe6t03rjJGTt92ST": { subreddit: "askscience", count: 1 }, // ct = 1
    };

    jest.spyOn(global, "fetch").mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockResponse),
      })
    );

    // Act
    // Use the asynchronous version of act to apply resolved promises
    await act(async () => {
      ReactDOM.render(<FetchPopularSearches subreddit={""} />, container);
    });

    // Assert
    const popularSearchListElements = container.querySelectorAll(
      ".popular-search-list__subreddit"
    );
    expect(popularSearchListElements[0].textContent).toBe("pics");
    expect(popularSearchListElements[1].textContent).toBe("askreddit");
    expect(popularSearchListElements[2].textContent).toBe("cfb");
    expect(popularSearchListElements[3].textContent).toBe("maybemaybemaybe");
    expect(popularSearchListElements[4].textContent).toBe("askscience");

    // Tear-down
    global.fetch.mockRestore();
  });
});
// --------------------------------------------------------------------------------------------

// ============================================================================================
describe("Tests for the loading spinner", () => {
  it("renders a loading spinner while HTTP request is processing - test_id: FetchPopularSearches_5", async () => {
    // Arrange
    render(<FetchPopularSearches onEnteredSubreddit={() => {}} />);

    // Act ...

    // Assert
    const loadingSpinner = await screen.findByTitle("loading-spinner");
    expect(loadingSpinner).toBeInTheDocument();
  });
});
// --------------------------------------------------------------------------------------------
