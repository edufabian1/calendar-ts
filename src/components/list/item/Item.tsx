import React from "react";
import "./item.css";

interface IProps {
  className: string;
  styles?: React.CSSProperties;
  children: JSX.Element | string | number;
}

const Item = (props: IProps) => {
  return (
    <li className={props.className} style={props.styles}>
      {props.children}
    </li>
  );
};

export default Item;
