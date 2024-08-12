import styled from "styled-components";
import TwoButtonModal from "./TwoButtonModal";
import OneButtonModal from "./OneButtonModal";
import { useGlobalState } from "../../../../core/hooks/useGlobalState";

export const Modal = () => {
  const { isModalOpen, modalCategory } = useGlobalState();

  return (
    <>
      {isModalOpen && (
        <ModalBackground>
          <ModalWrapper>
            {/* 모달 구현 후 밑에 배치 */}
            {modalCategory === "TWO_BUTTON" && <TwoButtonModal />}
            {modalCategory === "ONE_BUTTON" && <OneButtonModal />}
          </ModalWrapper>
        </ModalBackground>
      )}
    </>
  );
};

const ModalBackground = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 10000;
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
