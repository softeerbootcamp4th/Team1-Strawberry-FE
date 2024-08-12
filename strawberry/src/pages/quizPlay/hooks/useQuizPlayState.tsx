import { useContext } from "react";

import { QuizPlayStateContext } from "../contexts/quizPlayContext";

export function useQuizPlayState() {
  const state = useContext(QuizPlayStateContext);
  if (!state) throw new Error("Drawing Play State Context Provider Not Found");
  return state;
}
