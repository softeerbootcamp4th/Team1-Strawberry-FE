import styled from "styled-components";
import ModalButton from "../buttons/ModalButton";
import { GlobalDispatchContext } from "../../../../core/contexts/globalContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

function QuizRewardModal() {
  const globalDispatch = useContext(GlobalDispatchContext);
  const navigate = useNavigate();

  function closeModal() {
    globalDispatch?.({ type: "CLOSE_MODAL" });
  }

  return (
    <>
      <ModalWrapper>
        <Title>축하합니다!</Title>
        <ImgWrapper>
          {/* lazy loading && 해당하는 이미지 동적으로 삽입 */}
          <img
            src="/src/assets/images/icons/coupon_coffee.svg"
            width={"100%"}
            height={"100%"}
          />
        </ImgWrapper>
        <Info>{`선착순 이벤트에 당첨되셨습니다!`}</Info>
        <Info>
          {`자세한 사항은 이벤트 안내페이지를
          확인해주세요.`}
        </Info>
        <ButtonWrapper>
          <ModalButton
            modalType="WHITE_SMALL"
            content="확인"
            onClick={closeModal}
          />
          <ModalButton
            modalType="PRIMARY_SMALL"
            content="이벤트 확인"
            onClick={() => {
              closeModal();
              navigate("/quiz");
            }}
          />
        </ButtonWrapper>
      </ModalWrapper>
    </>
  );
}

export default QuizRewardModal;

const ModalWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImgWrapper = styled.div`
  width: 100%;
  margin-top: 24px;
  margin-bottom: 24px;
`;

const Title = styled.p`
  ${({ theme }) => theme.Typography.Title1Medium};
  color: ${({ theme }) => theme.Color.Primary.normal};
`;

const Info = styled.p`
  width: 100%;
  ${({ theme }) => theme.Typography.Heading2Regular};
  color: ${({ theme }) => theme.Color.TextIcon.sub};
  text-align: center;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 48px;
`;
