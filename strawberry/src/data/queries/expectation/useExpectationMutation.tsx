import { useMutation, useQueryClient } from "react-query";

import network from "../../config/network";

interface UseExpectationMutationBodyType {
  comment: string;
}

export function useExpectationMutation() {
  const queryClient = useQueryClient();

  const postExpectation = async (body: UseExpectationMutationBodyType) => {
    return await network.post<void>("expectation", body);
  };

  const mutation = useMutation({
    mutationFn: postExpectation,
    onSuccess: () => {
      queryClient.invalidateQueries("eventUserInfo");
      queryClient.invalidateQueries("drawingFinish");
    },
  });

  return mutation;
}
