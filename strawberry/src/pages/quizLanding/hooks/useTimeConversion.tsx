import { useState, useEffect } from "react";

import convertSeconds from "../../../core/utils/convertSeconds";

import { Timer } from "../models";

export function useTimeConversion(initialSeconds: number): Timer {
  const [seconds, setSeconds] = useState<number>(initialSeconds);

  useEffect(() => {
    setSeconds(initialSeconds);
  }, [initialSeconds]);

  useEffect(() => {
    if (seconds <= 0) return;

    const intervalId = setInterval(() => {
      setSeconds((prevSeconds) => {
        if (prevSeconds <= 1) {
          clearInterval(intervalId);
          return 0;
        }
        return prevSeconds - 1;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, [seconds]);

  return convertSeconds(seconds);
}
