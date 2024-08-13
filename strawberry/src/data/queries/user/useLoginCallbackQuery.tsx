import { useQuery } from "react-query";

import network from "../../config/network";
import { Oauth } from "../../entities/Oauth";

export function useLoginCallbackQuery(type: string, code: string) {
  const getLoginCallback = async () => {
    return await network.get<Oauth>(`oauth2/${type}/callback`, {
      queryParams: {
        code: code,
        state: type,
      },
    });
  };

  const query = useQuery<Oauth, Error>({
    queryKey: ["oauth"],
    queryFn: getLoginCallback,
  });

  return query;
}
