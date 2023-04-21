import React, { AnchorHTMLAttributes, ButtonHTMLAttributes, ForwardedRef, forwardRef } from "react";
import { ButtonLinkTypes, ButtonTypes, LinkTypes } from "../../types/ButtonTypes";

import "./Button.css";
import cn from "classnames";

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonLinkTypes>(
  (props, ref) => {
    const {
      as = "button",
      label,
      border = "round",
      size = "m",
      view = "primary",
      fullSize,
      clip,
      className,
      ...otherProps
    } = props;

    if (as === "link") {
      const { href } = props as LinkTypes;
      return (
        <a
          className={cn("btn", className, border, view, size, { clip, "full-size": fullSize })}
          ref={ref as ForwardedRef<HTMLAnchorElement>}
          href={href}
          {...(otherProps as AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {label}
        </a>
      );
    } else {
      const { loading, disabled } = props as ButtonTypes;

      return (
        <button
          className={cn("btn", className, border, view, size, {
            clip,
            loading,
            "full-size": fullSize,
          })}
          ref={ref as ForwardedRef<HTMLButtonElement>}
          disabled={disabled}
          {...(otherProps as ButtonHTMLAttributes<HTMLButtonElement>)}
        >
          {label}
          {/* loader ↓ */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="30px"
            height="30px"
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid"
          >
            <circle
              cx="50"
              cy="50"
              fill="none"
              stroke="#ffffff"
              strokeWidth="10"
              r="40"
              strokeDasharray="188.49555921538757 64.83185307179586"
            >
              <animateTransform
                attributeName="transform"
                type="rotate"
                repeatCount="indefinite"
                dur="1s"
                values="0 50 50;360 50 50"
                keyTimes="0;1"
              ></animateTransform>
            </circle>
          </svg>
        </button>
      );
    }
  }
);
