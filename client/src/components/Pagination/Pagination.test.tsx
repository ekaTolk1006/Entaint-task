import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Pagination, { I_Pagination } from ".";

const mockedOnClickFunc = vi.fn();

const PROPS: I_Pagination = {
  pages: 3,
  activePage: 1,
  onClick: mockedOnClickFunc,
};
describe("components/Pagination", () => {
  const user = userEvent.setup();
  it("should render component with the passed props", () => {
    render(<Pagination {...PROPS} />);
    expect(screen.getAllByRole("button")).toHaveLength(3);
  });

  it("should apply class 'pagination__btn--active' on the chosen page", () => {
    render(<Pagination {...PROPS} />);
    expect(screen.getAllByRole("button")[0]).toHaveClass(
      "pagination__btn--active"
    );
  });
  it("should call function 'onClick' when user clicked on the pagination btn", async () => {
    render(<Pagination {...PROPS} />);
    const buttons = screen.getAllByRole("button");
    for (const button of buttons) {
      await user.click(button);
      expect(mockedOnClickFunc).toHaveBeenCalled();
    }
  });
});
