import React, { FC, ReactNode, MouseEvent, useState } from "react";
import "./Dropdown.css";
import Button, { ButtonProps } from "../Button/Button";

export interface DropdownProps extends ButtonProps {
  child: ReactNode;
}

const Dropdown: FC<DropdownProps> = (props) => {
  const { child, label, ...otherProps } = props;
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const initialClassNames = ["dropdown"];
  const dropdownBody = isOpened ? [`dropdown__body dropdown__body_active`] : ["dropdown__body"];

  function onClickHandler(e: MouseEvent<HTMLButtonElement, MouseEvent>) {
    console.log(e);
    setIsOpened((prev) => !prev);
  }

  return (
    <div className={initialClassNames.join(" ")}>
      <Button className="dropdown__btn" label={label} {...otherProps} />
      <div className="dropdown__body"></div>
    </div>
  );
};
export default Dropdown;
