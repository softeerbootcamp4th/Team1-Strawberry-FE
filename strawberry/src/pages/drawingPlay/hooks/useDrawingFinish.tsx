import { useState, useEffect } from "react";

import { useDrawingSharedQuery } from "../../../data/queries/drawing/useDrawingSharedQuery";

function useDrawingFinish() {
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
