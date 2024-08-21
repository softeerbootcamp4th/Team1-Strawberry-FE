import { useQuery } from "react-query";

import network from "../../config/network";
import { CustomError } from "../../config/customError";

import { ExpectationList } from "../../entities/ExpectationList";

export function useExpectationListQuery(page: number) {
  const getExpectationList = async () => {
    return await network.get<ExpectationList>("expectation/page", {
      queryParams: {
        pageSequence: String(page - 1),
      },
    });
  };

  const query = useQuery<ExpectationList, CustomError>(
    ["expectationList", page],
    getExpectationList,
    {
      enabled: page !== undefined && page > 0,
      onError(err) {
        if (err.status !== 404) {
          alert(err.message);
        }
      },
      retry: 0,
      refetchOnWindowFocus: true,
    },
  );

  return query;
}
