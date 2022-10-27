import React from "react";

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  className?: string;
  children: string;
}

export const Button: React.FC<ButtonProps> = ({
  className,
  children,
  ...other
}) => {
  return (
    <button
      className={`text-sm text-white rounded-md bg-none ${className}`}
      {...other}
    >
      {children}
    </button>
  );
};
