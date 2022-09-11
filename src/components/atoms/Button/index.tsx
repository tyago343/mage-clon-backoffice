import React from "react";
import "./styles.scss";
interface ButtonProps {
  type?: "button" | "submit" | "reset";
  onClick?: () => {};
  styles?: {
    [index: string]: string;
  };
  children?: React.ReactNode | React.ReactNode[];
  className?: string;
}
const Button: React.FunctionComponent<ButtonProps> = ({
  type = "button",
  onClick,
  children = "CTA",
  styles,
  className = "",
}: ButtonProps) => {
  return (
    <button type={type} onClick={onClick} style={styles} className={`btn ${className}`}>
      {children}
    </button>
  );
};
export default Button;
