import styled from "styled-components";
import { Label, theme, Wrapper } from "../../../../core/design_system";
import { useDrawingCanvas } from "./useDrawingCanvas"; // 커스텀 훅 import

const DrawingCanvas = ({ timeLimit = 7 }) => {
  const {
    canvasRef,
    timeLeft,
    lives,
    maxAccuracy,
    startDrawing,
    handleMouseUp,
    handleMouseMove,
  } = useDrawingCanvas(timeLimit);

  return (
    <Wrapper
      $position="relative"
      display="flex"
      $flexdirection="column"
      $justifycontent="center"
      $alignitems="center"
    >
      <StyledCanvas
        ref={canvasRef}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onMouseDown={startDrawing} // 사용자가 그리기를 시작할 때 호출
      />
      <Label $token="Body3Light">{`Time left: ${timeLeft}s`}</Label>
      <Label $token="Body3Light">{`Lives: ${lives}`}</Label>
      <Label $token="Body3Light">{`Max Accuracy: ${maxAccuracy.toFixed(2)}%`}</Label>
    </Wrapper>
  );
};

export default DrawingCanvas;

const StyledCanvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
`;
