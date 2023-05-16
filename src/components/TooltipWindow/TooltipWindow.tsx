import { FC, forwardRef } from "react";
import cn from "classnames";
import { TooltipWindowProps } from "../../types/TooltipWindowTypes";
import "./TooltipWindow.css";

export const TooltipWindow = forwardRef<HTMLDivElement, TooltipWindowProps>((props, ref) => {
  const {
    className,
    tooltipClassName: tipClass,
    withArrow = true,
    theme = "light",
    borderStyle: border,
    children,
  } = props;

  const [borderWidth, borderStyle, borderColor] = border.split(" ");

  return (
    <div
      className={cn("tooltip-window", className, tipClass, {
        "tooltip-window_dark": theme === "dark",
      })}
      style={{ border: border }}
      ref={ref}
    >
      {children}

      <svg
        className={cn("tooltip-window__arrow", {
          "tooltip-window__arrow_visible": withArrow,
          "tooltip-window__arrow_dark": theme === "dark",
        })}
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="10"
        viewBox="0 0 20 10"
      >
        <polygon points="0,10 10,0 20,10" fill="white" stroke={borderColor ? borderColor : ""} />
      </svg>
    </div>
  );
});
