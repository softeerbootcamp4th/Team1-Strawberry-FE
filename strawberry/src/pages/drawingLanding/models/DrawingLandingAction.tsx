import { DrawingLanding } from "./DrawingLanding";
import { DrawingRank } from "./DrawingRank";
import { EventUserInfo } from "./EventUserInfo";

export type DrawingLandingAction =
  | {
      type: "SET_LAND_DATA";
      data: DrawingLanding;
    }
  | {
      type: "SET_RANK_DATA";
      data: DrawingRank[];
    }
  | {
      type: "SET_EVENT_USER_DATA";
      data: EventUserInfo;
    };
