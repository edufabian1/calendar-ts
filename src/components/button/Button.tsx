import React from "react";

interface IProps {
  className: string;
  children: JSX.Element | string;
}

const Button = (props: IProps) => {
  return (
    <button type="button" className={props.className}>
      {props.children}
    </button>
  );
};

export default Button;
