import styled from "styled-components";

import { Wrapper } from "../../../core/design_system";

import useExpectationInput from "../hooks/logics/useExpectationInput";

import SubmitButton from "./SubmitButton";

function ExpectationInput() {
  const {
    content,
    handleChange,
    handleKeyDown,
    handleSubmit,
    isFocused,
    setIsFocused,
  } = useExpectationInput();

  return (
    <Wrapper width="960px" display="flex" $justifycontent="space-between">
      <InputWrapper $isFocused={isFocused}>
        <StyledInput
          placeholder="디 올 뉴 싼타페에 대한 기대평을 작성해주세요"
          value={content}
          onChange={handleChange}
          onKeyDown={(e) => handleKeyDown(e)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        <WrittenLength>{content.length}/300</WrittenLength>
      </InputWrapper>
      <SubmitButton onClick={handleSubmit} />
    </Wrapper>
  );
}

export default ExpectationInput;

const InputWrapper = styled.div<{ $isFocused: boolean }>`
  border-radius: ${({ theme }) => theme.Border.Radius6};
  border: 1px solid ${({ theme }) => theme.Color.Border.default};
  padding: 12px;
  width: 862px;
  height: 96px;
  box-sizing: border-box;
  position: relative;
  display: flex;
  flex-direction: row;
  background-color: ${({ theme }) => theme.Color.Common.white};

  outline: ${({ theme, $isFocused }) =>
    $isFocused ? `1px solid ${theme.Color.Primary.normal}` : "none"};
`;

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

  &::placeholder {
    color: ${({ theme }) => theme.Color.TextIcon.assistive};
    position: absolute;
    top: 0;
    height: 100%;
  }

  &::content {
    color: ${({ theme }) => theme.Color.TextIcon.default};
    position: absolute;
    top: 0;
    height: 100%;
  }
`;

const WrittenLength = styled.p`
  ${({ theme }) => theme.Typography.Body1Regular};
  color: ${({ theme }) => theme.Color.TextIcon.assistive};
  align-self: center;
  position: absolute;
  right: 12px;
  bottom: 0px;
`;
