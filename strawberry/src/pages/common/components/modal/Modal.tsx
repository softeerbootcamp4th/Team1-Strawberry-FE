import { MouseEvent, useContext, useRef } from "react";
import styled from "styled-components";
import QuizRewardModal from "./QuizRewardModal";
import {
  GlobalStateContext,
  GlobalDispatchContext,
  GlobalState,
} from "../../../../core/contexts/globalContext";

type CustomMouseEvent = MouseEvent<HTMLElement>;

const ModalBackground = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 10;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const ModalWrapper = styled.div`
  margin-top: 200px;
  width: 527px;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.Color.Common.white};
  ${({ theme }) => theme.Shadow.Strong}
  padding: 40px 36px 24px 36px;
  height: fit-content;
`;

export const Modal = () => {
  const { isModalOpen, modalType } = useContext<GlobalState | undefined>(
    GlobalStateContext,
  );
  const globalDispatch = useContext(GlobalDispatchContext);

  const backgroundRef = useRef<HTMLDivElement>(null);

  const clickBackground = (e: CustomMouseEvent) => {
    if (e.target === backgroundRef.current) {
      globalDispatch?.({ type: "CLOSE_MODAL" });
    }
  };

  return (
    <>
      {isModalOpen && (
        <ModalBackground ref={backgroundRef} onClick={clickBackground}>
          <ModalWrapper>
            {/* 모달 구현 후 밑에 배치 */}
            {modalType === "quizReward" && <QuizRewardModal />}
          </ModalWrapper>
        </ModalBackground>
      )}
    </>
  );
};
