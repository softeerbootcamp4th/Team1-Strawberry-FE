import { useQuery } from "react-query";
import { useFetch } from "../../../../data/config/useFetch";
import { useQuizPlayState } from "../useQuizPlayState";

export function useQuizPlayQuery() {
  const { subEventId } = useQuizPlayState();

  const getQuizInfo = useFetch({
    url: "firstcome/quiz/info",
    method: "GET",
    queryParams: {
      subEventId: String(subEventId),
    },
  });

  const query = useQuery({
    queryKey: ["quizInfo"],
    queryFn: getQuizInfo,
    enabled: !!subEventId,
  });

  return query;
}
