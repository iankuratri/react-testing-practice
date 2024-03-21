import { render, screen } from "@testing-library/react";
import Greet from "./Greet";

test("renders hello world correctly", () => {
  render(<Greet />);
  const textElement = screen.getByText(/hello world/i);
  expect(textElement).toBeInTheDocument();
});
