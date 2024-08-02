import styled from "styled-components";
import { Label, theme, Wrapper } from "../../../core/design_system";

import DrawingCanvas from "./DrawingCanvas";
import DrawingStep from "./DrawingStep";
import ProgressBar from "./ProgressBar";

import drawingBG from "/src/assets/images/background/drawingBG.svg";

interface DrawingGamePropsType {
  timeLimit: number;
  startTimer: () => void;
  isStarted: boolean;
}

function DrawingGame({
  timeLimit,
  startTimer,
  isStarted,
}: DrawingGamePropsType) {
  return (
    <Wrapper
      $position="relative"
      // 여기에 위와 간격 조절
      $margin="100px 0 0 0"
      width="fit-content"
      height="fit-content"
    >
      <BGImage src={drawingBG} />
      <DrawingStep now={1} total={3} />
      <GameWrapper>
        <Label
          $token="Title2Regular"
          width="100%"
          $textalign="center"
          color={theme.Color.TextIcon.default}
        >
          7초 안에 선을 따라 디 올 뉴 싼타페를 그려주세요!
        </Label>
        <Wrapper $margin="16px 0 0 0" display="flex" $justifycontent="center">
          <DrawingCanvas timeLimit={timeLimit} startTimer={startTimer} />
        </Wrapper>
        <Wrapper $margin="30px 0 0 0">
          <ProgressBar timeLimit={timeLimit} isProgress={isStarted} />
        </Wrapper>
      </GameWrapper>
    </Wrapper>
  );
}

export default DrawingGame;

const GameWrapper = styled.div`
  position: absolute;
  z-index: 10;
  left: 50%;
  top: 30px;
  transform: translateX(-50%);
`;

const BGImage = styled.img`
  position: absolute;
  z-index: 10;
  left: 50%;
  transform: translateX(-50%);
`;
