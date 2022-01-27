import React, { MouseEventHandler } from "react";
import "./Button.css";

interface IProps {
  className: string;
  children: JSX.Element | string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  disabled: boolean;
}

const Button = (props: IProps) => {
  return (
    <button
      type="button"
      className={props.className}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
