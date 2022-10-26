import logo from "../../../assets/logo.svg";

interface LogoProps {
  height?: number;
  width?: number;
}

export const Logo: React.FC<LogoProps> = ({ height = 40, width = 40 }) => {
  return <img src={logo} height={height} width={width} alt="testfully logo" />;
};
