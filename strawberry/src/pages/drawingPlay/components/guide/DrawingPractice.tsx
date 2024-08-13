import styled from "styled-components";
import { theme, Label, Wrapper } from "../../../../core/design_system";

import { useDrawingPractice } from "../../hooks/useDrawingPractice";

interface DrawingPracticeProps {
  timeLimit: number;
}

const DrawingPractice = ({ timeLimit }: DrawingPracticeProps) => {
  const {
    canvasRef,
    handleMouseMove,
    handleMouseUp,
    handleMouseDown,
    canvasWidth,
    canvasHeight,
    arcRadius,
    timer,
    isButtonDisabled,
  } = useDrawingPractice(timeLimit);

  return (
    <Wrapper
      $position="relative"
      width="400px"
      height="400px"
      display="flex"
      $flexdirection="column"
      $justifycontent="center"
      $alignitems="center"
    >
      <StyledCanvas
        ref={canvasRef}
        width={canvasWidth}
        height={canvasHeight}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={(e) => handleMouseUp(e as unknown as MouseEvent)}
      />
      <Wrapper
        display="flex"
        $alignitems="center"
        $position="absolute"
        left={`${canvasWidth / 2 - arcRadius - 6}px`}
        height="fit-content"
        $zindex="100"
      >
        <StartButton
          onMouseDown={handleMouseDown}
          onMouseUp={(e) => handleMouseUp(e as unknown as MouseEvent)}
          $disabled={isButtonDisabled}
        />
        <StartLabel>start</StartLabel>
      </Wrapper>
      <TimerLabel $token="Body2Medium" color={theme.Color.TextIcon.info}>
        남은 시간: {timer} 초
      </TimerLabel>
    </Wrapper>
  );
};

export default DrawingPractice;

const StartLabel = styled.p`
  ${({ theme }) => theme.Typography.Body2Medium}
  color: ${({ theme }) => theme.Color.TextIcon.info};
  margin-left: 5px;
  user-select: none;
`;

const StartButton = styled.div<{ $disabled: boolean }>`
  width: 12px;
  height: 12px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.Color.TextIcon.info};
  border: none;
  cursor: ${({ $disabled }) => ($disabled ? "default" : "pointer")};
`;

const StyledCanvas = styled.canvas`
  z-index: 10;
`;

const TimerLabel = styled(Label)`
  position: absolute;
  top: 340px;
  font-size: 16px;
  font-weight: bold;
`;
