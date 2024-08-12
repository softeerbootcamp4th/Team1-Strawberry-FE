import { useQuizPlayState } from "../useQuizPlayState";

import { useQuizPlayMutation } from "../queries/useQuizPlayMutation";

function useQuizPlayPage() {
  const { mutate: postQuiz, data: postQuizData } = useQuizPlayMutation();
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
    postQuizData,
  };
}

export default useQuizPlayPage;
