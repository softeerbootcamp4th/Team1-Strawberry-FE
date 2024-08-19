import { useEffect, useRef } from "react";

import { useGlobalState } from "../../../core/hooks/useGlobalState";
import { useGlobalDispatch } from "../../../core/hooks/useGlobalDispatch";

const useModal = () => {
  const { isModalOpen, modalCategory, modalProps } = useGlobalState();
  const dispatch = useGlobalDispatch();
  const previousFocusRef = useRef<HTMLElement | null>(null);

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      if (modalProps?.onWhiteBtnClick) {
        modalProps.onWhiteBtnClick();
      } else if (modalProps?.onPrimaryBtnClick) {
        modalProps?.onPrimaryBtnClick();
      }
    }
  };

  useEffect(() => {
    if (isModalOpen) {
      previousFocusRef.current = document.activeElement as HTMLElement;
      document.body.style.overflow = "hidden";

      previousFocusRef.current.blur();

      document.addEventListener("keydown", handleKeyDown);

      return () => {
        document.body.style.overflow = "auto";
        document.removeEventListener("keydown", handleKeyDown);

        if (previousFocusRef.current) {
          previousFocusRef.current.focus();
        }
      };
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isModalOpen, modalProps, dispatch]);

  return {
    isModalOpen,
    modalCategory,
    modalProps,
  };
};

export default useModal;
