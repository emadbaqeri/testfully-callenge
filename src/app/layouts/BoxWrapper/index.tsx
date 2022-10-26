type BoxWrapperProps = {
  className?: string;
  children?: React.ReactNode | React.ReactNode[];
};

export const BoxWrapper: React.FC<BoxWrapperProps> = ({
  className = "",
  children,
}) => {
  return <div className={`bg-gray-50 border border-gray-100 rounded-xl ${className}`}>{children}</div>;
};
