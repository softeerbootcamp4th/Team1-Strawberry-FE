import styled from "styled-components";

import {
  Label,
  theme,
  Wrapper,
  ImageEnum,
} from "../../../../core/design_system";

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
    handleFinish,
    handleMouseMove,
    pointX,
    pointY,
    handleArrive,
  } = useDrawingCanvas(timeLimit);

  return (
    <CanvasWrapper onMouseMove={handleMouseMove}>
      <StyledImage src={imgPath} alt="Car" />
      <StyledCanvas
        ref={canvasRef}
        width={940}
        height={500}
        onMouseUp={handleFinish}
        onMouseOut={handleFinish}
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
          onMouseEnter={handleArrive}
          onMouseUp={handleFinish}
          $disabled={isDrawing}
        />
        <Label
          $token="Body2Medium"
          color={theme.Color.TextIcon.info}
          $margin="0 0 0 5px"
        >
          {isDrawing ? "end" : "start"}
        </Label>
      </Wrapper>
    </CanvasWrapper>
  );
}

export default DrawingCanvas;

const CanvasWrapper = styled.div`
  position: relative;
  width: 940px;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  user-select: none;
`;

const StartButton = styled.div<{ $disabled: boolean }>`
  width: 12px;
  height: 12px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.Color.TextIcon.info};
  border: none;

  cursor: ${({ $disabled }) =>
    $disabled ? `url(${ImageEnum.ICONS.PENCIL}) 3 2.25, pointer` : "pointer"};
  z-index: 10;
`;

const StyledCanvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  border: 5px dashed #c3c3c3;
  border-radius: 15px;
`;

const StyledImage = styled.img`
  width: 940px;
  height: 500px;
`;
