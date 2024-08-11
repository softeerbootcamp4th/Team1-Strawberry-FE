import styled from "styled-components";
import { Label, theme, Wrapper } from "../../../../core/design_system";
import { useDrawingCanvas } from "../../hooks/useDrawingCanvas"; // 커스텀 훅 import

const DrawingCanvas = ({ timeLimit = 7 }) => {
  const {
    canvasRef,
    isDrawing,
    imgPath,
    startDrawing,
    handleMouseUp,
    handleMouseMove,
  } = useDrawingCanvas(timeLimit);

  return (
    <Wrapper
      $position="relative"
      width="938px"
      height="513px"
      display="flex"
      $flexdirection="column"
      $justifycontent="center"
      $alignitems="center"
    >
      <StyledImage src={imgPath} alt="Car" />
      <StyledCanvas
        ref={canvasRef}
        width={938}
        height={513}
        onMouseUp={(e) => handleMouseUp(e)}
        onMouseMove={handleMouseMove}
      />
      <Wrapper
        display="flex"
        $flexdirection="row"
        $alignitems="center"
        $position="absolute"
        $top="280px"
        left="58.5px"
        height="fit-content"
      >
        <StartButton
          onMouseDown={startDrawing}
          onMouseUp={(e) => handleMouseUp(e)}
          disabled={isDrawing}
        />
        <Label
          $token="Body2Medium"
          color={theme.Color.TextIcon.info}
          $margin="0 0 0 5px"
        >
          start
        </Label>
      </Wrapper>
    </Wrapper>
  );
};

export default DrawingCanvas;

const StartButton = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.Color.TextIcon.info};
  border: none;
  cursor: pointer;
  z-index: 10;
`;

const StyledCanvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
`;

const StyledImage = styled.img`
  width: 818px;
  height: 313px;
`;
