import React from "react";

export interface InputProps {
  type: string;
  name: string;
  label?: string;
  defaultValue?: string | number;
  onChange?: () => void;
  styles?: {
    [index: string]: string;
  };
  children?: React.ReactNode | React.ReactNode[];
  className?: string;
}

const Input = ({
  name,
  label,
  defaultValue,
  type,
  onChange,
  styles,
  children,
  className,
}: InputProps) => {
  return (
    <div className={`${className}`} style={styles}>
      <input type={type} name={name} defaultValue={defaultValue} />
      <label>{label}</label>
      {children}
    </div>
  );
};
export default Input;
