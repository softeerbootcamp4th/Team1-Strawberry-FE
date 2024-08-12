import { Wrapper } from "../../../../core/design_system";

import LandingQuizEvent from "./LandingQuizEvent";
import LandingQuizPrize from "./LandingQuizPrize";
import LandingDrawingEvent from "./LandingDrawingEvent";
import LandingDrawingPrize from "./LandingDrawingPrize";
import LandingEventBanner from "./LandingEventBanner";

function LandingEvent() {
  return (
    <>
      <Wrapper display="flex" $flexdirection="column">
        <LandingEventBanner />
        <LandingQuizEvent />
        <LandingQuizPrize />
        <LandingDrawingEvent />
        <LandingDrawingPrize />
      </Wrapper>
    </>
  );
}

export default LandingEvent;
