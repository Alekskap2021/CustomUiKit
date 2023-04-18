import React, { FC, ReactNode, useState, useEffect, useRef, createRef } from "react";
import "./Dropdown.css";
import Button, { ButtonProps } from "../Button/Button";
import { calcPreferSide } from "./helpers";

export interface DropdownProps extends ButtonProps {
  child: ReactNode;
  bodyClassName?: string;
  theme?: "dark" | "light";
  borderStyle?: string;
}

const Dropdown: FC<DropdownProps> = (props) => {
  const { child, bodyClassName, label, theme = "light", borderStyle, as, ...otherProps } = props;
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const dropdownBtnRef = useRef<HTMLButtonElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    calcPreferSide(dropdownBtnRef, tooltipRef);
    document.addEventListener("click", onDocumentHandler);
    return () => document.removeEventListener("click", onDocumentHandler);
  }, []);

  const mainClassNames = isOpened ? [`dropdown dropdown_active`] : ["dropdown"];
  const dropdownClassNames = ["dropdown__body"];

  theme && dropdownClassNames.push(theme);
  bodyClassName && dropdownClassNames.push(bodyClassName);

  function onDocumentHandler(e: Event) {
    const isDropdownArea = !!(e.target as HTMLElement).closest(".dropdown");

    if (!isDropdownArea) {
      setIsOpened(false);
    }
  }

  function onDropdownHandler() {
    calcPreferSide(dropdownBtnRef, tooltipRef);
    setIsOpened((prev) => !prev);
  }

  return (
    <div className={mainClassNames.join(" ")} style={{ margin: "0 auto" }}>
      <Button
        className="dropdown__btn"
        label={label}
        ref={dropdownBtnRef}
        onClick={onDropdownHandler}
        {...otherProps}
      />

      <div className={dropdownClassNames.join(" ")} ref={tooltipRef}>
        <div className="dropdown__wrapper" style={{ border: borderStyle }}>
          {child}
          <span className="dropdown__arrow" style={{ border: borderStyle }}></span>
        </div>
      </div>
    </div>
  );
};
export default Dropdown;
