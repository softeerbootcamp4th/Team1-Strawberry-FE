import { useEffect, useState } from "react";

import { useGlobalState } from "../../../core/hooks/useGlobalState";
import { useGlobalDispatch } from "../../../core/hooks/useGlobalDispatch";

function useToast() {
  const { toastContent, isToastOpen } = useGlobalState();
  const globalDispatch = useGlobalDispatch();
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let hideTimeout: number;
    let closeTimeout: number;

    if (isToastOpen) {
      hideTimeout = window.setTimeout(() => {
        setIsVisible(false);
      }, 2000);

      closeTimeout = window.setTimeout(() => {
        globalDispatch({ type: "CLOSE_TOAST" });
        setIsVisible(true);
      }, 4000);
    }

    return () => {
      if (hideTimeout) {
        clearTimeout(hideTimeout);
      }
      if (closeTimeout) {
        clearTimeout(closeTimeout);
      }
    };
  }, [isToastOpen, globalDispatch]);

  return {
    content: toastContent,
    isVisible,
    isToastOpen,
  };
}

export default useToast;
