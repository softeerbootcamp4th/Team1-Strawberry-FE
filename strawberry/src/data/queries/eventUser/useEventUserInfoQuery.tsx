import { useQuery } from "react-query";

import network from "../../config/network";
import { EventUserInfo } from "../../entities/EventUserInfo";
import { useGlobalState } from "../../../core/hooks/useGlobalState";

import { CustomError } from "../../config/customError";

interface UseEventUserInfoQueryProps {
  subEventId: number | undefined;
}

export function useEventUserInfoQuery({
  subEventId,
}: UseEventUserInfoQueryProps) {
  const { isLogin } = useGlobalState();

  const getEventUserInfo = async () => {
    return await network.get<EventUserInfo>("eventuser/info", {
      queryParams: {
        subEventId: subEventId,
      },
    });
  };

  const query = useQuery<EventUserInfo, CustomError>({
    queryKey: ["eventUserInfo"],
    queryFn: getEventUserInfo,
    enabled: !!isLogin && !!subEventId,
    onError(err) {
      if (![401, 404].includes(err.status ?? 0)) {
        alert(err.message);
      }
    },
  });

  return query;
}
