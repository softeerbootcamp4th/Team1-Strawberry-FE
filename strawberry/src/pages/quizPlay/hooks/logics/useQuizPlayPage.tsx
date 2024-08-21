import { useEffect } from "react";

import { useGlobalDispatch } from "../../../../core/hooks/useGlobalDispatch";

import { useQuizPlayMutation } from "../../../../data/queries/quiz/useQuizPlayMutation";

import { useQuizPlayState } from "../useQuizPlayState";

import usePrizeModal from "../usePrizeModal";

function useQuizPlayPage() {
  const { mutate: postQuiz, isLoading } = useQuizPlayMutation();
  const globalDispatch = useGlobalDispatch();
  const prizeModal = usePrizeModal();

  useEffect(() => {
    let timeoutId: number | undefined;

    if (isLoading) {
      timeoutId = setTimeout(() => {
        globalDispatch?.({
          type: "OPEN_MODAL",
          modalCategory: "PROGRESS",
          modalProps: {},
        });
      }, 200); // 0.2초 안에 결과가 나오면 로딩창 안 보여줌
    } else {
      clearTimeout(timeoutId);
    }

    return () => clearTimeout(timeoutId);
  }, [isLoading, globalDispatch]);

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
  } = useQuizPlayState();

  return {
    description,
    question,
    subDescription,
    placeholder,
    hint,
    answer,
    subEventId,
    postQuiz,
    showBlankModal,
  };
}

export default useQuizPlayPage;
