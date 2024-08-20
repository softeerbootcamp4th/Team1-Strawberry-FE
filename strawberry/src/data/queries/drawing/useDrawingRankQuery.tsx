import { useQuery } from "react-query";

import network from "../../config/network";
import { DrawingRank } from "../../entities/DrawingRank";

interface UseDrawingRankQueryProps {
  subEventId: number | undefined;
}

export function useDrawingRankQuery({ subEventId }: UseDrawingRankQueryProps) {
  const getDrawingRank = async () => {
    return await network.get<DrawingRank[]>("lottery/drawing/rank", {
      queryParams: { subEventId: subEventId },
    });
  };

  const query = useQuery<DrawingRank[], Error>({
    queryKey: ["drawingRank"],
    queryFn: getDrawingRank,
    enabled: false,
  });

  return query;
}
