import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useLoginCallbackQuery from "./useLoginCallbackQuery";
import { useGlobalDispatch } from "../../../core/hooks/useGlobalDispatch";

export function useHandleLoginRedirect() {
  const navigate = useNavigate();

  const queryParams = new URLSearchParams(window.location.search);
  const type = queryParams.get("state") || "";
  const code = queryParams.get("code") || "";

  const dispatch = useGlobalDispatch();
  const { data, error } = useLoginCallbackQuery(type, code);

  useEffect(() => {
    if (data) {
      const { user, token } = data.data;

      localStorage.setItem("accessToken", token.accessToken);
      dispatch?.({ type: "SET_LOGIN", status: true });

      navigate("/");
    }

    if (error) {
      console.error("로그인 처리 중 에러 발생:", error);
    }
  }, [data, error, navigate]);
}
