import styled from "styled-components";

import { theme, Label, Line, Wrapper } from "../../../../core/design_system";
import QuizOpenStep from "./QuizOpenStep";

function QuizOpen() {
  const question =
    "디 올 뉴 싼타페는 ‘ㅇㅅ' 과 아웃도어를 넘나드는 새로운 라이프 제공을 목표로 합니다.\n‘ㅇㅅ’은 무엇을 의미할까요?";
  return (
    <Wrapper width="66%" $margin="0 auto" $padding="42px 0 120px 0">
      <QuizOpenStep total={3} current={1} />
      <QuestionWrapper>
        <Label
          width="100%"
          $textalign="center"
          $token="Heading2Medium"
          color={theme.Color.Event.quiz_default}
          $margin="0 0 0 8px"
        >
          9월 1일 오후 12:00~15:00
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
          {question}
        </Label>
        <Wrapper
          width="max-content"
          display="flex"
          $gap="72px"
          $justifycontent="space-between"
          $backgroundcolor={theme.Color.Neutral.neutral97}
          borderRadius="6px"
          $padding="17px 97px"
          $margin="0 auto"
        >
          <Label $token="Heading1Regular" color={theme.Color.Neutral.neutral60}>
            Hint. ‘디 올 뉴 싼타페’ 신차 소개 페이지
          </Label>
          <UnderLineButton>바로가기</UnderLineButton>
        </Wrapper>
      </QuestionWrapper>
    </Wrapper>
  );
}

const QuestionWrapper = styled.div`
  margin-top: 64px;
  padding: 33px 28px;
  background-color: ${({ theme }) => theme.Color.TextIcon.reverse};
  box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.1);
`;

const UnderLineButton = styled.button`
  ${({ theme }) => theme.Typography.Heading1Regular}
  color: ${({ theme }) => theme.Color.Neutral.neutral60};
  text-decoration-line: underline;
`;

export default QuizOpen;
