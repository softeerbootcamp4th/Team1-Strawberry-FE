import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useCheckLogin } from "../../../core/hooks/useCheckLogin";

import { useGlobalDispatch } from "../../../core/hooks/useGlobalDispatch";
import { useQuizLandingState } from "./useQuizLandingState";

export const useQuizBanner = () => {
  const navigate = useNavigate();
  const checkLogin = useCheckLogin();
  const dispatch = useGlobalDispatch();
  const { quizLandingData: data } = useQuizLandingState();
  const [isOpened, setIsOpened] = useState<boolean>(false);

  const handleEventClick = () => {
    checkLogin(() => {
      navigate(`/quiz/play/${data?.subEventId}`);
    });
  };

  useEffect(() => {
    if (!data?.valid) {
      dispatch({
        type: "OPEN_MODAL",
        modalCategory: "ONE_BUTTON",
        modalProps: {
          title: "이벤트 기간이 아닙니다",
          info: "이벤트 기간을 확인해주세요.",
          whiteBtnContent: "닫기",
        },
      });
    }
    return dispatch?.({ type: "CLOSE_MODAL" });
  }, [data?.valid, dispatch]);

  return {
    data,
    handleEventClick,
    isOpened,
    setIsOpened,
  };
};
