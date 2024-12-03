import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import Card, { I_Card } from ".";
import { BrowserRouter } from "react-router-dom";

const PROPS: I_Card = {
  id: 1,
  title: "title",
  image: "/img",
};
describe("components/Card", () => {
  it("should render card title", () => {
    render(<Card {...PROPS} />, { wrapper: BrowserRouter });
    expect(screen.getByText(PROPS.title)).toBeInTheDocument();
  });
  it("should render card with description", () => {
    render(<Card {...{ ...PROPS, description: "description" }} />, {
      wrapper: BrowserRouter,
    });
    expect(screen.queryByText(/description/i)).toBeInTheDocument();
  });
});
