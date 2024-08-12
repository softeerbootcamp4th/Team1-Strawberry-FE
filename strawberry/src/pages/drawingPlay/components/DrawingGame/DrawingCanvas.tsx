import styled from "styled-components";

import { Label, theme, Wrapper } from "../../../../core/design_system";

import { useDrawingCanvas } from "../../hooks/useDrawingCanvas";

interface DrawingCanvasProps {
  timeLimit?: number;
}

function DrawingCanvas({ timeLimit }: DrawingCanvasProps) {
  const {
    canvasRef,
    isDrawing,
    imgPath,
    startDrawing,
    handleMouseUp,
    handleMouseMove,
    pointX,
    pointY,
  } = useDrawingCanvas(timeLimit);

  return (
    <Wrapper
      $position="relative"
      width="940px"
      height="500px"
      display="flex"
      $flexdirection="column"
      $justifycontent="center"
      $alignitems="center"
    >
      <StyledImage src={imgPath} alt="Car" />
      <StyledCanvas
        ref={canvasRef}
        width={940}
        height={500}
        onMouseUp={(e) => handleMouseUp(e as unknown as MouseEvent)}
        onMouseMove={handleMouseMove}
      />
      <Wrapper
        display="flex"
        $flexdirection="row"
        $alignitems="center"
        $position="absolute"
        $top={`${pointY}px`}
        left={`${pointX}px`}
        height="fit-content"
      >
        <StartButton
          onMouseDown={startDrawing}
          onMouseUp={(e) => handleMouseUp(e as unknown as MouseEvent)}
          $disabled={isDrawing}
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
}

export default DrawingCanvas;

const StartButton = styled.div<{ $disabled: boolean }>`
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
  width: 940px;
  height: 500px;
`;
