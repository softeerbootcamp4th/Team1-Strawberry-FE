import { Wrapper } from "../../../../core/design_system";

import { useQuizLandingState } from "../../hooks";

function QuizInfo() {
  const { quizLandingData } = useQuizLandingState();

  return (
    <Wrapper display="flex" $justifycontent="center">
      <img width="100%" src={quizLandingData?.eventImg.main}></img>
    </Wrapper>
  );
}

export default QuizInfo;
