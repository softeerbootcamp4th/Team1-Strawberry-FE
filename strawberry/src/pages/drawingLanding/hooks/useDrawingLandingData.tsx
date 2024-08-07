import { useEffect } from "react";
import { useDrawingLandingDispatch } from "./useDrawingLandingDispatch";
import { useDrawingLandingQuery } from "./useDrawingLandingQuery";
import { useDrawingRankQuery } from "./useDrawingRankQuery";
import { useEventUserInfoQuery } from "./useEventUserInfoQuery";

export function useDrawingLandingData() {
  const { data: landData } = useDrawingLandingQuery();
  const { data: rankData } = useDrawingRankQuery();
  const { data: eventUserData } = useEventUserInfoQuery();

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
