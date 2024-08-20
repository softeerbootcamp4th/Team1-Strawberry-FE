import { useQuery } from "react-query";

import network from "../../config/network";
import { EventUserInfo } from "../../entities/EventUserInfo";
import { useGlobalState } from "../../../core/hooks/useGlobalState";

export function useEventUserInfoQuery() {
  const { isLogin } = useGlobalState();

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
    enabled: !!isLogin,
  });

  return query;
}
