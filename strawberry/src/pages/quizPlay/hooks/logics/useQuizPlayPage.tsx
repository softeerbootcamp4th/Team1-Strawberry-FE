import { useQuizPlayState } from "../useQuizPlayState";

import { useQuizPlayMutation } from "../queries/useQuizPlayMutation";

function useQuizPlayPage() {
  const { mutate: postQuiz } = useQuizPlayMutation();
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
