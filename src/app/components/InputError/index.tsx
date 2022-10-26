import React from "react";

import exclamation_mark from "../../../assets/exclamation.svg";

interface InputErrorProps {
  tooltip: string;
  className?: string;
}

export const InputError: React.FC<InputErrorProps> = ({
  tooltip,
  className,
}) => {
  return (
    <div
      data-testid={`error-${tooltip}`}
      className={`group flex items-center justify-center h-6 w-6 bg-red-100 rounded-md ${className}`}
    >
      <img src={exclamation_mark} alt={`error icon: ${tooltip}`} />
      <span className="absolute text-xs hidden group-hover:flex group-hover:flex-auto -translate-x  -top-2 -translate-y-full min-w-fit px-4 py-1 bg-gray-900 rounded-lg text-center text-white after:content-tooltip-arrow after:absolute after:left-1/2 after:top-[68%] after:-translate-x-1/2  whitespace-nowrap">
        {tooltip}
      </span>
    </div>
  );
};
