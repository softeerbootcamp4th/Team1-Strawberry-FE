import styled from "styled-components";

import { Label, Wrapper, ImageEnum } from "../../../../core/design_system";

import { QuizOpen } from "../../../../data/entities/Landing";

import CountdownTimer from "./CountdownTimer";
import OpenedContent from "./OpenedContent";
import OpeningContent from "./OpeningContnet";

interface LandingQuizMainContentProps {
  quizInfos: QuizOpen[];
  remainSecond: number;
}

const LandingQuizMainContent = ({
  quizInfos,
  remainSecond,
}: LandingQuizMainContentProps) => {
  return (
    <>
      <Container>
        <UpperWrapper>
          <Label color="white" $token="Heading2Regular">
            선착순 오픈까지 남은 시간
          </Label>
          <Wrapper display="flex" width="fit-content" $gap="20px">
            <img src={ImageEnum.ICONS.CLOCK_WHITE} alt="clock_white" />
            <CountdownTimer initialTime={remainSecond} />
          </Wrapper>
        </UpperWrapper>
        <Wrapper
          $margin="30px 0 60px 0"
          display="flex"
          $flexdirection="column"
          $gap="16px"
        >
          {quizInfos.map(({ isStarted, startAt }, index) =>
            isStarted ? (
              <OpenedContent key={index} startAt={startAt} />
            ) : (
              <OpeningContent key={index} startAt={startAt} />
            ),
          )}
        </Wrapper>
      </Container>
    </>
  );
};

export default LandingQuizMainContent;

const Container = styled.div`
  padding: 23px 47px;
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
