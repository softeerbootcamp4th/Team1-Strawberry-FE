import React, { useState, useCallback, useRef } from "react";
import styled from "styled-components";

import { theme, Wrapper } from "../../../../core/design_system";
import { useGlobalDispatch } from "../../../../core/hooks/useGlobalDispatch";

import { useExpectationMutation } from "../../../../data/queries";

import useLengthValidation from "../../../expectation/hooks/useLengthValidation";

function DrawingInput() {
  const globalDispatch = useGlobalDispatch();
  const { mutate: postExpectation } = useExpectationMutation();
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const inputRef = useRef(null);

  const { content, handleChange } = useLengthValidation({
    initialContent: "",
    maxLength: 300,
  });

  const handleClick = useCallback(() => {
    postExpectation({ comment: content });
    globalDispatch({
      type: "OPEN_TOAST",
      toastContent: "기대평이 등록되었습니다",
    });
    setIsSubmitted(true);
  }, [content, postExpectation, globalDispatch]);

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
      if (event.currentTarget && event.key === "Enter" && !event.shiftKey) {
        event.preventDefault();
        handleClick();
        event.currentTarget.blur();
      }
    },
    [handleClick],
  );

  return (
    <Wrapper
      width="100%"
      height="48px"
      display="flex"
      $justifycontent="space-between"
    >
      <StyledInput
        ref={inputRef}
        placeholder="디 올 뉴 싼타페에 대한 기대평을 작성해주세요"
        value={content}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        disabled={isSubmitted}
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

  background-color: ${({ disabled }) =>
    disabled ? `${theme.Color.TextIcon.disable}` : "white"};
  /* background-color: ${({ disabled }) => (disabled ? `#C3C3C3` : "white")}; */
`;

const StyledButton = styled.button`
  height: 100%;
  padding: 12px 32.5px;
  background-color: ${({ theme, disabled }) =>
    disabled ? "#C3C3C3" : theme.Color.Primary.normal};
  color: ${({ theme, disabled }) =>
    disabled ? theme.Color.TextIcon.info : theme.Color.TextIcon.reverse};
  box-sizing: border-box;
  ${({ theme }) => theme.Typography.Body1Regular};
  white-space: nowrap;
  cursor: ${({ disabled }) => (disabled ? "default" : "cursor")};
`;
