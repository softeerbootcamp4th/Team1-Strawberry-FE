import { useMutation } from "react-query";

import network from "../../config/network";

import { QuizWaiting } from "../../entities/QuizWaiting";

export interface UseQuizWaitingMutationBodyType {
  subEventId: number;
}

export function useQuizPlayMutation() {
  const postQuizWaiting = async ({
    body,
  }: {
    body: UseQuizWaitingMutationBodyType;
  }) => {
    return await network.post<QuizWaiting>("firstcome/waiting", body);
  };

  const mutation = useMutation({
    mutationFn: postQuizWaiting,
  });

  return mutation;
}
