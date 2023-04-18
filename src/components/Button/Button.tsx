import React, { AnchorHTMLAttributes, ButtonHTMLAttributes, ForwardedRef, forwardRef } from "react";
import "./Button.css";

interface ButtonLinkProps {
  label: string;
  className?: string;
  border?: "brick" | "round";
  view?: "primary" | "success" | "danger" | "clear";
  size?: "l" | "m" | "s" | "xs";
  clip?: boolean;
  loading?: boolean;
  disabled?: boolean;
  fullSize?: boolean;
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonLinkProps {
  as?: "button";
}
export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement>, ButtonLinkProps {
  as?: "link";
}

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps | LinkProps>(
  (props, ref) => {
    const {
      as = "button",
      label,
      border = "round",
      size = "m",
      view = "primary",
      fullSize,
      clip,
      loading,
      disabled,
      className,
      ...otherProps
    } = props;

    const initialClassNames = className ? [`btn ${className}`] : ["btn"];

    initialClassNames.push(border);
    initialClassNames.push(view);
    initialClassNames.push(size);

    clip && initialClassNames.push("clip");
    loading && initialClassNames.push("loading");
    fullSize && initialClassNames.push("full-size");

    if (as === "link") {
      return (
        <a
          className={initialClassNames.join(" ")}
          ref={ref as ForwardedRef<HTMLAnchorElement>}
          {...(otherProps as AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {label}
        </a>
      );
    }

    return (
      <button
        className={initialClassNames.join(" ")}
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
);
export default Button;
