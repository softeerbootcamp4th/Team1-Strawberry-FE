import { useQuery } from "react-query";

import network from "../../config/network";
import { DrawingRank } from "../../entities/DrawingRank";

export function useDrawingRankQuery() {
  const getDrawingRank = async () => {
    return await network.get<DrawingRank[]>("lottery/drawing/rank", {
      queryParams: { subEventId: "4" },
    });
  };

  const query = useQuery<DrawingRank[], Error>({
    queryKey: ["drawingRank"],
    queryFn: getDrawingRank,
  });

  return query;
}
