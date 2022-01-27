import React from "react";
import "./Title.css";

interface IProps {
  className?: string;
  children: JSX.Element | string | number;
}

const Title = (props: IProps) => {
  return <h1 className={props.className}>{props.children}</h1>;
};

export default Title;
