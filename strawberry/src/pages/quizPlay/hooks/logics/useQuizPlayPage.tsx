import { useEffect } from "react";

import { useGlobalDispatch } from "../../../../core/hooks/useGlobalDispatch";

import { useQuizPlayMutation } from "../../../../data/queries/quiz/useQuizPlayMutation";

import { useQuizPlayState } from "../useQuizPlayState";

function useQuizPlayPage() {
  const { mutate: postQuiz, isLoading } = useQuizPlayMutation();
  const globalDispatch = useGlobalDispatch();

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
  };
}

export default useQuizPlayPage;
