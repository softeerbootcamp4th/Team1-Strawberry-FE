import { DrawingLanding } from "../../../data/entities/DrawingLanding";
import { DrawingRank } from "../../../data/entities/DrawingRank";
import { EventUserInfo } from "../../../data/entities/EventUserInfo";

export interface DrawingLandingState {
  drawingLandingData?: DrawingLanding;
  drawingRankData?: DrawingRank[];
  eventUserData?: EventUserInfo;
}
