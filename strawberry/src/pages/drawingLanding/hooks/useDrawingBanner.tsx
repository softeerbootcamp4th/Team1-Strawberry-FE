import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useGlobalState } from "../../../core/hooks/useGlobalState";
import { useCheckLogin } from "../../../core/hooks/useCheckLogin";

import { useDrawingLandingState } from "./useDrawingLandingState";

import { getChanceFromLastTime } from "../services/getChanceFromLastTime";

function useDrawingBanner() {
  const [possibleChance, setPossibleChance] = useState<number>(0);
  const { drawingLandingData: landData, eventUserData: eventData } =
    useDrawingLandingState();
  const navigate = useNavigate();
  const checkLogin = useCheckLogin();
  const { isLogin } = useGlobalState();

  const isFirst = eventData === undefined ? true : false;

  const isFinished =
    landData?.endAt && new Date(landData.endAt).getTime() < Date.now();

  useEffect(() => {
    if (eventData) {
      setPossibleChance(
        Math.min(
          getChanceFromLastTime(eventData?.lastChargeAt) + eventData?.chance,
          2,
        ),
      );
    }
  }, [eventData]);

  const handleEventClick = () => {
    checkLogin(() => {
      navigate(`/drawing/play/${landData?.subEventId}`);
    });
  };

  return {
    possibleChance,
    isFinished,
    landData,
    handleEventClick,
    isLogin,
    isFirst,
  };
}

export default useDrawingBanner;
