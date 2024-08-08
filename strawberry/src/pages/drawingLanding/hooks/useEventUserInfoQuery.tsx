import { useQuery } from "react-query";
import { useFetch } from "../../../data/config/useFetch";
import { EventUserInfo } from "../models";

export function useEventUserInfoQuery() {
  const getEventUserInfo = useFetch<EventUserInfo>({
    url: "eventuser/info",
    method: "GET",
    queryParams: {
      subEventId: "4",
    },
  });

  const query = useQuery<EventUserInfo, Error>({
    queryKey: ["eventUserInfo"],
    queryFn: getEventUserInfo,
  });

  return query;
}
