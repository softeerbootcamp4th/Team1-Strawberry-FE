import { useQuery } from "react-query";

import network from "../../config/network";
import { QuizLanding } from "../../entities/QuizLanding";

export function useQuizLandingQuery() {
  const getQuizLanding = async () => {
    return await network.get<QuizLanding>("firstcome/quiz/land");
  };

  const query = useQuery<QuizLanding, Error>({
    queryKey: ["quizLand"],
    queryFn: getQuizLanding,
  });

  return query;
}
