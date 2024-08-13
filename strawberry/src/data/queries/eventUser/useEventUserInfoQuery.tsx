import { useQuery } from "react-query";

import network from "../../config/network";
import { EventUserInfo } from "../../entities/EventUserInfo";

export function useEventUserInfoQuery() {
  const getEventUserInfo = async () => {
    return await network.get<EventUserInfo>("eventuser/info", {
      queryParams: {
        subEventId: "4",
      },
    });
  };

  const query = useQuery<EventUserInfo, Error>({
    queryKey: ["eventUserInfo"],
    queryFn: getEventUserInfo,
  });

  return query;
}
