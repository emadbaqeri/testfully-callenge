import React from "react";

type Props = {
  children?: React.ReactNode | React.ReactNode[];
  className?: string;
};

export const ScreenWrapper: React.FC<Props> = ({ children, className}) => {
  return (
    <div className={`flex h-screen w-screen bg-white ${className}`} >
      {children}
    </div>
  );
};
