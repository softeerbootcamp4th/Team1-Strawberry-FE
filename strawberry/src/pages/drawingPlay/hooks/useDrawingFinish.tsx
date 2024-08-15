import { useEffect } from "react";

import { useDrawingSharedQuery } from "../../../data/queries/drawing/useDrawingSharedQuery";
import { useDrawingFinishQuery } from "../../../data/queries/drawing/useDrawingFinishQuery";

function useDrawingFinish() {
  const { data: drawingFinish } = useDrawingFinishQuery({ subEventId: 4 });

  const { data: sharedData, refetch: getSharedData } = useDrawingSharedQuery({
    // 컨텍스트 값으로 대체
    subEventId: 4,
  });

  useEffect(() => {
    if (sharedData?.sharedUrl) {
      navigator.clipboard.writeText(sharedData.sharedUrl);
    }
  }, [sharedData?.sharedUrl]);

  const handleSharedClick = () => {
    getSharedData();
  };

  return {
    finalScore: drawingFinish?.totalScore ?? 0,
    highestScore: drawingFinish?.maxScore ?? 0,
    chance: drawingFinish?.chance ?? 0,
    handleSharedClick,
  };
}

export default useDrawingFinish;
