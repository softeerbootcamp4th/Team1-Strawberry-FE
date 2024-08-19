import { Point } from "../models";

export const calculateAverageDistance = (points: Point[]): number => {
  if (points.length < 2) return 0;
  let totalDistance = 0;
  for (let i = 0; i < points.length - 1; i++) {
    const dx = points[i + 1].x - points[i].x;
    const dy = points[i + 1].y - points[i].y;
    totalDistance += Math.sqrt(dx * dx + dy * dy);
  }
  return totalDistance / (points.length - 1);
};
