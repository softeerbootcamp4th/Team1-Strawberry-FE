import { useNavigate } from "react-router-dom";
import { useGlobalDispatch } from "./useGlobalDispatch";
import { useGlobalState } from "./useGlobalState";

/**  Login 유효시 callback 함수 실행, 유효하지 않으면 Login Modal 띄우기 **/
export function useCheckLogin(): (callback: () => void) => void {
  const navigate = useNavigate();
  const state = useGlobalState();
  const dispatch = useGlobalDispatch();

  return (callback: () => void) => {
    if (state.isLogin) {
      callback();
    } else {
      dispatch?.({
        type: "OPEN_MODAL",
        modalCategory: "TWO_BUTTON",
        modalProps: {
          info: "로그인 후 이용 가능한 서비스입니다.\n로그인하시겠습니까?",
          whiteBtnContent: "취소",
          primaryBtnContent: "확인",
          onWhiteBtnClick: () => dispatch({ type: "CLOSE_MODAL" }),
          onPrimaryBtnClick: () => {
            dispatch({ type: "CLOSE_MODAL" });
            navigate("/login");
          },
        },
      });
    }
  };
}
