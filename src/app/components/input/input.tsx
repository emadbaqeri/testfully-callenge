import React from "react";

import { InputError } from "../InputError";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error: string | undefined;
  label: string;
  name: string;
  touched: boolean | undefined;
}

export const Input: React.FC<InputProps> = ({
  className,
  error,
  label,
  name,
  touched = false,
  ...other
}) => {
  return (
    <div className="w-full my-2 relative">
      <label htmlFor={name} className="block my-1 text-xs font-inter">
        {label}
      </label>
      {!error ? null : (
        <InputError
          className="absolute translate-y-[30%] right-[6px]"
          tooltip={error}
        />
      )}
      <input
        name={name}
        className={`w-full font-inter text-sm text-gray-900 ${
          !error
            ? `border border-gray-200 focus:ring-0 focus:ring-white focus:shadow-input`
            : `border border-red-500`
        } px-3 py-2 rounded-md shadow-sm outline-none ${className}`}
        {...other}
      />
    </div>
  );
};
