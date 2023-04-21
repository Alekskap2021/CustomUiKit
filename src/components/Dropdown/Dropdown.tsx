import React, { FC, useState, useEffect, useRef } from "react";

import { Button } from "../Button/Button";
import { DropdownTypes } from "../../types/DropdownTypes";

import { calcPreferSide } from "../../helpers/CalcPreferSide";

import cn from "classnames";
import "./Dropdown.css";

export const Dropdown: FC<DropdownTypes> = (props) => {
  const {
    children,
    btnClassName,
    tooltipClassName: tipClass,
    label,
    theme = "light",
    borderStyle,
    preferSide = "auto",
    withArrow = true,
    ...otherProps
  } = props;

  const [isOpened, setIsOpened] = useState<boolean>(false);
  const [side, setSide] = useState<string>("");

  const btnRef = useRef<HTMLButtonElement>();
  const tooltipRef = useRef<HTMLDivElement>();
  const parentElRef = useRef<HTMLDivElement>();

  // Effect for calc initial position at 1st render
  useEffect(() => {
    preferSide === "auto" && setSide(calcPreferSide({ btnRef, tooltipRef, parentElRef }));
  }, []);

  // Effect for calc prefer side at every click if we have preferSideProp in "auto".
  // We have X/Y scroll at the document and other corner cases, so its necessary
  useEffect(() => {
    if (isOpened) {
      preferSide === "auto"
        ? setSide(calcPreferSide({ btnRef, tooltipRef, parentElRef }))
        : setSide(preferSide);
    }

    document.addEventListener("click", onDocumentHandler);
    return () => document.removeEventListener("click", onDocumentHandler);
  }, [preferSide, isOpened]);

  // Effect for calc prefer side at every click if we have preferSideProp in "auto".
  // We have X/Y scroll at the document and other corner cases, so its necessary
  function onDocumentHandler(e: Event) {
    const isDropdownArea = !!(e.target as HTMLElement).closest(".dropdown");

    if (!isDropdownArea) {
      setIsOpened(false);
    }
  }

  return (
    <div className={cn("dropdown", side, theme, { dropdown_active: isOpened })} ref={parentElRef}>
      <Button
        className={cn("dropdown__btn", btnClassName)}
        label={label}
        ref={btnRef}
        as="button"
        onClick={() => setIsOpened((prev) => !prev)}
        {...otherProps}
      />

      <div
        className={cn("dropdown__body", tipClass)}
        style={{ border: borderStyle }}
        ref={tooltipRef}
      >
        {children}
      </div>

      {withArrow && <span className="dropdown__arrow" style={{ border: borderStyle }}></span>}
    </div>
  );
};
