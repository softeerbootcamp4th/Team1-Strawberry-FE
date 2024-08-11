import styled from "styled-components";
import {
  EventButton,
  Label,
  theme,
  Wrapper,
} from "../../../../core/design_system";

import DrawingStep from "../DrawingStep";
import DrawingScore from "../DrawingScore";

import ImageResult from "./ImageResult";
import { useDrawingResult } from "../../hooks/useDrawingResult";

function DrawingResult() {
  const {
    stage,
    totalStage,
    description,
    imgPath,
    isLastStage,
    handleNextStage,
    handleFinish,
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
          조금만 더 하면 고득점!
        </Label>
        <Wrapper $margin="16px 0 0 0" display="flex" $justifycontent="center">
          <CanvasContainer>
            <StyledImage src={imgPath} alt="Car" />
            <ImageResult />
            <ScoreWrapper>
              <DrawingScore score={72.2} />
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
        <Wrapper display="flex" $justifycontent="center">
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
  border-radius: 10;
  display: flex;
  justify-content: center;
  align-items: center;
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
  width: 938px;
  height: 513px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledImage = styled.img`
  width: 938px;
  height: 513px;
`;
