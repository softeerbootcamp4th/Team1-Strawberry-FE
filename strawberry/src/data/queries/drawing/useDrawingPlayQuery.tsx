import { useQuery } from "react-query";

import network from "../../config/network";

import { DrawingPlay } from "../../entities/DrawingPlay";

interface UseDrawingPlayQueryProps {
  subEventId: number | undefined;
  eventPlayType: "NORMAL" | "EXPECTATION" | "SHARED" | undefined;
}

export function useDrawingPlayQuery({
  subEventId,
  eventPlayType,
}: UseDrawingPlayQueryProps) {
  const getDrawingInfo = async () => {
    return network.get<DrawingPlay>("lottery/drawing", {
      queryParams: {
        subEventId: subEventId,
        eventPlayType: eventPlayType,
      },
    });
  };

  const query = useQuery<DrawingPlay, Error>({
    queryKey: ["drawingInfo"],
    queryFn: getDrawingInfo,
  });

  return query;
}