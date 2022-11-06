import Atoms from "../atoms";
import Molecules from "../molecules";
import leverguide from "../../assets/lever_guide.png"

const LeftSection = () => {
  return (
    <Atoms.LeftWrapper>
      <Molecules.LogoCotainer />
      <Molecules.ServiceWrapper />
      <Molecules.ModeContainer/>
      <Atoms.LeverGuide src={leverguide}/>
    </Atoms.LeftWrapper>
  );
};

export default LeftSection;
