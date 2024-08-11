import styled from "styled-components";

import { Label, theme, Wrapper } from "../../../../core/design_system";

import CountdownTimer from "./CountdownTimer";
import useLandingQuizMainContent from "../../hooks/useLandingQuizMainContent";

import clock_white from "/src/assets/images/icons/clock_white.svg";

const LandingQuizMainContent = () => {
  const { initialTime, schedules } = useLandingQuizMainContent();

  return (
    <Container>
      <UpperWrapper>
        <Label color="white" $token="Heading2Regular">
          선착순 오픈까지 남은 시간
        </Label>
        <Wrapper display="flex" width="fit-content" $gap="20px">
          <img src={clock_white} alt="clock_white" />
          <CountdownTimer initialTime={initialTime} />
        </Wrapper>
      </UpperWrapper>
      <Wrapper
        $margin="49px 0 0 0"
        display="flex"
        $flexdirection="column"
        $gap="16px"
      >
        {schedules.map((schedule, index) => (
          <ScheduleContainer key={index}>
            <Label $token="Title2Regular" color={theme.Color.TextIcon.reverse}>
              {`${schedule.date} ${schedule.time} 오픈 예정`}
            </Label>
          </ScheduleContainer>
        ))}
      </Wrapper>
    </Container>
  );
};

export default LandingQuizMainContent;

// Styled Components
const Container = styled.div`
  padding: 23px 47px 45px 47px;
  box-sizing: border-box;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const UpperWrapper = styled.div`
  border-bottom: 1px solid white;
  display: flex;
  flex-direction: column;
  align-items: end;
`;

const ScheduleContainer = styled.div`
  background-color: #af6f53;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
