import { useQuery } from "react-query";

import network from "../../config/network";
import { CustomError } from "../../config/customError";

import { QuizWaitingRemaining } from "../../entities/QuizWaitingRemaining";

interface UseQuizWaitingQueryProps {
  subEventId: number | undefined;
  token: string | undefined;
}

export function useQuizWaitingQuery({
  subEventId,
  token,
}: UseQuizWaitingQueryProps) {
  const getQuizWaiting = async () => {
    return network.get<QuizWaitingRemaining>("firstcome/waiting", {
      queryParams: {
        token: token,
        subEventId: subEventId,
      },
    });
  };

  const query = useQuery<QuizWaitingRemaining, CustomError>({
    queryKey: ["quizWaiting"],
    queryFn: getQuizWaiting,
    staleTime: 1000,
    enabled: !!subEventId && !!token,
  });

  return query;
}
