import React, { FC, ReactNode, useState, useEffect, useRef, createRef } from "react";
import "./Dropdown.css";
import Button, { ButtonProps } from "../Button/Button";
import { calcPreferSide } from "./helpers";

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
  const btnRef = useRef<HTMLButtonElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const parentElRef = useRef<HTMLDivElement>(null);

  const mainClassNames = ["dropdown"];
  const tooltipClassNames = ["dropdown__body"];
  const btnClassName = className ? className : "";

  useEffect(() => {
    const isBottom = parentElRef.current.classList.contains("bottom");
    console.log(parentElRef.current.classList);
    preferSide === "auto" && calcPreferSide({ btnRef, tooltipRef, parentElRef });

    document.addEventListener("click", onDocumentHandler);
    return () => document.removeEventListener("click", onDocumentHandler);
  }, [preferSide, isOpened]);

  tooltipClassNames.push(theme);
  isOpened && mainClassNames.push("dropdown_active");
  preferSide !== "auto" && mainClassNames.push(preferSide);
  tipClass && tooltipClassNames.push(tipClass);

  function onDocumentHandler(e: Event) {
    const isDropdownArea = !!(e.target as HTMLElement).closest(".dropdown");

    if (!isDropdownArea) {
      setIsOpened(false);
    }
  }

  return (
    <div className={mainClassNames.join(" ")} ref={parentElRef} style={{ marginLeft: "auto" }}>
      <Button
        className={`dropdown__btn ${btnClassName}`}
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
