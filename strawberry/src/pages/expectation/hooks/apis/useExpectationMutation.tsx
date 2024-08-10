import { useMutation } from "react-query";

import { useFetch } from "../../../../data/config/useFetch";

interface UseExpectationMutationBodyType {
  comment: string;
}

export function useExpectationMutation() {
  const fetchFn = useFetch({
    url: "expectation",
    method: "POST",
  });

  const mutation = useMutation({
    mutationFn: ({ body }: { body: UseExpectationMutationBodyType }) =>
      fetchFn({ body: body }),
    onSuccess: () => location.reload(),
  });

  return mutation;
}

export default useExpectationMutation;
