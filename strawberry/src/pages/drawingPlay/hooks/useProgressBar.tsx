import { useState, useEffect } from "react";
import { useDrawingPlayState } from "./useDrawingPlayState";

function useProgressBar(timeLimit: number, isProgress: boolean) {
  const [progress, setProgress] = useState(0);
  const [timer, setTimer] = useState(timeLimit);

  const { status, isGuideOpen, isDrawing } = useDrawingPlayState();

  const updateProgress = () => {
    setProgress((prev) => {
      const newProgress = Math.min(prev + 100 / timeLimit, 100);
      return newProgress;
    });
  };

  useEffect(() => {
    if (
      (status === "onBoarding" &&
        localStorage.getItem("hideGuideModalUntil")) ||
      isProgress
    ) {
      setProgress(0);
      setTimer(timeLimit);

      updateProgress();

      const interval = setInterval(() => {
        updateProgress();
        setTimer((prev) => {
          if (prev > 1) {
            return prev - 1;
          } else {
            clearInterval(interval);
            return 0;
          }
        });
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [isProgress, timeLimit, isDrawing]);

  return { progress, timer };
}

export default useProgressBar;
