import { useQuery } from "react-query";

import network from "../../config/network";
import { Shared } from "../../entities/Shared";

interface UseSharedRedirectQueryProps {
  sharedCode: string;
}

export function useSharedRedirectQuery({
  sharedCode,
}: UseSharedRedirectQueryProps) {
  const getSharedRedirect = async () => {
    {
      return network.get<Shared>(`url/:sharedCode`, {
        params: { sharedCode: sharedCode },
      });
    }
  };

  const query = useQuery<Shared, Error>({
    queryKey: ["shared"],
    queryFn: getSharedRedirect,
    enabled: !!sharedCode,
  });

  return query;
}
