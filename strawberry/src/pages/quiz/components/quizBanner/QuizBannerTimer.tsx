import styled from "styled-components";
import { useState, useEffect } from "react";

import { theme, Wrapper } from "../../../../core/design_system";
import convertSeconds from "../../../../core/utils/convertSeconds";
import TimerSection from "./TimerSection";

interface Props {
  initialSeconds: number;
}

function QuizBannerTimer({ initialSeconds }: Props) {
  const [leftSeconds, setLeftSeconds] = useState<number>(initialSeconds);

  useEffect(() => {
    if (initialSeconds <= 0) return; // 초기값이 0 이하일 때 타이머 실행 안 함

    const intervalId = setInterval(() => {
      setLeftSeconds((prevSeconds) => {
        if (prevSeconds <= 0) {
          clearInterval(intervalId); // 타이머 종료
          return 0;
        }
        return prevSeconds - 1;
      });
    }, 1000);

    // 컴포넌트 언마운트 시 interval 정리
    return () => clearInterval(intervalId);
  }, [initialSeconds]);

  const time = convertSeconds(leftSeconds);

  return (
    <Wrapper $margin="38px 0 0 0" $backgroundcolor={theme.Color.Dimmer.default}>
      <Wrapper
        display="flex"
        width="fit-content"
        height="fit-content"
        $justifycontent="center"
        $alignitems="center"
        $margin="0 auto"
        $padding="36px 0 0 0"
      >
        <TimerSection number={time.days} text="DAYS"></TimerSection>
        <BigText>:</BigText>
        <TimerSection number={time.hours} text="HOURS"></TimerSection>
        <BigText>:</BigText>
        <TimerSection number={time.minutes} text="MINUTES"></TimerSection>
        <BigText>:</BigText>
        <TimerSection number={time.seconds} text="SECONDS"></TimerSection>
      </Wrapper>
    </Wrapper>
  );
}

export default QuizBannerTimer;

const BigText = styled.p`
  color: ${({ theme }) => theme.Color.TextIcon.reverse};
  font-size: 60px;
  font-weight: 500;
  line-height: 140%;
  height: min-content;
`;
