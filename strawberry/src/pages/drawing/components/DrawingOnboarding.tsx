import styled from "styled-components";
import { Label, theme, Wrapper } from "../../../core/design_system";

import ProgressBar from "./ProgressBar";
import DrawingStep from "./DrawingStep";

import santafeBG from "/src/assets/images/background/santafeBG.svg";
import drawingBG from "/src/assets/images/background/drawingBG.svg";

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
  width: 90%;
  height: 90%;
`;

function DrawingOnboarding() {
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
          3초 후 디 올 뉴 싼타페를 그려주세요!
        </Label>
        <Wrapper $margin="16px 0 0 0" display="flex" $justifycontent="center">
          <CanvasContainer>
            <StyledImage src={santafeBG} alt="Car" />
          </CanvasContainer>
        </Wrapper>
        <Wrapper $margin="30px 0 0 0">
          <ProgressBar timeLimit={3} isProgress={true} />
        </Wrapper>
      </GameWrapper>
    </Wrapper>
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

const BGImage = styled.img`
  position: absolute;
  z-index: 10;
  left: 50%;
  transform: translateX(-50%);
`;
