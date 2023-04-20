import React, { FC, ReactNode, useState, useEffect, useRef, createRef } from "react";
import "./Dropdown.css";
import Button, { ButtonProps } from "../Button/Button";
import { calcPreferSide } from "../../helpers/CalcPreferSide";

export interface DropdownProps extends ButtonProps {
  child: ReactNode;
  tooltipClassName?: string;
  theme?: "dark" | "light";
  borderStyle?: string;
  preferSide?: "top" | "right" | "bottom" | "left" | "auto";
  withArrow?: boolean;
  className?: string;
}

const Dropdown: FC<DropdownProps> = (props) => {
  const {
    child,
    className,
    tooltipClassName: tipClass,
    label,
    theme = "light",
    borderStyle,
    as,
    preferSide = "auto",
    withArrow = true,
    ...otherProps
  } = props;

  const [isOpened, setIsOpened] = useState<boolean>(false);
  const [side, setSide] = useState<string>("");
  const btnRef = useRef<HTMLButtonElement>();
  const tooltipRef = useRef<HTMLDivElement>();
  const parentElRef = useRef<HTMLDivElement>();

  useEffect(() => {
    preferSide === "auto" && setSide(calcPreferSide({ btnRef, tooltipRef, parentElRef }));
    console.log(btnRef.current.getBoundingClientRect());
  }, []);

  useEffect(() => {
    if (isOpened) {
      preferSide === "auto"
        ? setSide(calcPreferSide({ btnRef, tooltipRef, parentElRef }))
        : setSide(preferSide);
    }

    document.addEventListener("click", onDocumentHandler);
    return () => document.removeEventListener("click", onDocumentHandler);
  }, [preferSide, isOpened]);

  function onDocumentHandler(e: Event) {
    const isDropdownArea = !!(e.target as HTMLElement).closest(".dropdown");

    if (!isDropdownArea) {
      setIsOpened(false);
    }
  }

  const mainClassNames = ["dropdown", side];
  const tooltipClassNames = ["dropdown__body"];
  const btnClassName = ["dropdown__btn"];

  className && btnClassName.push(className);
  tipClass && tooltipClassNames.push(tipClass);
  theme && mainClassNames.push(theme);
  isOpened && mainClassNames.push("dropdown_active");

  return (
    <div
      className={mainClassNames.join(" ")}
      ref={parentElRef}
      //   style={{ margin: "0 auto" }}
      //   style={{ marginLeft: "auto" }}
    >
      <Button
        className={btnClassName.join(" ")}
        label={label}
        ref={btnRef}
        onClick={() => setIsOpened((prev) => !prev)}
        {...otherProps}
      />

      <div className={tooltipClassNames.join(" ")} ref={tooltipRef}>
        {child}
      </div>

      {withArrow && <span className="dropdown__arrow" style={{ border: borderStyle }}></span>}
    </div>
  );
};

export default Dropdown;
