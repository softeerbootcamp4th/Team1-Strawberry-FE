import { useQuery } from "react-query";
import { useFetch } from "../../../data/config/useFetch";
import { DrawingRank } from "../models/DrawingRank";

export function useDrawingRankQuery() {
  const getDrawingRank = useFetch<DrawingRank[]>({
    url: "lottery/drawing/rank",
    method: "GET",
    queryParams: {
      subEventId: "4",
    },
  });

  const query = useQuery<DrawingRank[], Error>({
    queryKey: ["drawingRank"],
    queryFn: getDrawingRank,
  });

  return query;
}
