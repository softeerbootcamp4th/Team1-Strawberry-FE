import { DrawingLanding } from "./DrawingLanding";
import { DrawingRank } from "./DrawingRank";
import { EventUserInfo } from "./EventUserInfo";

export interface DrawingLandingState {
  drawingLandingData?: DrawingLanding;
  drawingRankData?: DrawingRank[];
  eventUserData?: EventUserInfo;
}
