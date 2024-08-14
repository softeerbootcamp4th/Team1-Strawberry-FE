import { useState, useRef, useEffect } from "react";

type Point = { x: number; y: number };
type LineStyle = {
  stroke: string;
  lineWidth: number;
  strokeWidth: number;
};

const customLineStyle: LineStyle = {
  stroke: "#46474C",
  lineWidth: 2,
  strokeWidth: 5,
};

export function useDrawingPractice(timeLimit: number) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [userPoints, setUserPoints] = useState<Point[]>([]);
  const [timer, setTimer] = useState(timeLimit);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [score, setScore] = useState<number | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const canvasWidth = 400;
  const canvasHeight = 400;
  const arcRadius = 100;

  const drawCircle = (ctx: CanvasRenderingContext2D, radius: number) => {
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    ctx.beginPath();
    ctx.arc(canvasWidth / 2, canvasHeight / 2, radius, 0, Math.PI * 2);
    ctx.strokeStyle = "#000000";
    ctx.lineWidth = 2;
    ctx.stroke();
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (ctx) {
      ctx.clearRect(0, 0, canvasWidth, canvasHeight);
      drawCircle(ctx, arcRadius);
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.width = canvasWidth;
      canvas.height = canvasHeight;
      const ctx = canvas.getContext("2d");
      if (ctx) {
        drawCircle(ctx, arcRadius);
      }
    }
  }, []);

  useEffect(() => {
    if (timer <= 0) {
      stopDrawing();
      calculateScore(); // Calculate score when the timer ends
    }
  }, [timer]);

  const calculateDistance = (point: Point) => {
    const circleCenter = { x: canvasWidth / 2, y: canvasHeight / 2 };
    const distanceFromCenter = Math.sqrt(
      Math.pow(point.x - circleCenter.x, 2) +
      Math.pow(point.y - circleCenter.y, 2),
    );
    return Math.abs(distanceFromCenter - arcRadius); // Distance from the circumference
  };

  const calculateScore = () => {
    if (userPoints.length === 0) return;
    const totalDistance = userPoints.reduce((sum, point) => {
      return sum + calculateDistance(point);
    }, 0);
    const maxScore = 100;
    const penalty = totalDistance / userPoints.length; // Average distance as penalty
    const finalScore = Math.max(0, maxScore - penalty);
    setScore(finalScore);
  };

  const startDrawing = () => {
    clearCanvas();
    setUserPoints([]);
    setTimer(timeLimit);
    setIsDrawing(true);
    setIsButtonDisabled(true);
    setScore(null); // Reset score

    timeoutRef.current = setTimeout(() => {
      setTimer(0); // 타이머를 0으로 설정
    }, timeLimit * 1000);

    intervalRef.current = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer <= 1) {
          clearInterval(intervalRef.current!);
          return 0;
        }
        return prevTimer - 1;
      });
    }, 1000);
  };

  const stopDrawing = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (intervalRef.current) clearInterval(intervalRef.current);
    setIsDrawing(false);
    setIsButtonDisabled(false);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!isDrawing) {
      startDrawing();
    }
    const rect = canvasRef.current?.getBoundingClientRect();
    if (rect) {
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setUserPoints([{ x, y }]);
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

      if (ctx) {
        drawCircle(ctx, arcRadius);
        ctx.beginPath();
        ctx.strokeStyle = customLineStyle.stroke;
        ctx.lineWidth = customLineStyle.strokeWidth;
        ctx.lineJoin = "round";
        ctx.lineCap = "round";

        if (userPoints.length > 1) {
          ctx.moveTo(userPoints[0].x, userPoints[0].y);
          for (let i = 1; i < userPoints.length; i++) {
            ctx.lineTo(userPoints[i].x, userPoints[i].y);
          }
          ctx.stroke();
        }
      }
    }
  };

  const handleMouseUp = (e: MouseEvent) => {
    if (isDrawing) {
      e.preventDefault();
      e.stopPropagation();
      setTimer(0);
    }
  };

  return {
    canvasRef,
    isDrawing,
    startDrawing,
    stopDrawing,
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
    canvasWidth,
    canvasHeight,
    arcRadius,
    timer,
    isButtonDisabled,
    score, // Return score
  };
}
