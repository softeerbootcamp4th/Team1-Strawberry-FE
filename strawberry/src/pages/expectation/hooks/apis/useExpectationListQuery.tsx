import { useQuery } from "react-query";

import { useFetch } from "../../../../data/config/useFetch";

import { useExpectationState } from "../useExpectationState";

export interface ExpectationListProps {
  name: string;
  comment: string;
}

export function useExpectationListQuery() {
  const getExpectationList = useFetch({
    url: "expectation/page",
    method: "GET",
    queryParams: {
      pageSequence: String(useExpectationState().nowPage - 1),
    },
  });

  const query = useQuery({
    queryKey: ["expecationList"],
    queryFn: getExpectationList,
  });

  return query;
}
