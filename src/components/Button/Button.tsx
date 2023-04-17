import React, { FC, HTMLAttributes, MouseEvent } from "react";
import "./Button.css";

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  label: string;
  className?: string;
  form?: "brick" | "round";
  view?: "primary" | "success" | "danger" | "link";
  size?: "l" | "m" | "s" | "xs";
  clip?: boolean;
  loading?: boolean;
  disabled?: boolean;
  fullSize?: boolean;
}

const Button: FC<ButtonProps> = (props) => {
  const {
    label,
    form = "round",
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

  initialClassNames.push(form);
  initialClassNames.push(view);
  initialClassNames.push(size);

  clip && initialClassNames.push("clip");
  loading && initialClassNames.push("loading");
  fullSize && initialClassNames.push("full-size");

  return (
    <button className={initialClassNames.join(" ")} disabled={disabled} {...otherProps}>
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
          stroke-width="10"
          r="40"
          stroke-dasharray="188.49555921538757 64.83185307179586"
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
};
export default Button;
