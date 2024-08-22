import styled from "styled-components";

import { theme, Wrapper } from "../../../../core/design_system";

import { useTimeConversion, useQuizLandingState } from "../../hooks";

import TimerSection from "./TimerSection";
import { useEffect } from "react";

interface QuizBannerTimerProps {
  setIsOpened: (bool: boolean) => void;
}

function QuizBannerTimer({ setIsOpened }: QuizBannerTimerProps) {
  const { quizLandingData } = useQuizLandingState();
  const remainSecond = quizLandingData?.remainSecond;

  const time = useTimeConversion(remainSecond || 0);

  useEffect(() => {
    if (time.totalSeconds === 0) {
      setIsOpened(true);
    } else {
      setIsOpened(false);
    }
  }, [time.totalSeconds]);

  return (
    <Wrapper
      height="242px"
      $margin="38px 0 0 0"
      $backgroundcolor={theme.Color.Dimmer.default}
    >
      <TimerWrapper>
        <TimerSection number={time.days} text="DAYS"></TimerSection>
        <BigText>:</BigText>
        <TimerSection number={time.hours} text="HOURS"></TimerSection>
        <BigText>:</BigText>
        <TimerSection number={time.minutes} text="MINUTES"></TimerSection>
        <BigText>:</BigText>
        <TimerSection number={time.seconds} text="SECONDS"></TimerSection>
      </TimerWrapper>
    </Wrapper>
  );
}

export default QuizBannerTimer;

const TimerWrapper = styled.div`
  display: flex;
  width: fit-content;
  height: fit-content;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding-top: 36px;
`;

const BigText = styled.p`
  color: ${({ theme }) => theme.Color.TextIcon.reverse};
  font-size: 60px;
  font-weight: 500;
  line-height: 140%;
  height: min-content;
`;
