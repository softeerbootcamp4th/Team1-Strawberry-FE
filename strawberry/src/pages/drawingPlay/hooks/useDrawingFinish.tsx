import { useEffect } from "react";

import { useGlobalDispatch } from "../../../core/hooks/useGlobalDispatch";

import { useDrawingSharedQuery } from "../../../data/queries/drawing/useDrawingSharedQuery";
import { useDrawingFinishQuery } from "../../../data/queries/drawing/useDrawingFinishQuery";
import { useParams } from "react-router-dom";

function useDrawingFinish() {
  const { subEventId } = useParams();
  const globalDispatch = useGlobalDispatch();
  const { data: drawingFinish } = useDrawingFinishQuery({
    subEventId: subEventId,
  });
  const {
    data: sharedData,
    refetch: getSharedData,
    isStale,
  } = useDrawingSharedQuery({
    subEventId: subEventId,
  });

  useEffect(() => {
    if (sharedData?.sharedUrl && !isStale) {
      navigator.clipboard.writeText(sharedData.sharedUrl);
      globalDispatch({
        type: "CLOSE_TOAST",
      });
      setTimeout(() => {
        globalDispatch({
          type: "OPEN_TOAST",
          toastContent: "내 점수와 url이 복사되었습니다",
        });
      }, 1);
    }
  }, [isStale, sharedData?.sharedUrl, globalDispatch]);

  const handleSharedClick = () => {
    if (isStale) {
      getSharedData();
    }
  };

  const handleRetryClick = () => {
    location.reload();
  };

  return {
    finalScore: drawingFinish?.totalScore ?? 0,
    highestScore: drawingFinish?.maxScore ?? 0,
    chance: drawingFinish?.chance ?? 0,
    handleSharedClick,
    handleRetryClick,
  };
}

export default useDrawingFinish;
