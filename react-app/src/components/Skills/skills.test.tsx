import { render, screen } from "@testing-library/react";
import Skills from "./Skills";

describe("Skills", () => {
  const skills = ["HTML", "CSS", "JavaScript"];

  test("renders correctly", () => {
    render(<Skills skills={skills} />);
    const listEl = screen.getByRole("list");
    expect(listEl).toBeInTheDocument();
  });

  test("renders a list of skills", () => {
    render(<Skills skills={skills} />);
    const listItemEls = screen.getAllByRole("listitem");
    expect(listItemEls).toHaveLength(skills.length);
  });
});
