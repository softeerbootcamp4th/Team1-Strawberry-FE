import { useEffect } from "react";
import { useDrawingLandingDispatch } from "./useDrawingLandingDispatch";

import {
  useDrawingRankQuery,
  useEventUserInfoQuery,
  useDrawingLandingQuery,
} from "../../../data/queries";
import { useDrawingLandingState } from "./useDrawingLandingState";

export function useDrawingLandingData() {
  const state = useDrawingLandingState();

  const { data: landData } = useDrawingLandingQuery();
  const { data: rankData, refetch: fetchRank } = useDrawingRankQuery({
    subEventId: state.drawingLandingData?.subEventId,
  });
  const { data: eventUserData, refetch: fetchEventInfo } =
    useEventUserInfoQuery({ subEventId: state.drawingLandingData?.subEventId });

  useEffect(() => {
    if (state.drawingLandingData?.subEventId) {
      fetchRank();
      fetchEventInfo();
    }
  }, [state.drawingLandingData?.subEventId]);

  const dispatch = useDrawingLandingDispatch();

  useEffect(() => {
    if (rankData) {
      dispatch({ type: "SET_RANK_DATA", data: rankData });
    }
  }, [rankData, dispatch]);

  useEffect(() => {
    if (landData) {
      dispatch({ type: "SET_LAND_DATA", data: landData });
    }
  }, [landData, dispatch]);

  useEffect(() => {
    if (eventUserData) {
      dispatch({ type: "SET_EVENT_USER_DATA", data: eventUserData });
    }
  }, [eventUserData, dispatch]);

  return { rankData, landData, eventUserData };
}
