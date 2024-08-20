import styled from "styled-components";

import useModal from "../../hooks/useModal";

import TwoButtonModal from "./TwoButtonModal";
import OneButtonModal from "./OneButtonModal";
import ProgressModal from "./ProgressModal";

export const Modal = () => {
  const { isModalOpen, modalCategory } = useModal();

  return (
    <>
      {isModalOpen && (
        <ModalBackground>
          <ModalWrapper>
            {modalCategory === "TWO_BUTTON" && <TwoButtonModal />}
            {modalCategory === "ONE_BUTTON" && <OneButtonModal />}
            {modalCategory === "PROGRESS" && <ProgressModal />}
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
  left: 0;
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
