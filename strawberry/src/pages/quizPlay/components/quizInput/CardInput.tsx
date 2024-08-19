import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";

import { useGlobalState } from "../../../../core/hooks/useGlobalState";
import { useQuizPlayState } from "../../hooks/useQuizPlayState";
import { useQuizPlayDispatch } from "../../hooks/useQuizPlayDispatch";

interface CardInputProps {
  length: number;
  placeholder: string;
  handleSubmit: () => void;
}

const CardInput = (props: CardInputProps) => {
  const { length, placeholder, handleSubmit } = props;

  const inputRef = useRef<HTMLInputElement>(null);
  const [highlightedIndex, setHighlightedIndex] = useState<number | null>(null);

  const { isModalOpen } = useGlobalState();
  const { answer: content } = useQuizPlayState();
  const dispatch = useQuizPlayDispatch();

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }

    setHighlightedIndex(0);
  }, []);

  useEffect(() => {
    if (!isModalOpen) {
      inputRef.current?.focus();
    }
  }, [isModalOpen]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    if (value.length <= length) {
      dispatch({ type: "SET_ANSWER", payload: value });

      if (value.length > content.length) {
        setHighlightedIndex(value.length - 1);
      }
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      event.preventDefault();
    }

    if (event.key === "Backspace") {
      if (content.length > 0) {
        setHighlightedIndex(content.length - 1);
      }
    }

    if (event.key === "Enter" && content.length === length) {
      inputRef.current?.blur();
      handleSubmit();
    }
  };

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
      inputRef.current.setSelectionRange(content.length, content.length);
      setHighlightedIndex(content.length - 1);
    }
  };

  return (
    <Container onClick={handleClick} length={length}>
      <StyledInput
        ref={inputRef}
        type="text"
        value={content}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        maxLength={length}
      />
      <VisibleContent>
        {Array.from({ length }).map((_, index) => (
          <CharacterBox key={index} isHighlighted={index === highlightedIndex}>
            <Character isFilled={Boolean(content[index])}>
              {content[index] || placeholder[index]}
            </Character>
          </CharacterBox>
        ))}
      </VisibleContent>
    </Container>
  );
};

export default CardInput;

const Container = styled.div<{ length: number }>`
  width: ${({ length }) => 143 * length + 25 * (length - 1)}px;
  height: 143px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  cursor: text;
`;

const StyledInput = styled.input`
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-size: 67px;
  letter-spacing: 101px;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  z-index: 2;
`;

const VisibleContent = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.Typography.Display1Medium};
  position: relative;
  z-index: 1;
`;

const CharacterBox = styled.div<{ isHighlighted: boolean }>`
  width: 130px;
  height: 130px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 16px;
  background-color: ${({ theme }) => theme.Color.Common.white};
  border-radius: ${({ theme }) => theme.Border.Radius6};
  box-sizing: border-box;
  position: relative;
  cursor: pointer;

  ${({ isHighlighted }) => isHighlighted && `border: 3px solid #FF8126;`}

  &:last-child {
    margin-right: 0;
  }
`;

const Character = styled.p<{ isFilled: boolean }>`
  font-size: 67px;
  color: ${({ isFilled, theme }) =>
    isFilled ? theme.Color.TextIcon.default : theme.Color.TextIcon.assistive};
  margin: 0;
  line-height: 67px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  height: fit-content;
  box-sizing: border-box;
`;
