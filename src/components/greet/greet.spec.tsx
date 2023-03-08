import { render, screen } from "@testing-library/react";
import { Greet } from "./greet";

/**
 * Greet should render the text hello and if a name is passed into the component
 * it should render hello followed by the name
 */

describe("Greet", () => {
  it("renders correctly", () => {
    render(<Greet />);
    const textElement = screen.getByText("Hello");
    expect(textElement).toBeInTheDocument();
  });
});
describe("Nested", () => {
    it("render with a name", () => {
      render(<Greet name="shabaaz" />);
      const textElement = screen.getByText("Hello shabaaz");
      expect(textElement).toBeInTheDocument();
    });
  });