import styled from "styled-components";

import QuizBanner from "./components/quizBanner/QuizBanner";

function QuizLandingPage() {
  return (
    <QuizLandingWrapper>
      <QuizBanner></QuizBanner>
    </QuizLandingWrapper>
  );
}

const QuizLandingWrapper = styled.div`
  width: 100%;
  min-height: fit-content;
`;

export default QuizLandingPage;
