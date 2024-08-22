import { useMemo } from "react";
import { useParams } from "react-router-dom";

import { checkOnlyBlank } from "../../../../core/utils/checkOnlyBlank";
import { useGlobalDispatch } from "../../../../core/hooks/useGlobalDispatch";
import { throttle } from "../../../../core/utils";

import { useQuizPlayMutation } from "../../../../data/queries/quiz/useQuizPlayMutation";

import { useQuizPlayState } from "../useQuizPlayState";
import { useQuizPlayDispatch } from "../useQuizPlayDispatch";

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
    quizPlayDispatch?.({ type: "SET_SUBMITTED", payload: true });
    if (checkOnlyBlank(answer)) {
      showBlankModal();
      return;
    }
    if (subEventId && !isSubmitted) {
      postQuiz({
        body: { answer: answer, subEventId: subEventId, token: token ?? "" },
      });
    }
  }

  const throttledHandleSubmit = useMemo(() => {
    return throttle()(handleSubmit);
  }, [answer]);

  return {
    description,
    question,
    subDescription,
    placeholder,
    hint,
    answer,
    isSubmitted,
    handleSubmit: throttledHandleSubmit,
  };
}

export default useQuizPlayPage;
