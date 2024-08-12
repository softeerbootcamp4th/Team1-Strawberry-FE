import styled from "styled-components";
import { Label, theme, Wrapper } from "../../../../core/design_system";

import DrawingCanvas from "./DrawingCanvas";
import DrawingStep from "../DrawingStep";
import ProgressBar from "../ProgressBar";

import { useDrawingPlayState } from "../../hooks/useDrawingPlayState";

function DrawingGame() {
  const { timeLimit, isDrawing, stage, totalStage } = useDrawingPlayState();

  return (
    <>
      <DrawingStep now={stage} total={totalStage} />
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
          <DrawingCanvas timeLimit={timeLimit} />
        </Wrapper>
        <Wrapper $margin="30px 0 0 0">
          <ProgressBar timeLimit={timeLimit} isProgress={isDrawing} />
        </Wrapper>
      </GameWrapper>
    </>
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
