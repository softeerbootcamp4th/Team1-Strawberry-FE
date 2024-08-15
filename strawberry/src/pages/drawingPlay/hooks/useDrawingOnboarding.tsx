import { useEffect } from "react";

import { useDrawingPlayDispatch } from "./useDrawingPlayDispatch";
import { useDrawingPlayState } from "./useDrawingPlayState";

export function useDrawingOnboarding() {
  const { stage, totalStage, isGuideOpen, drawingInfo } = useDrawingPlayState();
  const dispatch = useDrawingPlayDispatch();

  useEffect(() => {
    if (!localStorage.getItem("hideGuideModalUntil") && isGuideOpen !== false) {
      dispatch({ type: "SET_GUIDE_OPEN", payload: true });
    }
  }, [isGuideOpen, dispatch]);

  useEffect(() => {
    if (localStorage.getItem("hideGuideModalUntil") || isGuideOpen === false) {
      const id = setTimeout(() => {
        dispatch({ type: "SET_GAME" });
      }, 3000);

      return () => clearTimeout(id);
    }
  }, [isGuideOpen, dispatch]);

  return {
    stage,
    totalStage,
    imgPath: drawingInfo?.gameInfos?.[stage - 1].imgUrl ?? "",
    title: drawingInfo?.gameInfos?.[stage - 1].onBoardingMsg ?? "",
    isGuideOpen,
  };
}
