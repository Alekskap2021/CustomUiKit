import React, { FC, useState, useEffect, useRef } from "react";

import { TooltipTypes } from "../../types/TooltipTypes";
import { calcPreferSide } from "../../helpers/CalcPreferSide";

import cn from "classnames";
import "./Tooltip.css";

export const Tooltip: FC<TooltipTypes> = (props) => {
  const {
    children,
    tooltipClassName: tipClass,
    theme = "dark",
    borderStyle,
    tooltip,
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

  // Effect for calc prefer side at every hover if we have preferSideProp in "auto".
  // We have X/Y scroll at the document and other corner cases, so its necessary
  useEffect(() => {
    if (isOpened) {
      preferSide === "auto"
        ? setSide(calcPreferSide({ btnRef, tooltipRef, parentElRef }))
        : setSide(preferSide);
    }

    document.addEventListener("mouseover", onDocumentHandler);
    return () => document.removeEventListener("mouseover", onDocumentHandler);
  }, [preferSide, isOpened]);

  // Func for close tooltip if target !== tooltip
  function onDocumentHandler(e: Event) {
    const isDropdownArea = !!(e.target as HTMLElement).closest(".tooltip");

    if (!isDropdownArea) {
      setIsOpened(false);
    }
  }

  // Add necessary events && ref at children elem`s
  const myCustomChildren = React.Children.map(children, (el) => {
    if (!React.isValidElement(el)) {
      throw new Error("You should pass only valid react elements as children");
    }

    return React.cloneElement(el, {
      ...el.props,
      onMouseEnter: () => {
        setIsOpened(true);
      },
      ref: btnRef,
    });
  });

  return (
    <div
      className={cn("tooltip", side, { tooltip_active: isOpened })}
      ref={parentElRef}
      {...otherProps}
    >
      {myCustomChildren}

      <div className={cn("tooltip__body", tipClass)} ref={tooltipRef}>
        {tooltip}
      </div>
      {withArrow && <span className="tooltip__arrow" style={{ border: borderStyle }}></span>}
    </div>
  );
};
