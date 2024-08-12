import { useState, useRef, useEffect } from "react";
import rough from "roughjs/bundled/rough.esm";

import santafeLineBG from "/src/assets/images/background/santafeLineBG.svg";
import interiorLineBG from "/src/assets/images/background/interiorLineBG.svg";
import exteriorLineBG from "/src/assets/images/background/exteriorLineBG.svg";

import { LineStyle, Point } from "../models";

import { useDrawingPlayDispatch } from "./useDrawingPlayDispatch";
import { useDrawingPlayState } from "./useDrawingPlayState";

const customLineStyle: LineStyle = {
  stroke: "#46474C",
  lineWidth: 2,
  lineStyle: "round",
  roughness: 0.5,
  bowing: 1,
  strokeWidth: 5,
};

export function useDrawingCanvas(timeLimit = 10) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [userPoints, setUserPoints] = useState<Point[]>([]);
  const userPointsRef = useRef<Point[]>([]);
  const [timer, setTimer] = useState<number>(timeLimit);
  const imgPaths = ["", santafeLineBG, interiorLineBG, exteriorLineBG];
  const timeoutRef = useRef<number | null>(null);
  const intervalRef = useRef<number | null>(null);

  const { stage, isDrawing } = useDrawingPlayState();
  const dispatch = useDrawingPlayDispatch();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.width = 938;
      canvas.height = 513;
    }
  }, []);

  useEffect(() => {
    if (timer === 0) {
      dispatch({ type: "SET_FINISH_DRAWING" });
      clearInterval(intervalRef.current as number);
    }
  }, [timer]);

  useEffect(() => {
    userPointsRef.current = userPoints; // 최신의 userPoints를 ref에 저장
  }, [userPoints]);

  const setPlayTimeout = () => {
    dispatch({ type: "SET_START_DRAWING" });
    timeoutRef.current = window.setTimeout(() => {
      stopDrawing();
    }, 7000);
  };

  const startDrawing = () => {
    setPlayTimeout();
    setUserPoints([]);
    userPointsRef.current = []; // ref도 초기화
    setTimer(timeLimit);

    intervalRef.current = window.setInterval(() => {
      setTimer((prev) => {
        if (prev === 1) {
          clearInterval(intervalRef.current as number);
        }
        return prev - 1;
      });
    }, 1000);
  };

  const stopDrawing = () => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    if (timeoutRef.current !== null) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    dispatch({ type: "SET_FINISH_DRAWING" });
    dispatch({ type: "SET_RESULT" });

    const canvasImage = canvasRef.current?.toDataURL("image/png");
    dispatch({
      type: "SET_CANVAS_IMG",
      payload: canvasImage || "",
    });
  };

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

  const handleClick = () => {
    if (isDrawing) {
      stopDrawing();
    }
  };

  const handleMouseUp = (e: MouseEvent) => {
    if (isDrawing) {
      e.preventDefault();
      e.stopPropagation();
      stopDrawing();
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDrawing) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setUserPoints((prevPoints) => [...prevPoints, { x, y }]);

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const rc = rough.canvas(canvas);

    ctx.clearRect(0, 0, canvas.width, canvas.height);

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
  };

  return {
    canvasRef,
    isDrawing,
    imgPath: imgPaths[stage],
    startDrawing,
    handleClick,
    handleMouseDown,
    handleMouseUp,
    handleMouseMove,
  };
}
