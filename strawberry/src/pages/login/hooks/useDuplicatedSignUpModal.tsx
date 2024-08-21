import { useGlobalDispatch } from "../../../core/hooks/useGlobalDispatch";

function useDuplicatedSignUpModal() {
  const dispatch = useGlobalDispatch();

  return () =>
    dispatch?.({
      type: "OPEN_MODAL",
      modalCategory: "ONE_BUTTON",
      modalProps: {
        info: "이미 가입한 이력이 있습니다.",
        primaryBtnContent: "확인",
      },
    });
}

export default useDuplicatedSignUpModal;
