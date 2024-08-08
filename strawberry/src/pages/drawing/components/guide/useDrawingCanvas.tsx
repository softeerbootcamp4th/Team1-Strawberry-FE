import { useRef, useState, useEffect } from "react";

export const useDrawingCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [userPoints, setUserPoints] = useState<{ x: number; y: number }[]>([]);
  const [timeLeft, setTimeLeft] = useState(3); // Time limit set to 3 seconds
  const [lives, setLives] = useState(1); // Only one attempt allowed
  const [maxAccuracy, setMaxAccuracy] = useState(0);
  const [drawing, setDrawing] = useState(false);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [gameOver, setGameOver] = useState(false); // To handle game over state

  const scaleFactor = 0.5; // Scale factor for the star size

  const starPoints = [
    { x: 200, y: 50 },
    { x: 240, y: 150 },
    { x: 350, y: 150 },
    { x: 260, y: 210 },
    { x: 300, y: 320 },
    { x: 200, y: 260 },
    { x: 100, y: 320 },
    { x: 140, y: 210 },
    { x: 50, y: 150 },
    { x: 160, y: 150 },
  ];

  const scaledStarPoints = starPoints.map((point) => ({
    x: point.x * scaleFactor,
    y: point.y * scaleFactor,
  }));

  const drawStar = (
    points: { x: number; y: number }[],
    ctx: CanvasRenderingContext2D,
    color = "black",
  ) => {
    ctx.strokeStyle = color;
    const patternCanvas = document.createElement("canvas");
    patternCanvas.width = 20; // Adjusted size for pattern
    patternCanvas.height = 20; // Adjusted size for pattern
    const patternCtx = patternCanvas.getContext("2d");

    if (!patternCtx) return;

    patternCtx.fillStyle = "black";
    patternCtx.fillRect(0, 0, 10, 20); // Adjust pattern size
    patternCtx.fillRect(10, 10, 10, 10); // Adjust pattern size

    const pattern = ctx.createPattern(patternCanvas, "repeat");
    if (!pattern) return;

    ctx.strokeStyle = pattern;
    ctx.lineWidth = 3; // Adjusted line width

    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);
    for (let i = 1; i < points.length; i++) {
      ctx.lineTo(points[i].x, points[i].y);
    }
    ctx.closePath();
    ctx.stroke();
  };

  const calculateAccuracy = (
    userPoints: { x: number; y: number }[],
    starPoints: { x: number; y: number }[],
    canvas: HTMLCanvasElement,
  ) => {
    if (userPoints.length === 0) return 0;
    let totalDistance = 0;

    for (const sp of starPoints) {
      let minDistance = Infinity;
      for (const up of userPoints) {
        const dx = up.x - sp.x;
        const dy = up.y - sp.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < minDistance) {
          minDistance = distance;
        }
      }
      totalDistance += minDistance;
    }

    const maxDistance = canvas.width / 16;
    const accuracy =
      ((maxDistance - totalDistance / starPoints.length) / maxDistance) * 100;
    return accuracy;
  };

  const startDrawing = () => {
    if (gameOver) return; // Prevent starting a new game after it's over
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    setDrawing(true);
    setUserPoints([]);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawStar(scaledStarPoints, ctx); // Draw scaled star points
    setTimeLeft(3); // Reset time to 3 seconds
    setStartTime(Date.now());
    requestAnimationFrame(updateTimer);
  };

  const stopDrawing = (ctx: CanvasRenderingContext2D) => {
    setDrawing(false);
    const canvas = canvasRef.current;
    if (!canvas) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawStar(scaledStarPoints, ctx); // Redraw the star

    const accuracy = calculateAccuracy(userPoints, scaledStarPoints, canvas);
    if (accuracy > maxAccuracy) {
      setMaxAccuracy(accuracy);
    }

    setGameOver(true); // End the game
  };

  const handleMouseMove = (event: MouseEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;

    // Calculate canvas coordinates
    const x = (event.clientX - rect.left) * scaleX;
    const y = (event.clientY - rect.top) * scaleY;

    const ctx = canvas.getContext("2d");
    if (!ctx || !drawing) return;

    setUserPoints((prev) => {
      if (
        prev.length === 0 ||
        x !== prev[prev.length - 1].x ||
        y !== prev[prev.length - 1].y
      ) {
        // Only update points if they are different from the last point
        return [...prev, { x, y }];
      }
      return prev;
    });

    if (userPoints.length === 0) {
      ctx.beginPath();
      ctx.moveTo(x, y);
    } else {
      ctx.lineTo(x, y);
    }
    ctx.stroke();
  };

  const handleMouseUp = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (drawing && ctx) {
      stopDrawing(ctx);
    }
  };

  const updateTimer = () => {
    if (!startTime) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const currentTime = Date.now();
    const elapsed = (currentTime - startTime) / 1000;
    let remaining = 3 - elapsed; // Time limit set to 3 seconds

    if (remaining < 0) {
      remaining = 0;
      stopDrawing(ctx);
    }

    setTimeLeft(parseFloat(remaining.toFixed(1)));

    if (remaining > 0) {
      requestAnimationFrame(updateTimer);
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    drawStar(scaledStarPoints, ctx); // Use scaled star points

    const onMouseDown = () => startDrawing();
    const onMouseUp = () => handleMouseUp();
    const onMouseMove = (event: MouseEvent) => handleMouseMove(event);

    canvas.addEventListener("mousedown", onMouseDown);
    canvas.addEventListener("mouseup", onMouseUp);
    canvas.addEventListener("mousemove", onMouseMove);

    return () => {
      canvas.removeEventListener("mousedown", onMouseDown);
      canvas.removeEventListener("mouseup", onMouseUp);
      canvas.removeEventListener("mousemove", onMouseMove);
    };
  }, [drawing, timeLeft, startTime, maxAccuracy, gameOver]);

  return {
    canvasRef,
    timeLeft,
    lives,
    maxAccuracy,
    startDrawing,
    handleMouseUp,
    handleMouseMove,
    gameOver, // Add gameOver to the return values
  };
};
