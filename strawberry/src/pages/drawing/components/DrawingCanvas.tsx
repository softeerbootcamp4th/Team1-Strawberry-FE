import React, { useState, useRef, useEffect } from "react";
import rough from "roughjs/bundled/rough.esm";

import styled from "styled-components";
import { Label, theme, Wrapper } from "../../../core/design_system";

import santafeLineBG from "/src/assets/images/background/santafeLineBG.svg";

type Point = { x: number; y: number };
type LineStyle = {
  stroke: string;
  lineWidth: number;
  lineStyle: string;
  roughness: number;
  bowing: number;
  strokeWidth: number;
};

const customLineStyle: LineStyle = {
  stroke: "#46474C",
  lineWidth: 2,
  lineStyle: "round",
  roughness: 0.5,
  bowing: 1,
  strokeWidth: 5,
};

const DrawingCanvas: React.FC<{
  timeLimit?: number;
  startTimer?: () => void;
}> = ({ timeLimit = 10, startTimer }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [userPoints, setUserPoints] = useState<Point[]>([]);
  const [timer, setTimer] = useState(timeLimit);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.width = 938;
      canvas.height = 513;
    }
  }, []);

  useEffect(() => {
    if (timer === 0) {
      setIsDrawing(false);
      console.log(userPoints);
    }
  }, [timer]);

  const startDrawing = () => {
    startTimer?.();
    setUserPoints([]);
    setTimer(timeLimit);
    setIsDrawing(true); // 버튼 클릭 시 드로잉 상태를 활성화

    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev === 1) {
          clearInterval(interval);
        }
        return prev - 1;
      });
    }, 1000);
  };

  const stopDrawing = () => {
    console.log(userPoints);
    setUserPoints([]);
    setIsDrawing(false);
  };

  useEffect(() => {
    if (!isDrawing) {
      console.log(userPoints);
      setUserPoints([]);
    }
  }, [isDrawing]);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (isDrawing) {
      const rect = canvasRef.current?.getBoundingClientRect();
      if (rect) {
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setUserPoints([{ x, y }]);
      }
    }
  };

  const handleMouseUp = () => {
    if (isDrawing) {
      stopDrawing();
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDrawing) return;
    const rect = canvasRef.current?.getBoundingClientRect();
    if (rect) {
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      setUserPoints((prevPoints) => [...prevPoints, { x, y }]);

      const canvas = canvasRef.current;
      const ctx = canvas?.getContext("2d");
      const rc = rough.canvas(canvas!);

      ctx?.clearRect(0, 0, canvas.width, canvas.height);

      if (userPoints.length > 1) {
        rc.line(
          userPoints[0].x,
          userPoints[0].y,
          userPoints[1].x,
          userPoints[1].y,
          customLineStyle,
        );
        for (let i = 1; i < userPoints.length - 1; i++) {
          rc.line(
            userPoints[i].x,
            userPoints[i].y,
            userPoints[i + 1].x,
            userPoints[i + 1].y,
            customLineStyle,
          );
        }
      }
    }
  };

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
      <StyledImage src={santafeLineBG} alt="Car" />
      <StyledCanvas
        ref={canvasRef}
        width={938}
        height={513}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      />
      <Wrapper
        display="flex"
        $flexdirection="row"
        $alignitems="center"
        $position="absolute"
        $top="280px"
        left="43px"
        height="fit-content"
      >
        <StartButton onClick={startDrawing} disabled={isDrawing} />
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

const StartButton = styled.button`
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
  width: 90%;
  height: 90%;
`;
