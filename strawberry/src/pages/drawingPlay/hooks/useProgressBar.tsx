import { useState, useEffect } from "react";

function useProgressBar(timeLimit: number, isProgress: boolean) {
  const [progress, setProgress] = useState(0);
  const [timer, setTimer] = useState(timeLimit);

  const updateProgress = () => {
    setProgress((prev) => {
      const newProgress = Math.min(prev + 100 / timeLimit, 100);
      return newProgress;
    });
  };

  useEffect(() => {
    if (isProgress) {
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
  }, [isProgress, timeLimit]);

  return { progress, timer };
}

export default useProgressBar;
