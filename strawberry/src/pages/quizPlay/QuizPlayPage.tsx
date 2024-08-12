import { EventButton, Label, Wrapper, theme } from "../../core/design_system";
import CardInput from "./components/quizInput/CardInput";
import QuizBoard from "./components/quizBoard/QuizBoard";
import useQuizPlayData from "./hooks/useQuizPlayData";
import useQuizPlayPage from "./hooks/logics/useQuizPlayPage";

function QuizPlayPage() {
  useQuizPlayData();
  const {
    description,
    question,
    subDescription,
    placeholder,
    hint,
    answer,
    subEventId,
    postQuiz,
    // postQuizData,
  } = useQuizPlayPage();

  function handleSubmit() {
    if (subEventId) {
      postQuiz({ body: { answer: answer, subEventId: subEventId } });
    }
  }

  return (
    <Wrapper
      $backgroundcolor={theme.Color.Ivory.ivory500}
      display="flex"
      $flexdirection="column"
      $alignitems="center"
      $padding="0 0 110px 0"
      height="calc(100vh - 180px)"
    >
      <QuizBoard
        description={description}
        question={question}
        subDescription={subDescription}
        hint={hint}
      />
      <Wrapper
        display="flex"
        $flexdirection="row"
        width="100%"
        $justifycontent="center"
        $alignitems="center"
      >
        <Label $token="Title1Medium" $margin="0 40px 0 0">
          정답 :
        </Label>
        <CardInput placeholder={placeholder} length={placeholder?.length} />
      </Wrapper>
      <Wrapper
        $margin="70px 0 0 0"
        width="100%"
        display="flex"
        $justifycontent="center"
      >
        <EventButton
          type="QUIZ"
          status={
            answer?.length === placeholder?.length ? "DEFAULT" : "DISABLED"
          }
          content="답변 제출하기"
          onClick={handleSubmit}
        />
      </Wrapper>
    </Wrapper>
  );
}

export default QuizPlayPage;
