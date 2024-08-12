import { Wrapper } from "../../../../core/design_system";

import landingIntroLabel from "/src/assets/images/temp/LandingIntroLabel.svg";
import landingIntroImg from "/src/assets/images/temp/LandingIntroBG.svg";

function LandingIntroduce() {
  return (
    <>
      <Wrapper>
        <Wrapper>
          <img src={landingIntroLabel} alt="" width="100%" />
        </Wrapper>
        <Wrapper>
          <img src={landingIntroImg} alt="" width="100%" />
        </Wrapper>
      </Wrapper>
    </>
  );
}

export default LandingIntroduce;
