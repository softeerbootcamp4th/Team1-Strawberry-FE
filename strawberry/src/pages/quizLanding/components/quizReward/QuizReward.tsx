import styled from "styled-components";

import { theme, Label, Wrapper } from "../../../../core/design_system";

import { useQuizLandingState } from "../../hooks";

import QuizRewardItem from "./QuizRewardItem";

function QuizReward() {
  const { quizLandingData } = useQuizLandingState();

  const notice =
    "* 이벤트는 로그인 후 참여 가능합니다.\n* 퀴즈의 정답을 정확히 기재한 경우에만 경품을 지급해 드립니다.";

  return (
    <Wrapper
      $backgroundcolor={theme.Color.Ivory.ivory500}
      $padding="86px 0 186px 0"
    >
      <Wrapper width="75%" $margin="0 auto">
        <Wrapper $margin="0 0 48px 0">
          <Label
            width="100%"
            $token="Display2Medium"
            color={theme.Color.TextIcon.strong}
            $textalign="center"
            $margin="0 0 24px 0"
          >
            <EmphasisSpan>선착순 100분</EmphasisSpan>에게만 드리는 선물!
          </Label>
          <Label
            width="100%"
            $token="Title3Regular"
            color={theme.Color.TextIcon.assistive}
            $textalign="center"
          >
            {notice}
          </Label>
        </Wrapper>
        <Wrapper display="flex" $gap="24px" $justifycontent="center">
          {quizLandingData?.prizeInfos.map((reward, index) => (
            <QuizRewardItem
              key={index}
              isClosed={!reward.validPrize}
              image={reward.prizeImgUrl}
            />
          ))}
        </Wrapper>
      </Wrapper>
    </Wrapper>
  );
}

export default QuizReward;

const EmphasisSpan = styled.span`
  ${({ theme }) => theme.Typography.Display2Medium};
  color: ${({ theme }) => theme.Color.Event.quiz_default};
`;
