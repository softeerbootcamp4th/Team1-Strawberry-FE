import { Point } from "../models";

export const interpolatePoints = (
  start: Point,
  end: Point,
  avgDist: number,
): Point[] => {
  const points: Point[] = [];
  const totalDist = Math.sqrt((end.x - start.x) ** 2 + (end.y - start.y) ** 2);
  const numPoints = Math.floor(totalDist / avgDist);
  const dx = (end.x - start.x) / numPoints;
  const dy = (end.y - start.y) / numPoints;

  for (let i = 1; i <= numPoints; i++) {
    points.push({
      x: start.x + dx * i,
      y: start.y + dy * i,
    });
  }
  return points;
};
