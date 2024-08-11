import styled from "styled-components";
import { Label, theme, Wrapper } from "../../../../core/design_system";

import ProgressBar from "../ProgressBar";
import DrawingStep from "../DrawingStep";

import { useDrawingOnboarding } from "../../hooks/useDrawingOnboarding";

function DrawingOnboarding() {
  const { stage, totalStage, imgPath, title } = useDrawingOnboarding();

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
          <CanvasContainer>
            <StyledImage src={imgPath} alt="Car" />
          </CanvasContainer>
        </Wrapper>
        <Wrapper $margin="30px 0 0 0">
          <ProgressBar timeLimit={3} isProgress={true} />
        </Wrapper>
      </GameWrapper>
    </>
  );
}
export default DrawingOnboarding;

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

// 수정 필요
const StyledImage = styled.img`
  width: 90%;
  height: 90%;
`;
