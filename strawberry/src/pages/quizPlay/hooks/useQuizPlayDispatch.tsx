import { useContext } from "react";

import { QuizPlayDispatchContext } from "../contexts/quizPlayContext";

export function useQuizPlayDispatch() {
  const dispatch = useContext(QuizPlayDispatchContext);
  if (!dispatch)
    throw new Error("Drawing Play Dispatch Context Provider Not Found");
  return dispatch;
}
