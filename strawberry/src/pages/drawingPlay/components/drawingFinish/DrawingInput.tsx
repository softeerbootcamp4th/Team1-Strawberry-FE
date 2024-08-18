import styled from "styled-components";

import { Wrapper } from "../../../../core/design_system";

import useLengthValidation from "../../../expectation/hooks/useLengthValidation";

import { useExpectationMutation } from "../../../../data/queries";
import { useGlobalDispatch } from "../../../../core/hooks/useGlobalDispatch";
import { useState } from "react";

function DrawingInput() {
  const globalDispatch = useGlobalDispatch();
  const { mutate: postExpectation } = useExpectationMutation();
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const { content, handleChange } = useLengthValidation({
    initialContent: "",
    maxLength: 300,
  });

  function handleClick() {
    postExpectation({ comment: content });
    globalDispatch({
      type: "OPEN_TOAST",
      toastContent: "기대평이 등록되었습니다",
    });
    setIsSubmitted(true);
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
      <StyledButton disabled={isSubmitted} onClick={handleClick}>
        등록
      </StyledButton>
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

const StyledButton = styled.button`
  height: 100%;
  padding: 12px 32.5px;
  background-color: ${({ theme, disabled }) =>
    disabled ? theme.Color.TextIcon.disable : theme.Color.Primary.normal};
  color: ${({ theme, disabled }) =>
    disabled ? theme.Color.TextIcon.info : theme.Color.TextIcon.reverse};
  box-sizing: border-box;
  ${({ theme }) => theme.Typography.Body1Regular};
  white-space: nowrap;
  cursor: ${({ disabled }) => (disabled ? "default" : "cursor")};
`;
