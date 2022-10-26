import React from "react";

interface SectionProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  direction?: "row" | "col";
}

export const Section: React.FC<SectionProps> = ({
  className,
  children,
  direction = "col",
  ...other
}) => {
  return (
    <div
      className={`flex ${
        direction === "row" ? "flex-row" : "flex-col"
      } ${className}`}
      {...other}
    >
      {children}
    </div>
  );
};
