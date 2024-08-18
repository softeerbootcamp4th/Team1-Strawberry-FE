import { useQuery } from "react-query";

import network from "../../config/network";
import { Landing } from "../../entities/Landing";

export function useLandingQuery() {
  const getLanding = async () => {
    return network.get<Landing>("land");
  };

  const query = useQuery<Landing, Error>({
    queryKey: ["landing"],
    queryFn: getLanding,
  });

  return query;
}
