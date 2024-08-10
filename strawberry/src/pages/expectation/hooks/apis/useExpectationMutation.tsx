import { useMutation } from "react-query";

import { useFetch } from "../../../../data/config/useFetch";

export interface useExpectationMutationBodyType {
  body: {
    content: string;
  };
}

export function useExpectationMutation() {
  const fetchFn = useFetch({
    url: "expectation",
    method: "POST",
  });

  const mutation = useMutation({
    mutationFn: fetchFn,
    onSuccess: () => location.reload(),
  });

  return mutation;
}

export default useExpectationMutation;
