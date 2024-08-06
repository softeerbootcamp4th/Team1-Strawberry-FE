/* eslint-disable @typescript-eslint/no-explicit-any */

type Callback<T extends any[]> = (...args: T) => void;

export function throttle<T extends any[]>(): (
  callbackFunc: Callback<T>,
) => (...args: T) => void {
  let timer: number | null = null;

  return function throttleFunc(callbackFunc: Callback<T>) {
    return function (...args: T) {
      if (timer === null) {
        timer = window.setTimeout(() => {
          timer = null;
        }, 500);
        callbackFunc(...args);
      }
    };
  };
}
