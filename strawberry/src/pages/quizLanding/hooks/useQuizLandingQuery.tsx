import { useQuery } from "react-query";

import { useFetch } from "../../../data/config/useFetch";

import { QuizLanding } from "../models";

export function useQuizLandingQuery() {
  const getQuizLanding = useFetch<QuizLanding>({
    url: `quiz/land`,
    method: "GET",
    queryParams: {
      eventId: "1",
    },
  });

  const query = useQuery<QuizLanding, Error>({
    queryKey: ["quizLand"],
    queryFn: getQuizLanding,
  });

  return query;
}
