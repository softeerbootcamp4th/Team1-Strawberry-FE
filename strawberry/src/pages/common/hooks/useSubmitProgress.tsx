import { useState, useEffect } from "react";

export function useSubmitProgress(total: number, remaining: number) {
  const [progress, setProgress] = useState(0);
  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {
    const calculatedProgress = ((total - remaining) / total) * 100;
    setProgress(calculatedProgress);

    if (remaining <= 0) {
      setIsMounted(false);
      setTimeout(() => {
        setProgress(0);
        setIsMounted(true);
      }, 100);
    } else {
      setIsMounted(true);
    }
  }, [total, remaining]);

  return { progress, isMounted };
}
