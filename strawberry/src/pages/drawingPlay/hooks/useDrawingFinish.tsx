import { useState, useEffect } from "react";

import { useDrawingSharedQuery } from "../../../data/queries/drawing/useDrawingSharedQuery";
import { useGlobalDispatch } from "../../../core/hooks/useGlobalDispatch";

function useDrawingFinish() {
  const globalDispatch = useGlobalDispatch();

  const [finalScore, setFinalScore] = useState<number>(0);
  const [highestScore, setHighestScore] = useState<number>(0);

  const { data: sharedData, refetch: getSharedData } = useDrawingSharedQuery({
    // 컨텍스트 값으로 대체
    subEventId: 4,
  });

  useEffect(() => {
    // 서버 요청
    setFinalScore(72);
    setHighestScore(100);
  }, []);

  useEffect(() => {
    if (sharedData?.sharedUrl) {
      navigator.clipboard.writeText(sharedData.sharedUrl);
      globalDispatch({
        type: "OPEN_TOAST",
        toastContent: "내 점수와 url이 복사되었습니다",
      });
    }
  }, [sharedData?.sharedUrl]);

  const handleSharedClick = () => {
    getSharedData();
  };

  return {
    finalScore,
    highestScore,
    handleSharedClick,
  };
}

export default useDrawingFinish;
