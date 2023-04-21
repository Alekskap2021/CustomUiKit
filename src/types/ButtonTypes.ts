interface ButtonLinkUnionTypes {
  label: string;
  className?: string;
  border?: "brick" | "round";
  view?: "primary" | "success" | "danger" | "clear";
  size?: "l" | "m" | "s" | "xs";
  clip?: boolean;
  fullSize?: boolean;
}

export interface ButtonTypes
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonLinkUnionTypes {
  as: "button";
  loading?: boolean;
  disabled?: boolean;
}
export interface LinkTypes
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    ButtonLinkUnionTypes {
  as: "link";
  href: string;
}

export type ButtonLinkTypes = ButtonTypes | LinkTypes;
