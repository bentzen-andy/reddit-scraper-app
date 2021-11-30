import { render, screen } from "@testing-library/react";
import GridSquare from "./GridSquare";

describe("number content of the grid squares", () => {
  test("Renders a grid square with '-' if number of posts is 0", () => {
    const numPosts = 0;
    const maxDailyPosts = 1;
    render(
      <table>
        <tbody>
          <tr>
            <GridSquare numPosts={numPosts} maxDailyPosts={maxDailyPosts} />
          </tr>
        </tbody>
      </table>
    );
    const txt1 = screen.getByText(/-/);
    expect(txt1).toBeInTheDocument();
  });

  test("Renders a grid square with 1 if number of posts is 1", () => {
    const numPosts = 1;
    const maxDailyPosts = 6;
    render(
      <table>
        <tbody>
          <tr>
            <GridSquare numPosts={numPosts} maxDailyPosts={maxDailyPosts} />
          </tr>
        </tbody>
      </table>
    );
    const txt1 = screen.getByText(/1/);
    expect(txt1).toBeInTheDocument();
  });

  test("Renders a grid square with 2 if number of posts is 2", () => {
    const numPosts = 2;
    const maxDailyPosts = 6;
    render(
      <table>
        <tbody>
          <tr>
            <GridSquare numPosts={numPosts} maxDailyPosts={maxDailyPosts} />
          </tr>
        </tbody>
      </table>
    );
    const txt1 = screen.getByText(/2/);
    expect(txt1).toBeInTheDocument();
  });

  test("Renders a grid square with 99 if number of posts is 99", () => {
    const numPosts = 99;
    const maxDailyPosts = 99;
    render(
      <table>
        <tbody>
          <tr>
            <GridSquare numPosts={numPosts} maxDailyPosts={maxDailyPosts} />
          </tr>
        </tbody>
      </table>
    );
    const txt1 = screen.getByText(/99/);
    expect(txt1).toBeInTheDocument();
  });
});

describe("CSS class of the grid square (css class determines the color)", () => {
  test("Renders the lightest color with 0 posts", () => {
    const numPosts = 0;
    const maxDailyPosts = 12;
    render(
      <table>
        <tbody>
          <tr>
            <GridSquare numPosts={numPosts} maxDailyPosts={maxDailyPosts} />
          </tr>
        </tbody>
      </table>
    );
    const node = screen.getByText(/-/);
    expect(node.classList.contains("color-0")).toBe(true);
    expect(node.classList.contains("color-1")).toBe(false);
    expect(node.classList.contains("color-2")).toBe(false);
    expect(node.classList.contains("color-3")).toBe(false);
    expect(node.classList.contains("color-4")).toBe(false);
    expect(node.classList.contains("color-5")).toBe(false);
    expect(node.classList.contains("color-6")).toBe(false);
  });

  test("Renders the 'min-heat' color with 1 post", () => {
    const numPosts = 1;
    const maxDailyPosts = 12;
    render(
      <table>
        <tbody>
          <tr>
            <GridSquare numPosts={numPosts} maxDailyPosts={maxDailyPosts} />
          </tr>
        </tbody>
      </table>
    );
    const node = screen.getByText(/1/);
    expect(node.classList.contains("color-0")).toBe(false);
    expect(node.classList.contains("color-1")).toBe(true);
    expect(node.classList.contains("color-2")).toBe(false);
    expect(node.classList.contains("color-3")).toBe(false);
    expect(node.classList.contains("color-4")).toBe(false);
    expect(node.classList.contains("color-5")).toBe(false);
    expect(node.classList.contains("color-6")).toBe(false);
  });

  test("Renders the 'color-2' color with 2 posts", () => {
    const numPosts = 2;
    const maxDailyPosts = 6;
    render(
      <table>
        <tbody>
          <tr>
            <GridSquare numPosts={numPosts} maxDailyPosts={maxDailyPosts} />
          </tr>
        </tbody>
      </table>
    );
    const node = screen.getByText(/2/);
    expect(node.classList.contains("color-0")).toBe(false);
    expect(node.classList.contains("color-1")).toBe(false);
    expect(node.classList.contains("color-2")).toBe(true);
    expect(node.classList.contains("color-3")).toBe(false);
    expect(node.classList.contains("color-4")).toBe(false);
    expect(node.classList.contains("color-5")).toBe(false);
    expect(node.classList.contains("color-6")).toBe(false);
  });

  test("Renders the 'color-4' color with 4 posts", () => {
    const numPosts = 4;
    const maxDailyPosts = 6;
    render(
      <table>
        <tbody>
          <tr>
            <GridSquare numPosts={numPosts} maxDailyPosts={maxDailyPosts} />
          </tr>
        </tbody>
      </table>
    );
    const node = screen.getByText(/4/);
    expect(node.classList.contains("color-0")).toBe(false);
    expect(node.classList.contains("color-1")).toBe(false);
    expect(node.classList.contains("color-2")).toBe(false);
    expect(node.classList.contains("color-3")).toBe(false);
    expect(node.classList.contains("color-4")).toBe(true);
    expect(node.classList.contains("color-5")).toBe(false);
    expect(node.classList.contains("color-6")).toBe(false);
  });

  test("Renders the 'max-heat' color", () => {
    const numPosts = 12;
    const maxDailyPosts = 12;
    render(
      <table>
        <tbody>
          <tr>
            <GridSquare numPosts={numPosts} maxDailyPosts={maxDailyPosts} />
          </tr>
        </tbody>
      </table>
    );
    const node = screen.getByText(/12/);
    expect(node.classList.contains("color-0")).toBe(false);
    expect(node.classList.contains("color-1")).toBe(false);
    expect(node.classList.contains("color-2")).toBe(false);
    expect(node.classList.contains("color-3")).toBe(false);
    expect(node.classList.contains("color-4")).toBe(false);
    expect(node.classList.contains("color-5")).toBe(false);
    expect(node.classList.contains("color-6")).toBe(true);
  });
});

describe("Rounding to correct color score'", () => {
  test("Renders a grid square with class name color-1. ensure it it has at least one post that it rounds up to 1", () => {
    const numPosts = 1;
    const maxDailyPosts = 99;
    render(
      <table>
        <tbody>
          <tr>
            <GridSquare numPosts={numPosts} maxDailyPosts={maxDailyPosts} />
          </tr>
        </tbody>
      </table>
    );
    const node = screen.getByText(/1/);
    expect(node.classList.contains("color-0")).toBe(false);
    expect(node.classList.contains("color-1")).toBe(true);
    expect(node.classList.contains("color-2")).toBe(false);
    expect(node.classList.contains("color-3")).toBe(false);
    expect(node.classList.contains("color-4")).toBe(false);
    expect(node.classList.contains("color-5")).toBe(false);
    expect(node.classList.contains("color-6")).toBe(false);
  });

  test("Renders a grid square with class name color-2 to make sure it can round up properly", () => {
    const numPosts = 3;
    const maxDailyPosts = 11;
    render(
      <table>
        <tbody>
          <tr>
            <GridSquare numPosts={numPosts} maxDailyPosts={maxDailyPosts} />
          </tr>
        </tbody>
      </table>
    );
    const node = screen.getByText(/3/);
    expect(node.classList.contains("color-0")).toBe(false);
    expect(node.classList.contains("color-1")).toBe(false);
    expect(node.classList.contains("color-2")).toBe(true);
    expect(node.classList.contains("color-3")).toBe(false);
    expect(node.classList.contains("color-4")).toBe(false);
    expect(node.classList.contains("color-5")).toBe(false);
    expect(node.classList.contains("color-6")).toBe(false);
  });

  test("Renders a grid square with class name color-2 to make sure it can round down properly", () => {
    const numPosts = 4;
    const maxDailyPosts = 11;
    render(
      <table>
        <tbody>
          <tr>
            <GridSquare numPosts={numPosts} maxDailyPosts={maxDailyPosts} />
          </tr>
        </tbody>
      </table>
    );
    const node = screen.getByText(/4/);
    expect(node.classList.contains("color-0")).toBe(false);
    expect(node.classList.contains("color-1")).toBe(false);
    expect(node.classList.contains("color-2")).toBe(true);
    expect(node.classList.contains("color-3")).toBe(false);
    expect(node.classList.contains("color-4")).toBe(false);
    expect(node.classList.contains("color-5")).toBe(false);
    expect(node.classList.contains("color-6")).toBe(false);
  });
});
