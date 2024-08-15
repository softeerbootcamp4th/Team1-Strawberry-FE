import { useEffect, useState } from "react";

import { useGlobalState } from "../../../core/hooks/useGlobalState";
import { useGlobalDispatch } from "../../../core/hooks/useGlobalDispatch";

function useToast() {
  const { toastContent, isToastOpen } = useGlobalState();
  const globalDispatch = useGlobalDispatch();
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (isToastOpen) {
      setTimeout(() => {
        setIsVisible(false);
      }, 2000);

      setTimeout(() => {
        globalDispatch({ type: "CLOSE_TOAST" });
      }, 4000);
    }
  }, [isToastOpen, globalDispatch]);

  return {
    content: toastContent,
    isVisible,
    isToastOpen,
  };
}

export default useToast;
