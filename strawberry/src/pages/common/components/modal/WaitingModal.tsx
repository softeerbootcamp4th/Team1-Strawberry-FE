import { theme, Wrapper, Label } from "../../../../core/design_system";

import { useGlobalDispatch } from "../../../../core/hooks/useGlobalDispatch";
import { useGlobalState } from "../../../../core/hooks/useGlobalState";

import ModalButton from "../buttons/ModalButton";
import SubmitProgress from "../progress/SubmitProgress";

function WaitingModal() {
  const globalDispatch = useGlobalDispatch();
  const { waitingModalProps } = useGlobalState();

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
          퀴즈 이벤트에 입장 중입니다.
        </Label>
        <Wrapper $margin="24px 0 0 0">
          <SubmitProgress
            remaining={waitingModalProps.remaining - 1}
            total={waitingModalProps.total}
          />
        </Wrapper>
        <Label
          width="100%"
          $margin="24px 0 0 0"
          $token="Heading2Regular"
          color={theme.Color.TextIcon.sub}
          $textalign="center"
        >
          {`현재 고객님의 앞에 ${waitingModalProps.remaining - 1}명이 기다리고 있습니다!\n새로고침 하실 경우 대기열이 새로 시작됩니다.`}
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

export default WaitingModal;
