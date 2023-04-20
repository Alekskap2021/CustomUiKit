import React, { FC, ReactNode, useState, useEffect, useRef, createRef } from "react";
import "./Tooltip.css";
import Button from "../Button/Button";
import { calcPreferSide } from "../../helpers/CalcPreferSide";
import { DropdownProps } from "../Dropdown/Dropdown";

export interface TooltipProps extends DropdownProps {
  children: ReactNode;
  tooltip: ReactNode;
  tooltipClassName?: string;
  theme?: "dark" | "light";
  borderStyle?: string;
  preferSide?: "top" | "right" | "bottom" | "left" | "auto";
  withArrow?: boolean;
  className?: string;
  label: string;
}

const Tooltip: FC<TooltipProps> = (props) => {
  const {
    children,
    className,
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

  useEffect(() => {
    preferSide === "auto" && setSide(calcPreferSide({ btnRef, tooltipRef, parentElRef }));
  }, []);

  useEffect(() => {
    if (isOpened) {
      preferSide === "auto"
        ? setSide(calcPreferSide({ btnRef, tooltipRef, parentElRef }))
        : setSide(preferSide);
    }

    document.addEventListener("mouseover", onDocumentHandler);
    return () => document.removeEventListener("mouseover", onDocumentHandler);
  }, [preferSide, isOpened]);

  function onDocumentHandler(e: Event) {
    const isDropdownArea = !!(e.target as HTMLElement).closest(".tooltip");

    if (!isDropdownArea) {
      setIsOpened(false);
    }
  }

  const mainClassNames = ["tooltip", side];
  const tooltipClassNames = ["tooltip__body"];
  const btnClassName = ["tooltip__trigger"];
  className && btnClassName.push(className);
  tipClass && tooltipClassNames.push(tipClass);
  isOpened && mainClassNames.push("tooltip_active");

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
      className={mainClassNames.join(" ")}
      ref={parentElRef}
      //   style={{ marginLeft: "auto" }}
    >
      {myCustomChildren}

      <div className={tooltipClassNames.join(" ")} ref={tooltipRef}>
        {tooltip}
      </div>
      {withArrow && <span className="tooltip__arrow" style={{ border: borderStyle }}></span>}
    </div>
  );
};

export default Tooltip;
