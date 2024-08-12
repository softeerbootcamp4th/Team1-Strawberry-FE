import { Wrapper } from "../../../../core/design_system";

import QuizBackground from "./QuizBackground";
import QuizDescription from "./QuizDescription";
import QuizQuestion from "./QuizQuestion";
import QuizSubDescription from "./QuizSubDescription";

export interface quizBoardType {
  description: string;
  question: string;
  subDescription: string;
  hint: string;
}

function QuizBoard(props: quizBoardType) {
  const { description, question, subDescription, hint } = props;

  return (
    <Wrapper
      width="100%"
      height="calc(100vh - 452px)"
      display="flex"
      $justifycontent="center"
      $position="relative"
    >
      <QuizBackground />
      <Wrapper
        $position="absolute"
        $top="20px"
        width="100%"
        height="100%"
        display="flex"
        $flexdirection="column"
        $justifycontent="center"
        $alignitems="center"
      >
        <QuizDescription description={description} />
        <QuizQuestion question={question} hint={hint} />
        {subDescription && (
          <QuizSubDescription subDescription={subDescription} />
        )}
      </Wrapper>
    </Wrapper>
  );
}

export default QuizBoard;
