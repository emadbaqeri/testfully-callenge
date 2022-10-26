import React from "react";

interface RowProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {}

export const Row: React.FC<RowProps> = ({ className, children, ...other }) => {
  return (
    <div className={`flex flex-row w-full ${className}`} {...other}>
      {children}
    </div>
  );
};
