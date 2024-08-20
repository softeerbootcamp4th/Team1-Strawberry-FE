import { theme, Wrapper, Label } from "../../../../core/design_system";

import { useGlobalDispatch } from "../../../../core/hooks/useGlobalDispatch";

import ModalButton from "../buttons/ModalButton";
import SubmitProgress from "../progress/SubmitProgress";

function ProgressModal() {
  const globalDispatch = useGlobalDispatch();

  function closeModal() {
    globalDispatch?.({ type: "CLOSE_MODAL" });
  }

  return (
    <>
      <Wrapper
        width="100%"
        display="flex"
        $flexdirection="column"
        $alignitems="center"
      >
        <Label $token="Title1Medium" color={theme.Color.Primary.normal}>
          답변을 제출하고 있습니다.
        </Label>
        <Wrapper $margin="24px 0 0 0">
          <SubmitProgress limitTime={5} />
        </Wrapper>
        <Label
          width="100%"
          $margin="24px 0 0 0"
          $token="Heading2Regular"
          color={theme.Color.TextIcon.sub}
          $textalign="center"
        >
          {
            "현재 답변을 제출하고 있습니다!\n잠시만 기다리시면 답변 제출이 완료됩니다."
          }
        </Label>
        <Wrapper
          width="100%"
          display="flex"
          $flexdirection="row"
          $justifycontent="space-between"
          $margin="48px 0 0 0"
          $gap="15px"
        >
          <ModalButton
            modalType="WHITE_LARGE"
            content="닫기"
            onClick={closeModal}
          />
        </Wrapper>
      </Wrapper>
    </>
  );
}

export default ProgressModal;
