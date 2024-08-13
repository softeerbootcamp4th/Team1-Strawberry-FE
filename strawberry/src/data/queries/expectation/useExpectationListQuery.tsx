import { useQuery } from "react-query";

import network from "../../config/network";
import { ExpectationList } from "../../entities/ExpectationList";

export function useExpectationListQuery(page: number) {
  const getExpectationList = async () => {
    return await network.get<ExpectationList>("expectation/page", {
      queryParams: {
        pageSequence: String(page - 1),
      },
    });
  };

  const query = useQuery<ExpectationList, Error>(
    ["expectationList", page],
    getExpectationList,
    {
      enabled: page !== undefined && page > 0,
    },
  );

  return query;
}
