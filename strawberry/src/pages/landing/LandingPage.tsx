import { Wrapper } from "../../core/design_system";

import LandingBanner from "./components/landingBanner/LandingBanner";
import LandingIntroduce from "./components/landingIntroduce/LandingIntroduce";
import LandingEvent from "./components/landingEvent/LandingEvent";
import LandingBottom from "./components/landingBottom/LandingBottom";

function LandingPage() {
  return (
    <>
      <Wrapper display="flex" $flexdirection="column">
        <LandingBanner />
        <LandingIntroduce />
        <LandingEvent />
        <LandingBottom />
      </Wrapper>
    </>
  );
}

export default LandingPage;
