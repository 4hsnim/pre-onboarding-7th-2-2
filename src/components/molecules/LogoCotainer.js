import Logo from "../atoms/Logo";
import LogoWrapper from "../atoms/LogoWrapper";
import Line1 from "../atoms/Line1";

import logo from "../../assets/Lever_BI 1.png";

const LogoCotainer = () => {
  return (
    <LogoWrapper>
      <Logo src={logo} />
      <Line1 />
    </LogoWrapper>
  );
};

export default LogoCotainer;
