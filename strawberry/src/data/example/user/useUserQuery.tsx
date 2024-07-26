import { useQuery } from "react-query";
import { useFetch } from "../../config/useFetch";

export interface User {
  id: number;
  name: string;
  email: string;
  createdAt: string;
}

export function useUserQuery() {
  const fetchUser = useFetch<User>({
    url: "/user.json",
    method: "GET",
  });

  const query = useQuery<User, Error>({
    queryKey: ["users"],
    queryFn: fetchUser,
  });

  return query;
}

export default useUserQuery;
