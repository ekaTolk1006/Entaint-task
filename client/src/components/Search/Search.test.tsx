import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import Search, { I_Search } from ".";
import userEvent from "@testing-library/user-event";

const onChangeMock = vi.fn();
const PROPS: I_Search = {
  onChange: onChangeMock,
  value: "",
  placeholder: "Search",
};

describe("components/Search", () => {
  const user = userEvent.setup();
  it("should render search component", () => {
    render(<Search {...PROPS} />);
    expect(screen.getByTestId("search")).toBeInTheDocument();
  });

  it("should apply placeholder text, passed in props", () => {
    render(<Search {...PROPS} />);
    expect(screen.getByRole("textbox")).toHaveAttribute(
      "placeholder",
      PROPS.placeholder
    );
  });

  it("should call onChange when user type the text", async () => {
    render(<Search {...PROPS} />);
    const text = "movie";
    await user.type(screen.getByRole("textbox"), text);
    expect(onChangeMock).toHaveBeenCalledTimes(text.length);
  });
});
