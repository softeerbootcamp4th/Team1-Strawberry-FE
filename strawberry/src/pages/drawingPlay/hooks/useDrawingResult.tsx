import { useDrawingPlayDispatch } from "./useDrawingPlayDispatch";
import { useDrawingPlayState } from "./useDrawingPlayState";

export function useDrawingResult() {
  const dispatch = useDrawingPlayDispatch();
  const { stage, totalStage, canvasImg, drawingResult } = useDrawingPlayState();

  const handleNextStage = () => {
    dispatch({ type: "SET_ON_BOARDING" });
    dispatch({ type: "SET_NEXT_STAGE" });
  };

  const handleFinish = () => {
    dispatch({ type: "SET_FINISH" });
  };

  return {
    stage,
    totalStage,
    canvasImg,
    description: drawingResult?.resultDetail ?? "",
    imgPath: drawingResult?.blurImgUrl ?? "",
    title: drawingResult?.resultMsg,
    isLastStage: stage === totalStage,
    handleNextStage,
    handleFinish,
    score: drawingResult?.score ?? 0,
  };
}
