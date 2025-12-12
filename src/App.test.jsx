import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App Component", () => {
  test("renders heading and paragraph correctly", () => {
    render(<App />);

    // Check heading
    expect(screen.getByText("Vite + React")).toBeInTheDocument();

    // Check paragraph
    expect(
      screen.getByText("Click on the Vite and React logos to learn more")
    ).toBeInTheDocument();
  });
});
