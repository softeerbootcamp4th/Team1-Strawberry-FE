import styled from "styled-components";

interface SubmitButtonProps {
  onClick: () => void;
}

function SubmitButton({ onClick }: SubmitButtonProps) {
  return <StyledButton onClick={onClick}>등록</StyledButton>;
}

export default SubmitButton;

const StyledButton = styled.button`
  display: flex;
  height: 96px;
  padding: 36px 32.5px;
  align-items: center;
  border-radius: ${({ theme }) => theme.Border.Radius6};
  background-color: ${({ theme }) => theme.Color.Primary.normal};
  color: ${({ theme }) => theme.Color.TextIcon.reverse};
  box-sizing: border-box;
  ${({ theme }) => theme.Typography.Body1Regular}
`;
