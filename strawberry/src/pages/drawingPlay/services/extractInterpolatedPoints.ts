import { Point } from "../models";

import { calculateAverageDistance } from "./calculateAverageDistance";
import { interpolatePoints } from "./interpolatePoints";

export const extractInterpolatedPoints = (userPoints: Point[]) => {
  let interpolatedPoints: Point[] = [];
  if (userPoints.length > 1) {
    const firstPoint = userPoints[0];
    const lastPoint = userPoints[userPoints.length - 1];
    const avgDist = calculateAverageDistance(userPoints);
    interpolatedPoints = interpolatePoints(lastPoint, firstPoint, avgDist);
  }
  return interpolatedPoints;
};
