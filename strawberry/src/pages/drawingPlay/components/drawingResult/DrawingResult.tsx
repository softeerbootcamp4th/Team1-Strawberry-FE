import styled from "styled-components";
import {
  EventButton,
  Label,
  theme,
  Wrapper,
} from "../../../../core/design_system";

import { useDrawingResult } from "../../hooks/useDrawingResult";
import DrawingStep from "../DrawingStep";
import DrawingScore from "../DrawingScore";
import ImageResult from "./ImageResult";

function DrawingResult() {
  const {
    stage,
    totalStage,
    description,
    imgPath,
    isLastStage,
    handleNextStage,
    handleFinish,
    score,
    title,
  } = useDrawingResult();

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
          {title}
        </Label>
        <Wrapper $margin="16px 0 0 0" display="flex" $justifycontent="center">
          <CanvasContainer id="canvas-container">
            <StyledImage src={imgPath} alt="Car" crossOrigin="anonymous" />
            <ImageResult />
            <ScoreWrapper id="score-wrapper">
              <DrawingScore score={Number(score.toFixed(1))} />
            </ScoreWrapper>
          </CanvasContainer>
        </Wrapper>
        <DescriptionWrapper>
          <Label
            $token="Heading2Regular"
            $textalign="center"
            color={theme.Color.TextIcon.strong}
          >
            {description}
          </Label>
        </DescriptionWrapper>
        <Wrapper display="flex" $justifycontent="center" $margin="30px 0 0 0">
          {isLastStage ? (
            <EventButton
              type="DRAWING"
              status="DEFAULT"
              content="최종 결과 보기"
              onClick={handleFinish}
            />
          ) : (
            <EventButton
              type="DRAWING"
              status="DEFAULT"
              content="다음 단계로 가기"
              onClick={handleNextStage}
            />
          )}
        </Wrapper>
      </GameWrapper>
    </>
  );
}

export default DrawingResult;

const ScoreWrapper = styled.div`
  position: absolute;
  z-index: 10;
  left: 50%;
  transform: translateX(-50%);
`;

const DescriptionWrapper = styled.div`
  width: 1040px;
  height: 100px;
  background-color: ${({ theme }) => theme.Color.Ivory.ivory400};
  border: ${({ theme }) => `1px solid ${theme.Color.Ivory.ivory600}`};
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

const GameWrapper = styled.div`
  position: absolute;
  z-index: 10;
  left: 50%;
  top: 30px;
  transform: translateX(-50%);
`;

const CanvasContainer = styled.div`
  position: relative;
  width: 940px;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledImage = styled.img`
  width: 940px;
  height: 500px;
`;
