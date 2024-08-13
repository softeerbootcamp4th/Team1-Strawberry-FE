import { useQuery } from "react-query";

import network from "../../config/network";

import { QuizInfo } from "../../entities/QuizInfo";

export function useQuizPlayQuery(subEventId: string | undefined) {
  const getQuizInfo = async () => {
    return await network.get<QuizInfo>("firstcome/quiz/info", {
      queryParams: {
        subEventId: subEventId,
      },
    });
  };

  const query = useQuery<QuizInfo, Error>({
    queryKey: ["quizInfo"],
    queryFn: getQuizInfo,
    enabled: !!subEventId,
  });

  return query;
}
