import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import Button, { ButtonProps } from "./Button";

describe("Button", () => {
  const mockProps: ButtonProps = {
    label: "Test Button",
    form: "brick",
    size: "m",
    view: "primary",
    fullSize: false,
    clip: false,
    loading: false,
    disabled: false,
  };

  test("renders with label text", () => {
    const { getByText } = render(<Button {...mockProps} />);
    const buttonText = getByText("Test Button");
    expect(buttonText).toBeInTheDocument();
  });

  test("click event is triggered", () => {
    const handleClick = jest.fn();
    const { getByRole } = render(<Button onClick={handleClick} label="Click" />);
    const buttonElement = getByRole("button");
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test("applies form class", () => {
    const { getByRole } = render(<Button {...mockProps} />);
    const buttonElement = getByRole("button");
    expect(buttonElement).toHaveClass("brick");
  });

  test("applies size class", () => {
    const { getByRole } = render(<Button {...mockProps} />);
    const buttonElement = getByRole("button");
    expect(buttonElement).toHaveClass("m");
  });

  test("applies view class", () => {
    const { getByRole } = render(<Button {...mockProps} />);
    const buttonElement = getByRole("button");
    expect(buttonElement).toHaveClass("primary");
  });

  test("applies full-size class if fullSize prop is true", () => {
    const mockPropsWithFullSize: ButtonProps = {
      ...mockProps,
      fullSize: true,
    };
    const { getByRole } = render(<Button {...mockPropsWithFullSize} />);
    const buttonElement = getByRole("button");
    expect(buttonElement).toHaveClass("full-size");
  });

  test("does not apply full-size class if fullSize prop is false", () => {
    const { getByRole } = render(<Button {...mockProps} />);
    const buttonElement = getByRole("button");
    expect(buttonElement).not.toHaveClass("full-size");
  });

  test("applies clip class if clip prop is true", () => {
    const mockPropsWithFullSize: ButtonProps = {
      ...mockProps,
      clip: true,
    };
    const { getByRole } = render(<Button {...mockPropsWithFullSize} />);
    const buttonElement = getByRole("button");
    expect(buttonElement).toHaveClass("clip");
  });

  test("does not apply clip class if clip prop is false", () => {
    const { getByRole } = render(<Button {...mockProps} />);
    const buttonElement = getByRole("button");
    expect(buttonElement).not.toHaveClass("clip");
  });

  test("applies loading class if loading prop is true", () => {
    const mockPropsWithFullSize: ButtonProps = {
      ...mockProps,
      loading: true,
    };
    const { getByRole } = render(<Button {...mockPropsWithFullSize} />);
    const buttonElement = getByRole("button");
    expect(buttonElement).toHaveClass("loading");
  });

  test("does not apply loading class if loading prop is false", () => {
    const { getByRole } = render(<Button {...mockProps} />);
    const buttonElement = getByRole("button");
    expect(buttonElement).not.toHaveClass("loading");
  });

  test("applies disabled attribute if disabled prop is true", () => {
    const mockPropsWithFullSize: ButtonProps = {
      ...mockProps,
      disabled: true,
    };
    const { getByRole } = render(<Button {...mockPropsWithFullSize} />);
    const buttonElement = getByRole("button");
    expect(buttonElement).toHaveAttribute("disabled");
  });

  test("does not apply disabled attribute if disabled prop is false", () => {
    const { getByRole } = render(<Button {...mockProps} />);
    const buttonElement = getByRole("button");
    expect(buttonElement).not.toHaveAttribute("disabled");
  });
});
