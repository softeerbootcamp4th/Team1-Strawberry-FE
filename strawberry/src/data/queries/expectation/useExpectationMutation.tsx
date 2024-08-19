import { useMutation } from "react-query";

import network from "../../config/network";

interface UseExpectationMutationBodyType {
  comment: string;
}

export function useExpectationMutation() {
  const postExpectation = async (body: UseExpectationMutationBodyType) => {
    return await network.post<void>("expectation", body);
  };

  const mutation = useMutation({
    mutationFn: postExpectation,
  });

  return mutation;
}
