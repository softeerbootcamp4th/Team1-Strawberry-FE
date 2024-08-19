import { useState, useRef, useEffect } from "react";
import rough from "roughjs/bundled/rough.esm";

import { useDrawingPlayMutation } from "../../../data/queries/drawing/useDrawingPlayMutation";
import { LineStyle, Point } from "../models";

import { useDrawingPlayDispatch } from "./useDrawingPlayDispatch";
import { useDrawingPlayState } from "./useDrawingPlayState";

import { extractInterpolatedPoints } from "../services/extractInterpolatedPoints";
import { useParams } from "react-router-dom";

const customLineStyle: LineStyle = {
  stroke: "#46474C",
  lineWidth: 2,
  lineStyle: "round",
  roughness: 0.5,
  bowing: 1,
  strokeWidth: 5,
};

export function useDrawingCanvas(timeLimit = 7) {
  const { subEventId } = useParams();
  const [userPoints, setUserPoints] = useState<Point[]>([]);
  const [timer, setTimer] = useState<number>(timeLimit);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const userPointsRef = useRef<Point[]>([]);
  const timeoutRef = useRef<number | null>(null);
  const intervalRef = useRef<number | null>(null);

  const {
    mutate: postPoints,
    isSuccess,
    data: drawingResult,
  } = useDrawingPlayMutation();

  const { stage, isDrawing, drawingInfo } = useDrawingPlayState();
  const dispatch = useDrawingPlayDispatch();

  // 캔버스 크기 설정
  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.width = 940;
      canvas.height = 500;
    }
  }, []);

  // 시간이 다 되었을 때 종료 조건 설정
  useEffect(() => {
    if (timer === 0 && isDrawing) {
      handleFinish();
      clearInterval(intervalRef.current as number);
    }
  }, [timer, isDrawing]);

  // 점 post 성공 시 다음 설정 세팅
  useEffect(() => {
    if (isSuccess) {
      dispatch({ type: "SET_FINISH_DRAWING" });
      dispatch({ type: "SET_RESULT" });
      dispatch({ type: "SET_DRAWING_RESULT", payload: drawingResult });

      const canvasImage = canvasRef.current?.toDataURL("image/png");
      dispatch({
        type: "SET_CANVAS_IMG",
        payload: canvasImage || "",
      });
    }
  }, [isSuccess]);

  // 드로잉 시작
  const startDrawing = () => {
    dispatch({ type: "SET_START_DRAWING" });
    setUserPoints([]);
    userPointsRef.current = [];
    setTimer(timeLimit);

    intervalRef.current = setInterval(() => {
      setTimer((prev) => {
        if (prev === 1) {
          clearInterval(intervalRef.current as number);
        }
        return prev - 1;
      });
    }, 1000);
  };

  const handleArrive = () => {
    if (isDrawing) {
      const interpolatedPoints = extractInterpolatedPoints(userPoints);

      setUserPoints((prevPoints) => [...prevPoints, ...interpolatedPoints]);
      postPoints({
        positions: userPoints,
        subEventId: subEventId,
        sequence: stage,
      });

      clearAll();
    }
  };

  const handleFinish = () => {
    if (isDrawing) {
      const interpolatedPoints = extractInterpolatedPoints(userPoints);

      postPoints({
        positions: [...userPoints, ...interpolatedPoints],
        subEventId: subEventId,
        sequence: stage,
      });

      clearAll();
    }
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

  const clearAll = () => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    if (timeoutRef.current !== null) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  return {
    canvasRef,
    isDrawing,
    imgPath: drawingInfo?.gameInfos[stage - 1].contourImgUrl,
    pointX: drawingInfo?.gameInfos[stage - 1].startPosition.x ?? 0,
    pointY: drawingInfo?.gameInfos[stage - 1].startPosition.y ?? 0,
    startDrawing,
    handleMouseDown,
    handleFinish,
    handleMouseMove,
    handleArrive,
  };
}
