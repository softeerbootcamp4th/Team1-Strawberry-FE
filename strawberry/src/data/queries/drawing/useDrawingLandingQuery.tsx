import { useQuery } from "react-query";

import network from "../../config/network";
import { DrawingLanding } from "../../entities/DrawingLanding";

export function useDrawingLandingQuery() {
  const fetchDrawingLanding = async () => {
    return await network.get<DrawingLanding>("lottery/drawing/land");
  };

  const query = useQuery<DrawingLanding, Error>({
    queryKey: ["drawingLand"],
    queryFn: fetchDrawingLanding,
  });

  return query;
}
