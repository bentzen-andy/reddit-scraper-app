import { render, screen } from "@testing-library/react";
import GridSquare from "./GridSquare";

describe("GridSquare Component: testing number of posts displayed", () => {
  it("renders a grid square with '-' if number of posts is 0 - test_id: GridSquare_1", () => {
    // Arrange
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

    // Act ...

    // Assert
    const txt1 = screen.getByText(/-/);
    expect(txt1).toBeInTheDocument();
  });

  it("renders a grid square with 1 if number of posts is 1 - test_id: GridSquare_2", () => {
    // Arrange
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

    // Act ...

    // Assert
    const txt1 = screen.getByText(/1/);
    expect(txt1).toBeInTheDocument();
  });

  it("renders a grid square with 2 if number of posts is 2 - test_id: GridSquare_3", () => {
    // Arrange
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

    // Act ...

    // Assert
    const txt1 = screen.getByText(/2/);
    expect(txt1).toBeInTheDocument();
  });

  it("renders a grid square with 99 if number of posts is 99 - test_id: GridSquare_4", () => {
    // Arrange
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

    // Act ...

    // Assert
    const txt1 = screen.getByText(/99/);
    expect(txt1).toBeInTheDocument();
  });
});

describe("GridSquare Component: testing the class assigned to the <td> element", () => {
  it("renders a <td> element with CSS class 'color-0' - test_id: GridSquare_5", () => {
    // Arrange
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

    // Act ...

    // Assert
    const node = screen.getByText(/-/);
    expect(node.classList.contains("color-0")).toBe(true);
    expect(node.classList.contains("color-1")).toBe(false);
    expect(node.classList.contains("color-2")).toBe(false);
    expect(node.classList.contains("color-3")).toBe(false);
    expect(node.classList.contains("color-4")).toBe(false);
    expect(node.classList.contains("color-5")).toBe(false);
    expect(node.classList.contains("color-6")).toBe(false);
  });

  it("renders a <td> element with CSS class 'color-1' - test_id: GridSquare_6", () => {
    // Arrange
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

    // Act ...

    // Assert
    const node = screen.getByText(/1/);
    expect(node.classList.contains("color-0")).toBe(false);
    expect(node.classList.contains("color-1")).toBe(true);
    expect(node.classList.contains("color-2")).toBe(false);
    expect(node.classList.contains("color-3")).toBe(false);
    expect(node.classList.contains("color-4")).toBe(false);
    expect(node.classList.contains("color-5")).toBe(false);
    expect(node.classList.contains("color-6")).toBe(false);
  });

  it("renders a <td> element with CSS class 'color-2' - test_id: GridSquare_7", () => {
    // Arrange
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

    // Act ...

    // Assert
    const node = screen.getByText(/2/);
    expect(node.classList.contains("color-0")).toBe(false);
    expect(node.classList.contains("color-1")).toBe(false);
    expect(node.classList.contains("color-2")).toBe(true);
    expect(node.classList.contains("color-3")).toBe(false);
    expect(node.classList.contains("color-4")).toBe(false);
    expect(node.classList.contains("color-5")).toBe(false);
    expect(node.classList.contains("color-6")).toBe(false);
  });

  it("renders a <td> element with CSS class 'color-4' - test_id: GridSquare_8", () => {
    // Arrange
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

    // Act ...

    // Assert
    const node = screen.getByText(/4/);
    expect(node.classList.contains("color-0")).toBe(false);
    expect(node.classList.contains("color-1")).toBe(false);
    expect(node.classList.contains("color-2")).toBe(false);
    expect(node.classList.contains("color-3")).toBe(false);
    expect(node.classList.contains("color-4")).toBe(true);
    expect(node.classList.contains("color-5")).toBe(false);
    expect(node.classList.contains("color-6")).toBe(false);
  });

  it("renders a <td> element with CSS class 'color-6' - test_id: GridSquare_9", () => {
    // Arrange
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

    // Act ...

    // Assert
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

describe("GridSquare Component: Rounding to correct color score' - test_id: GridSquare_10", () => {
  it("renders a <td> with class name color-1. Ensure it it has at least one post that the number used for the color class rounds up to 1", () => {
    // Arrange
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

    // Act ...

    // Assert
    const node = screen.getByText(/1/);
    expect(node.classList.contains("color-0")).toBe(false);
    expect(node.classList.contains("color-1")).toBe(true);
    expect(node.classList.contains("color-2")).toBe(false);
    expect(node.classList.contains("color-3")).toBe(false);
    expect(node.classList.contains("color-4")).toBe(false);
    expect(node.classList.contains("color-5")).toBe(false);
    expect(node.classList.contains("color-6")).toBe(false);
  });

  it("renders a grid square with class name color-2 to make sure it can round up properly - test_id: GridSquare_11", () => {
    // Arrange
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

    // Act ...

    // Assert
    const node = screen.getByText(/3/);
    expect(node.classList.contains("color-0")).toBe(false);
    expect(node.classList.contains("color-1")).toBe(false);
    expect(node.classList.contains("color-2")).toBe(true);
    expect(node.classList.contains("color-3")).toBe(false);
    expect(node.classList.contains("color-4")).toBe(false);
    expect(node.classList.contains("color-5")).toBe(false);
    expect(node.classList.contains("color-6")).toBe(false);
  });

  it("renders a grid square with class name color-2 to make sure it can round down properly - test_id: GridSquare_12", () => {
    // Arrange
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

    // Act ...

    // Assert
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
