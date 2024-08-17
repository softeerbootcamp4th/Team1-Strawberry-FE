import { Wrapper } from "../../../../core/design_system";

import { QuizOpen } from "../../../../data/entities/Landing";

import LandingQuizEvent from "./LandingQuizEvent";
import LandingQuizPrize from "./LandingQuizPrize";
import LandingDrawingEvent from "./LandingDrawingEvent";
import LandingDrawingPrize from "./LandingDrawingPrize";
import LandingEventBanner from "./LandingEventBanner";

interface LandingEventProps {
  eventInfoImg: string;
  quizMainImg: string;
  quizPrizeImg: string;
  drawingMainImg: string;
  drawingPrizeImg: string;
  quizInfos: QuizOpen[];
  remainSecond: number;
}

function LandingEvent(props: LandingEventProps) {
  const {
    eventInfoImg,
    quizMainImg,
    quizPrizeImg,
    drawingMainImg,
    drawingPrizeImg,
    quizInfos,
    remainSecond,
  } = props;

  return (
    <>
      <Wrapper display="flex" $flexdirection="column">
        <LandingEventBanner eventInfoImg={eventInfoImg} />
        <LandingQuizEvent
          remainSecond={remainSecond}
          quizMainImg={quizMainImg}
          quizInfos={quizInfos}
        />
        <LandingQuizPrize quizPrizeImg={quizPrizeImg} />
        <LandingDrawingEvent drawingMainImg={drawingMainImg} />
        <LandingDrawingPrize drawingPrizeImg={drawingPrizeImg} />
      </Wrapper>
    </>
  );
}

export default LandingEvent;
