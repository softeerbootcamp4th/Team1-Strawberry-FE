import { QuizPlayProvider } from "./contexts/quizPlayContext";

import QuizPlayPage from "./QuizPlayPage";

function QuizPlayWrapper() {
  return (
    <>
      <QuizPlayProvider>
        <QuizPlayPage />
      </QuizPlayProvider>
    </>
  );
}

export default QuizPlayWrapper;
