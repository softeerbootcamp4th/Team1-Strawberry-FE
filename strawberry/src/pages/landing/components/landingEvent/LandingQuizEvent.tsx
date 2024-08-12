import { Wrapper } from "../../../../core/design_system";

import landingQuizEvent from "/src/assets/images/temp/LandingQuizEvent.svg";
import LandingQuizMainContent from "./LandingQuizMainContent";

function LandingQuizEvent() {
  return (
    <>
      <Wrapper $position="relative" width="100%" height="fit-content">
        <img src={landingQuizEvent} alt="landingQuizEvent" width="100%" />
        <Wrapper
          $position="absolute"
          $zindex="10"
          width={`${(679 / 1920) * 100}%`}
          height={`${(585 / 896) * 100}%`}
          $top={`${(171 / 896) * 100}%`}
          left={`${(1001 / 1920) * 100}%`}
        >
          <LandingQuizMainContent />
        </Wrapper>
      </Wrapper>
    </>
  );
}

export default LandingQuizEvent;
