import { QuizLandingContextProvider } from "./contexts/QuizLandingContext";

import QuizLandingPage from "./QuizLandingPage";

function QuizLandingWrapper() {
  return (
    <QuizLandingContextProvider>
      <QuizLandingPage />
    </QuizLandingContextProvider>
  );
}

export default QuizLandingWrapper;
