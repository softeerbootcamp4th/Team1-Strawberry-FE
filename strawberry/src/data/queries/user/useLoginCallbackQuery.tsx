import { useQuery } from "react-query";

import network from "../../config/network";
import { Oauth } from "../../entities/Oauth";

import { CustomError } from "../../config/customError";
import { useNavigate } from "react-router-dom";
import useDuplicatedSignUpModal from "../../../pages/login/hooks/useDuplicatedSignUpModal";

export function useLoginCallbackQuery(type: string, code: string) {
  const navigate = useNavigate();
  const showModal = useDuplicatedSignUpModal();

  const getLoginCallback = async () => {
    return network.get<Oauth>(`oauth2/${type}/callback`, {
      queryParams: {
        code: code,
        state: type,
      },
    });
  };

  const query = useQuery<Oauth, CustomError>({
    queryKey: ["oauth"],
    queryFn: getLoginCallback,
    retry: 0,
    onError(err) {
      if (err.status === 409) {
        navigate("/login");
        showModal();
      } else {
        alert(err.message);
      }
    },
  });

  return query;
}
