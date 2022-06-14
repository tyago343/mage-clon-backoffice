import React from "react";
import "./styles.scss";
interface ButtonProps {
  type?: "button" | "submit" | "reset";
  onClick?: () => {};
  styles?: {
    [index: string]: string;
  };
  children?: React.ReactNode | React.ReactNode[];
  cssClasses?: string;
}
const Button = ({ type, onClick, children, styles, cssClasses }: ButtonProps) => {
  return (
    <button type={type} onClick={onClick} style={styles} className={`btn ${cssClasses}`}>
      {children}
    </button>
  );
};
export default Button;
