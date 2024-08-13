import { DrawingLanding } from "../../../data/entities/DrawingLanding";
import { DrawingRank } from "../../../data/entities/DrawingRank";
import { EventUserInfo } from "../../../data/entities/EventUserInfo";

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
