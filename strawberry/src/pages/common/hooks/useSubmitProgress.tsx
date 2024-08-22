import { useState, useEffect } from "react";

export function useSubmitProgress(total: number, remaining: number) {
  const [progress, setProgress] = useState(0);
  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {
    const calculatedProgress = ((total - remaining) / total) * 100;
    setProgress(calculatedProgress);
  }, [total, remaining]);

  return { progress, isMounted };
}
