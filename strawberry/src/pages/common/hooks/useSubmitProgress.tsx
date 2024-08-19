import { useState, useEffect } from "react";

export function useSubmitProgress(limitTime: number) {
  const [progress, setProgress] = useState(0);
  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {
    setProgress(100 / limitTime);

    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          setIsMounted(false);
          setTimeout(() => {
            setProgress(0);
            setIsMounted(true);
          }, 100);
          return prevProgress;
        }
        return prevProgress + 100 / limitTime;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [limitTime]);

  return { progress, isMounted };
}
