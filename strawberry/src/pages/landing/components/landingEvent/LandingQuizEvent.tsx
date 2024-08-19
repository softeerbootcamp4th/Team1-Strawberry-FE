import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import {
  theme,
  Wrapper,
  Label,
  ImageEnum,
} from "../../../../core/design_system";

import { QuizOpen } from "../../../../data/entities/Landing";

import LandingQuizMainContent from "./LandingQuizMainContent";

interface LandingQuizEventProps {
  quizMainImg: string;
  quizInfos: QuizOpen[];
  remainSecond: number;
}

function LandingQuizEvent(props: LandingQuizEventProps) {
  const { quizMainImg, quizInfos, remainSecond } = props;

  const navigate = useNavigate();

  return (
    <>
      <Wrapper $position="relative" width="100%" height="fit-content">
        <img src={quizMainImg} alt="landingQuizEvent" width="100%" />
        <Wrapper
          $position="absolute"
          $zindex="10"
          width={`${(679 / 1920) * 100}%`}
          height={`${(585 / 896) * 100}%`}
          $top={`${(171 / 896) * 100}%`}
          left={`${(1001 / 1920) * 100}%`}
        >
          <LandingQuizMainContent
            quizInfos={quizInfos}
            remainSecond={remainSecond}
          />
        </Wrapper>
        <StyledButton onClick={() => navigate("/quiz")}>
          <Label $token="Title3Regular" color={theme.Color.Common.black}>
            이벤트 참여하기
          </Label>
          <img
            src={ImageEnum.ICONS.UPPERRIGHTBUTTON}
            alt="upperRightButton"
            width="59px"
            height="59px"
          />
        </StyledButton>
      </Wrapper>
    </>
  );
}

export default LandingQuizEvent;

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: ${(680 / 896) * 100}%;
  right: ${(253.96 / 1920) * 100}%;
  height: fit-content;
  z-index: 10;
`;
