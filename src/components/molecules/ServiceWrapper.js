import Atoms from "../atoms";

import downArrow from "../../assets/down_arrow.png";

const ServiceWrapper = () => {
  return (
    <>
      <Atoms.Title1 service>서비스</Atoms.Title1>
      <Atoms.DropDown service>
        <Atoms.Title2>매드업</Atoms.Title2>
        <Atoms.DownArrow src={downArrow} />
      </Atoms.DropDown>
    </>
  );
};

export default ServiceWrapper;
