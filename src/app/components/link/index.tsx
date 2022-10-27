import React from "react";

interface LinkProps
  extends React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {}

export const Link: React.FC<LinkProps> = ({ className, children, ...other }) => {
  return <a className={`text-xs text-blue-500 ${className}`} {...other}>{children}</a>;
};
