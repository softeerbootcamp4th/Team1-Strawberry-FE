import { useMutation } from "react-query";

import { useFetch } from "../../../../data/config/useFetch";
import usePrizeModal from "../usePrizeModal";

interface UseQuizPlayMutationBodyType {
  answer: string;
  subEventId: number;
}

export function useQuizPlayMutation() {
  const prizeModal = usePrizeModal();

  const fetchFn = useFetch({
    url: "firstcome/quiz",
    method: "POST",
  });

  const mutation = useMutation({
    mutationFn: ({ body }: { body: UseQuizPlayMutationBodyType }) =>
      fetchFn({ body: body }),
    onSuccess: (data) => {
      if (data) {
        prizeModal({
          isCorrect: data?.isCorrect,
          isWinner: data?.isWinner,
          prizeImgUrl: data?.prizeImgUrl,
        });
      }
    },
  });

  return mutation;
}
