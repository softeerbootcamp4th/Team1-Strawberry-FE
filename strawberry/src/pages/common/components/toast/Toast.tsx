import styled from "styled-components";

import useToast from "../../hooks/useToast";

function Toast() {
  const { content, isVisible, isToastOpen } = useToast();

  return (
    <>
      {isToastOpen && (
        <ToastWrapper isVisible={isVisible}>{content}</ToastWrapper>
      )}
    </>
  );
}

export default Toast;

const ToastWrapper = styled.p<{ isVisible: boolean }>`
  padding: 12px 100px;
  border-radius: ${({ theme }) => theme.Border.Radius6};
  background-color: ${({ theme }) => theme.Color.Dimmer.default};
  position: absolute;
  z-index: 1000;
  left: 50%;
  transform: translateX(-50%);
  bottom: 155px;
  ${({ theme }) => theme.Typography.Body1Regular}
  color: ${({ theme }) => theme.Color.TextIcon.reverse};
  height: fit-content;
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transition: opacity 2s ease-in-out;
`;
