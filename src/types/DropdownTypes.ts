import { ReactNode } from "react";
import { ButtonTypes } from "./ButtonTypes";

export interface DropdownTypes extends Omit<ButtonTypes, "as"> {
  children: ReactNode;
  tooltipClassName?: string;
  btnClassName?: string;
  theme?: "dark" | "light";
  borderStyle?: string;
  preferSide?: "top" | "right" | "bottom" | "left" | "auto";
  withArrow?: boolean;
}
