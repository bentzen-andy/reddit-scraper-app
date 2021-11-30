import { render, screen } from "@testing-library/react";
import PopularSearchList from "./PopularSearchList";

describe("Tests for the list content in the PopularSearchList", () => {
  test("Renders 'no data' message if null data is provided", () => {
    const data = null;
    render(<PopularSearchList data={data} />);
    const txt1 = screen.getByText(/Popular Searches/g);
    const txt2 = screen.getByText(/no data.../g);
    expect(txt1).toBeInTheDocument();
    expect(txt2).toBeInTheDocument();
  });

  test("Renders 'no data' message if empty array is provided", () => {
    const data = [];
    render(<PopularSearchList data={data} />);
    const txt1 = screen.getByText(/Popular Searches/g);
    const txt2 = screen.getByText(/no data.../g);
    expect(txt1).toBeInTheDocument();
    expect(txt2).toBeInTheDocument();
  });

  test("Renders 1 supbreddit when only 1 is provided", () => {
    const data = [{ subreddit: "askreddit", count: 1 }];
    render(<PopularSearchList data={data} />);
    const txt1 = screen.getByText(/Popular Searches/g);
    const txt2 = screen.getByText(/askreddit/g);
    expect(txt1).toBeInTheDocument();
    expect(txt2).toBeInTheDocument();
  });

  test("Renders 6 supbreddit when 6 are provided", () => {
    const data = [
      { subreddit: "askreddit", count: 4 },
      { subreddit: "pics", count: 6 },
      { subreddit: "videos", count: 1 },
      { subreddit: "politics", count: 3 },
      { subreddit: "askscience", count: 4 },
      { subreddit: "birdswitharms", count: 1 },
    ];
    render(<PopularSearchList data={data} />);
    const txt = screen.getByText(/Popular Searches/g);
    const txt1 = screen.getByText(/askreddit/g);
    const txt2 = screen.getByText(/pics/g);
    const txt3 = screen.getByText(/videos/g);
    const txt4 = screen.getByText(/politics/g);
    const txt5 = screen.getByText(/askscience/g);
    const txt6 = screen.getByText(/birdswitharms/g);

    expect(txt).toBeInTheDocument();
    expect(txt1).toBeInTheDocument();
    expect(txt2).toBeInTheDocument();
    expect(txt3).toBeInTheDocument();
    expect(txt4).toBeInTheDocument();
    expect(txt5).toBeInTheDocument();
    expect(txt6).toBeInTheDocument();
  });
});
