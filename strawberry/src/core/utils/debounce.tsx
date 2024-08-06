/* eslint-disable @typescript-eslint/no-explicit-any */

type Callback<T extends any[]> = (...args: T) => void;

export function debounce<T extends any[]>(
  debounceTimeMs: number = 500,
): (callbackFunc: Callback<T>) => (...args: T) => void {
  let timeoutId: number | null = null;

  return function debounceFunc(callbackFunc: Callback<T>) {
    return function (...args: T) {
      if (timeoutId !== null) {
        clearTimeout(timeoutId);
      }
      timeoutId = window.setTimeout(() => {
        callbackFunc(...args);
      }, debounceTimeMs);
    };
  };
}
