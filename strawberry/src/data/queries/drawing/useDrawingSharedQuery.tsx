import { useQuery, useQueryClient } from "react-query";

import network from "../../config/network";
import { DrawingShared } from "../../entities/DrawingShared";

interface UseDrawingRankQueryProps {
  subEventId: string | undefined;
}

export function useDrawingSharedQuery({
  subEventId,
}: UseDrawingRankQueryProps) {
  const queryClient = useQueryClient();

  const getDrawingShared = async () => {
    return await network.get<DrawingShared>("eventuser/shared-url", {
      queryParams: { subEventId: subEventId },
    });
  };

  const query = useQuery<DrawingShared, Error>({
    queryKey: ["drawingShared"],
    queryFn: getDrawingShared,
    enabled: false,
    staleTime: 4000,
    onSuccess: () => {
      queryClient.invalidateQueries("eventUserInfo");
      queryClient.invalidateQueries("drawingFinish");
    },
  });

  return query;
}
