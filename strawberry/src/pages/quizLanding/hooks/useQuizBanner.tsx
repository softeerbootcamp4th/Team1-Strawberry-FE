import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useCheckLogin } from "../../../core/hooks/useCheckLogin";
import { useGlobalState } from "../../../core/hooks/useGlobalState";
import { useGlobalDispatch } from "../../../core/hooks/useGlobalDispatch";

import { useQuizWaitingQuery } from "../../../data/queries/quiz/useQuizWaitingQuery";
import { useQuizPlayMutation } from "../../../data/queries/quiz/useQuizWaitingMutation";

import { useQuizLandingState } from "./useQuizLandingState";
import { useQuizLandingDispatch } from "./useQuizLandingDispatch";

export const useQuizBanner = () => {
  const navigate = useNavigate();
  const checkLogin = useCheckLogin();
  const dispatch = useGlobalDispatch();
  const { isModalOpen } = useGlobalState();
  const [isEnter, setIsEnter] = useState<boolean>(false);
  const { quizLandingData, quizToken } = useQuizLandingState();
  const dispatchQuizLanding = useQuizLandingDispatch();

  const {
    mutate,
    data: quizWaitingMutationData,
    isSuccess: mutationSuccess,
  } = useQuizPlayMutation();

  const { data: quizWaitingQueryData } = useQuizWaitingQuery({
    subEventId: quizLandingData?.subEventId ?? -1,
    token: quizToken,
  });

  // 웨이팅 인원 반영 후 0이 되면 isEnter를 true로 변경
  useEffect(() => {
    if (quizWaitingQueryData?.waitingUsers !== undefined) {
      dispatch({
        type: "SET_WAITING_REMAINING",
        remaining: quizWaitingQueryData?.waitingUsers,
      });
    }
    if (quizWaitingQueryData?.waitingUsers === 0) {
      setIsEnter(true);
    }
  }, [quizWaitingQueryData?.waitingUsers]);

  // 모달이 꺼질 경우 기존 token을 초기화함
  useEffect(() => {
    if (isModalOpen === false) {
      dispatchQuizLanding({ type: "SET_QUIZ_TOKEN", token: "" });
    }
  }, [isModalOpen]);

  // isEnter가 true인 경우 퀴즈 진행 페이지로 넘어감
  useEffect(() => {
    if (isEnter) {
      navigate(`/quiz/play/${quizLandingData?.subEventId}/${quizToken}`);
      dispatch({ type: "CLOSE_MODAL" });
    }
  }, [isEnter]);

  // 게임에 사용되는 토큰을 설정함
  useEffect(() => {
    if (quizWaitingMutationData?.token) {
      dispatchQuizLanding({
        type: "SET_QUIZ_TOKEN",
        token: quizWaitingMutationData?.token,
      });
    }
  }, [quizWaitingMutationData]);

  // mutation에 성공하면 모달을 open함
  useEffect(() => {
    if (mutationSuccess) {
      dispatch({
        type: "OPEN_WAITING_MODAL",
        watingModalProps: {
          total: quizWaitingMutationData.currentWaitingUsers,
          remaining: quizWaitingMutationData.currentWaitingUsers,
        },
      });
    }
  }, [mutationSuccess]);

  // 이벤트 기간이 아닌 경우 안내 모달을 띄워줌
  useEffect(() => {
    if (!quizLandingData?.valid) {
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
  }, [quizLandingData?.valid, dispatch]);

  const handleEventClick = () => {
    checkLogin(() => {
      mutate({
        body: { subEventId: quizLandingData?.subEventId ?? -1 },
      });
    });
  };

  return {
    data: quizLandingData,
    handleEventClick,
    isOpened,
    setIsOpened,
  };
};
