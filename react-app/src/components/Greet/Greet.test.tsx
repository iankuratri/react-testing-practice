import { render, screen } from "@testing-library/react";
import Greet from "./greet";

describe("Greet", () => {
  test("renders correctly", () => {
    render(<Greet />);
    const textElement = screen.getByText(/hello/i);
    expect(textElement).toBeInTheDocument();
  });

  test.skip("renders a name", () => {
    render(<Greet name="Ankur" />);
    const textElement = screen.getByText("Hello Ankur");
    expect(textElement).toBeInTheDocument();
  });
});
