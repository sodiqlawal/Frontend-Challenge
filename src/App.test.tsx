import React from "react";
import { render, fireEvent, waitFor, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";

describe("Kudi Challenge", () => {
  afterEach(cleanup);

  test("check if local storage is initially null", async () => {
    const { getByPlaceholderText } = render(<App />);

    const selectShape = getByPlaceholderText("Select shapes");
    const data = JSON.parse(localStorage.getItem("currentData")!);
    const shapes = data ? data.shapes : null;

    fireEvent.change(selectShape, {
      target: { value: null },
    });
    await waitFor(() => {
      expect(shapes).toEqual(null);
    });
  });

  test("should respond to changes", async () => {
    const { getAllByTestId, debug } = render(<App />);

    let options = getAllByTestId("select-options") as HTMLSelectElement[];
    fireEvent.change(options[0], {
      target: { value: "Rectangle" },
    });
    expect(options[0].value).toBe("Rectangle");
    fireEvent.change(options[1], {
      target: { value: "Square" },
    });

    expect(options[1].value).toBe("Square");
    fireEvent.change(options[2], {
      target: { value: "Circle" },
    });

    expect(options[2].value).toBe("Circle");
    fireEvent.change(options[3], {
      target: { value: "Ellipse" },
    });
    expect(options[3].value).toBe("Ellipse");
    fireEvent.change(options[4], {
      target: { value: "Polygon" },
    });

    expect(options[4].value).toBe("Polygon");
    fireEvent.change(options[4], {
      target: { value: "Polyline" },
    });

    expect(options[5].value).toBe("Polyline");
  });
});
