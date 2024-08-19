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
    retry: 0,
    onError: () => {
      alert("잘못된 접근입니다.");
      location.href = `${window.location.origin}/quiz`;
    },
  });

  return query;
}
