import React from "react";

export interface IButtonProps {
  text: string;
}

const Button = ({ text }: IButtonProps) => {
  return <button>{text}</button>;
};

export default Button;
