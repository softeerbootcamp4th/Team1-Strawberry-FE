import { useContext } from "react";

import { QuizLandingStateContext } from "../contexts/QuizLandingContext";

export function useQuizLandingState() {
  const state = useContext(QuizLandingStateContext);
  if (!state) throw new Error("Quiz Landing State Context Provider Not Found");
  return state;
}
