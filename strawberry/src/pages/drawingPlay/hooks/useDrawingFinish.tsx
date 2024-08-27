import { useEffect, useMemo, useCallback } from "react";

import { useGlobalDispatch } from "../../../core/hooks/useGlobalDispatch";

import { throttle } from "../../../core/utils";

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
      navigator.clipboard.writeText(
        `https://back.softeer1.site/preview/${sharedData.sharedUrl}`,
      );
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

  const handleSharedClick = useCallback(() => {
    if (isStale) {
      getSharedData();
    }
  }, [isStale, getSharedData]);

  const throttledSharedClick = useMemo(() => {
    return throttle()(handleSharedClick);
  }, [handleSharedClick]);

  const handleRetryClick = () => {
    location.reload();
  };

  return {
    finalScore: drawingFinish?.totalScore ?? 0,
    highestScore: drawingFinish?.maxScore ?? 0,
    chance: drawingFinish?.chance ?? 0,
    expectationChance: drawingFinish?.expectationBonusChance ?? 0,
    shareChance: drawingFinish?.shareBonusChance ?? 0,
    handleSharedClick: throttledSharedClick,
    handleRetryClick,
  };
}

export default useDrawingFinish;
