import { useContext } from "react";

import { QuizLandingDispatchContext } from "../contexts/QuizLandingContext";

export function useQuizLandingDispatch() {
  const dispatch = useContext(QuizLandingDispatchContext);
  if (!dispatch)
    throw new Error("Quiz Landing Dispatch Context Provider Not Found");
  return dispatch;
}
