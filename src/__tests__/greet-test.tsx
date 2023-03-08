import { render, screen } from "@testing-library/react";
import { Greet } from "../components/greet/greet";

/**
 * Greet should render the text hello and if a name is passed into the component
 * it should render hello followed by the name
 */

describe("Greet", () => {
  test("renders correctly", () => {
    render(<Greet />);
    const textElement = screen.getByText("Hello");
    expect(textElement).toBeInTheDocument();
  });
});
describe("Nested", () => {
    test("render with a name", () => {
      render(<Greet name="shabaaz" />);
      const textElement = screen.getByText("Hello shabaaz");
      expect(textElement).toBeInTheDocument();
    });
  });