import { useQuery } from "react-query";

import network from "../../config/network";

import { QuizInfo } from "../../entities/QuizInfo";

interface UseQuizPlayQueryProps {
  subEventId: string | undefined;
  token: string | undefined;
}

export function useQuizPlayQuery({ subEventId, token }: UseQuizPlayQueryProps) {
  const getQuizInfo = async () => {
    return await network.get<QuizInfo>("firstcome/quiz/info", {
      queryParams: {
        subEventId: subEventId,
        token: token,
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
