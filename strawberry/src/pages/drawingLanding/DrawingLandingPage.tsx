import { Wrapper } from "../../core/design_system";

import { useDrawingLandingData } from "./hooks/useDrawingLandingData";

import DrawingBanner from "./components/drawingBanner";
import DrawingInfo from "./components/drawingInfo";
import DrawingRank from "./components/drawingRank";
import DrawingNotice from "./components/drawingNotice";

function DrawingLandingPage() {
  useDrawingLandingData();

  return (
    <Wrapper>
      <DrawingBanner />
      <DrawingInfo />
      <DrawingRank />
      <DrawingNotice />
    </Wrapper>
  );
}

export default DrawingLandingPage;
