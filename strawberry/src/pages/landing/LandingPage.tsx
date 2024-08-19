import { Wrapper } from "../../core/design_system";

import LandingBanner from "./components/landingBanner/LandingBanner";
import LandingIntroduce from "./components/landingIntroduce/LandingIntroduce";
import LandingEvent from "./components/landingEvent/LandingEvent";
import LandingBottom from "./components/landingBottom/LandingBottom";
import useLandingData from "./hooks/useLandingData";

function LandingPage() {
  const { imgs, quizInfos, remainSecond } = useLandingData();

  return (
    <Wrapper display="flex" $flexdirection="column">
      <LandingBanner landingBannerImg={imgs?.mainImgUrl ?? ""} />
      <LandingIntroduce landingIntroduceImg={imgs?.scrolledImgUrl ?? ""} />
      <LandingEvent
        eventInfoImg={imgs?.eventInfoImg ?? ""}
        quizMainImg={imgs?.quizMainImg ?? ""}
        quizPrizeImg={imgs?.quizPrizeImg ?? ""}
        drawingMainImg={imgs?.drawingMainImg ?? ""}
        drawingPrizeImg={imgs?.drawingPrizeImg ?? ""}
        quizInfos={quizInfos ?? []}
        remainSecond={remainSecond ?? 0}
      />
      <LandingBottom />
    </Wrapper>
  );
}

export default LandingPage;
