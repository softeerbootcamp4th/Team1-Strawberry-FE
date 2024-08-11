import { theme, Wrapper } from "../../../../core/design_system";

import useLengthValidation from "../../../expectation/hooks/useLengthValidation";

import styled from "styled-components";

function DrawingInput() {
  const { content, handleChange } = useLengthValidation({
    initialContent: "",
    maxLength: 300,
  });

  function handleClick() {
    // 제출
  }

  return (
    <Wrapper
      width="100%"
      height="48px"
      display="flex"
      $justifycontent="space-between"
    >
      <StyledInput
        placeholder="디 올 뉴 싼타페에 대한 기대평을 작성해주세요"
        value={content}
        onChange={handleChange}
      />
      <DrawingSubmitButton onClick={handleClick} />
    </Wrapper>
  );
}

export default DrawingInput;

const StyledInput = styled.textarea`
  ${({ theme }) => theme.Typography.Body1Regular}
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  background-color: white;
  border: none;
  outline: none;
  padding-top: 0;
  position: relative;
  resize: none;
  overflow: hidden;
  padding: 12px;

  &:focus {
    outline: ${({ theme }) => `1px solid ${theme.Color.Primary.active}`};
  }
`;

interface DrawingSubmitButtonProps {
  onClick: () => void;
}

function DrawingSubmitButton({ onClick }: DrawingSubmitButtonProps) {
  return <StyledButton onClick={onClick}>등록</StyledButton>;
}

const StyledButton = styled.button`
  height: 100%;
  padding: 12px 32.5px;
  background-color: ${({ theme }) => theme.Color.Primary.normal};
  color: ${({ theme }) => theme.Color.TextIcon.reverse};
  box-sizing: border-box;
  ${({ theme }) => theme.Typography.Body1Regular}
  white-space: nowrap;
`;
