import { useQuery } from "react-query";

import network from "../../config/network";
import { ExpectationLand } from "../../entities/ExpectationLand";

export function useExpectationPageQuery() {
  const getExpectationPage = async () => {
    return await network.get<ExpectationLand>("expectation/land");
  };

  const query = useQuery<ExpectationLand, Error>({
    queryKey: ["expectationPage"],
    queryFn: getExpectationPage,
    refetchOnWindowFocus: true,
  });

  return query;
}
