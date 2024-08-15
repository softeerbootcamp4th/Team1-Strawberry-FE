import { useMutation } from "react-query";

import network from "../../config/network";

import { DrawingResult } from "../../entities/DrawingResult";

interface UseDrawingPlayMutationBody {
  positions: { x: number; y: number }[];
  subEventId: number;
  sequence: number;
}

export function useDrawingPlayMutation() {
  const postDrawingPlay = async (body: UseDrawingPlayMutationBody) => {
    return network.post<DrawingResult>("lottery/drawing", body, {});
  };

  const mutation = useMutation({
    mutationFn: postDrawingPlay,
  });

  return mutation;
}
