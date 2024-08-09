import { useQuery } from "react-query";
import { useFetch } from "../../../../data/config/useFetch";

export function useExpectationPageQuery() {
  const getExpectationPage = useFetch({
    url: "expectation/land",
    method: "GET",
  });

  const query = useQuery({
    queryKey: ["expectationPage"],
    queryFn: getExpectationPage,
  });

  return query;
}
