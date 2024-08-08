import { useQuery } from "react-query";
import { useFetch } from "../../../data/config/useFetch";

interface User {
  email: string;
  name: string;
  birthdate: string;
}

interface Token {
  accessToken: string;
}
interface Oauth {
  user: User;
  token: Token;
}

export function useLoginCallbackQuery(type: string, code: string) {
  const getLoginCallback = useFetch<Oauth>({
    url: `oauth2/${type}/callback`,
    method: "GET",
    queryParams: {
      code: code,
      state: type,
    },
  });

  const query = useQuery<Oauth, Error>({
    queryKey: ["oauth"],
    queryFn: getLoginCallback,
  });

  return query;
}

export default useLoginCallbackQuery;
