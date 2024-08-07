import { useQuery } from "react-query";
import { useFetch } from "../../../data/config/useFetch";
import { DrawingLanding } from "../models";

export function useDrawingLandingQuery() {
  const getDrawingLanding = useFetch<DrawingLanding>({
    url: "lottery/drawing/land",
    method: "GET",
    queryParams: {
      eventId: "1",
    },
  });

  const query = useQuery<DrawingLanding, Error>({
    queryKey: ["drawingLand"],
    queryFn: getDrawingLanding,
  });

  return query;
}
