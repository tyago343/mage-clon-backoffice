import React from "react";
import "./styles.scss";
export interface InputProps {
  type: string;
  name: string;
  id: string;
  label?: string;
  defaultValue?: string | number;
  onChange?: () => void;
  styles?: {
    [index: string]: string;
  };
  children?: React.ReactNode | React.ReactNode[];
  className?: string;
  required?: boolean;
}

const Input: React.FunctionComponent<InputProps> = ({
  name,
  label,
  defaultValue,
  type,
  onChange,
  styles,
  children,
  className,
  id,
  required,
}: InputProps) => {
  const commonProps = {
    ...(className && { className }),
    styles,
  };
  return (
    <div className="login-page__wrapper" {...commonProps}>
      <label htmlFor={id} className={`login-page__label ${required ? "required" : ""}`}>
        <span>{label}</span>
      </label>
      <input
        type={type}
        name={name}
        defaultValue={defaultValue}
        id={id}
        className={`login-page__input`}
        required={required}
      />
      {children}
    </div>
  );
};
export default Input;
