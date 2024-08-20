import styled from "styled-components";

import { theme, Label, Line, Wrapper } from "../../../../core/design_system";
import { formatEventDateTime } from "../../../../core/utils";

import { useQuizLandingState } from "../../hooks";

import QuizOpenStep from "./QuizOpenStep";
import QuizEventEnd from "./QuizEventEnd";

function QuizOpen() {
  const { quizLandingData } = useQuizLandingState();
  const eventDate = formatEventDateTime(
    quizLandingData?.startAt,
    quizLandingData?.endAt,
  );

  return (
    <Wrapper width="66%" $margin="0 auto" $padding="42px 0 120px 0">
      <QuizOpenStep
        total={quizLandingData?.prizeInfos.length ?? 0}
        current={quizLandingData?.quizSequence ?? 0}
      />
      <QuestionWrapper>
        {!quizLandingData?.valid && <QuizEventEnd />}
        <Label
          width="100%"
          $textalign="center"
          $token="Heading2Medium"
          color={theme.Color.Event.quiz_default}
          $margin="0 0 0 8px"
        >
          {eventDate}
        </Label>
        <Label
          width="100%"
          $textalign="center"
          $token="Display2Medium"
          $margin="0 0 0 8px"
        >
          오늘의 문제
        </Label>
        <Line $backgroundcolor={theme.Color.Neutral.neutral95} />
        <Label
          width="100%"
          $token="Title3Regular"
          $textalign="center"
          $margin="44px 0"
        >
          {quizLandingData?.problem}
        </Label>
        <HintWrapper>
          <Label $token="Heading1Regular" color={theme.Color.Neutral.neutral60}>
            Hint. {quizLandingData?.hint}
          </Label>
          <UnderLineButton>바로가기</UnderLineButton>
        </HintWrapper>
      </QuestionWrapper>
    </Wrapper>
  );
}

const QuestionWrapper = styled.div`
  margin-top: 64px;
  padding: 33px 28px;
  background-color: ${({ theme }) => theme.Color.TextIcon.reverse};
  box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.1);
  position: relative;
`;

const HintWrapper = styled.div`
  width: max-content;
  display: flex;
  gap: 72px;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.Color.Neutral.neutral97};
  border-radius: 6px;
  padding: 17px 97px;
  margin: 0 auto;
`;

const UnderLineButton = styled.button`
  ${({ theme }) => theme.Typography.Heading1Regular}
  color: ${({ theme }) => theme.Color.Neutral.neutral60};
  text-decoration-line: underline;
`;

export default QuizOpen;
