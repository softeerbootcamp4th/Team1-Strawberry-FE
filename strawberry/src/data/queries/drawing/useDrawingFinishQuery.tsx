import { useQuery } from "react-query";

import network from "../../config/network";

import { DrawingFinish } from "../../entities/DrawingFinish";

interface UseDrawingFinishQueryProps {
  subEventId: string | undefined;
}

export function useDrawingFinishQuery({
  subEventId,
}: UseDrawingFinishQueryProps) {
  const getDrawingFinish = async () => {
    return network.get<DrawingFinish>("lottery/drawing/score", {
      queryParams: {
        subEventId,
      },
    });
  };

  const query = useQuery<DrawingFinish, Error>({
    queryKey: ["drawingFinish"],
    queryFn: getDrawingFinish,
  });

  return query;
}
