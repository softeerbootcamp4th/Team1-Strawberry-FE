import { useEffect } from "react";

import { useGlobalDispatch } from "../../../../core/hooks/useGlobalDispatch";

import { useQuizPlayMutation } from "../../../../data/queries/quiz/useQuizPlayMutation";

import { useQuizPlayState } from "../useQuizPlayState";
import { useQuizPlayDispatch } from "../useQuizPlayDispatch";
import { checkOnlyBlank } from "../../../../core/utils/checkOnlyBlank";
import { useParams } from "react-router-dom";

function useQuizPlayPage() {
  const { token } = useParams();
  const { mutate: postQuiz } = useQuizPlayMutation();
  const globalDispatch = useGlobalDispatch();
  const quizPlayDispatch = useQuizPlayDispatch();

  const showBlankModal = () =>
    globalDispatch?.({
      type: "OPEN_MODAL",
      modalCategory: "ONE_BUTTON",
      modalProps: {
        title: "공백만 제출할 수 없습니다.",
        info: "올바른 답안을 제출해주세요.",
        primaryBtnContent: "닫기",
      },
    });

  const {
    description,
    question,
    subDescription,
    placeholder,
    hint,
    answer,
    subEventId,
    isSubmitted,
  } = useQuizPlayState();

  function handleSubmit() {
    if (subEventId && !isSubmitted) {
      quizPlayDispatch?.({ type: "SET_SUBMITTED", payload: true });
      postQuiz({
        body: { answer: answer, subEventId: subEventId, token: token ?? "" },
      });
    }
  }

  return {
    description,
    question,
    subDescription,
    placeholder,
    hint,
    answer,
    subEventId,
    postQuiz,
    handleSubmit,
    isSubmitted,
    showBlankModal,
    handleSubmit,
    isSubmitted,
    token,
  };
}

export default useQuizPlayPage;
