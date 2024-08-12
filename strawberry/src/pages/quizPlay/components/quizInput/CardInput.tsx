import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";

const CardInput = ({
  length,
  placeholder,
}: {
  length: number;
  placeholder: string;
}) => {
  const [content, setContent] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (value.length <= length) {
      setContent(value);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      event.preventDefault();
    }
  };

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
      inputRef.current.setSelectionRange(content.length, content.length);
    }
  };

  return (
    <Container onClick={handleClick} length={length}>
      <HiddenInput
        ref={inputRef}
        type="text"
        value={content}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        maxLength={length}
      />
      <VisibleContent>
        {Array.from({ length }).map((_, index) => (
          <CharacterBox
            key={index}
            onClick={(e) => {
              e.stopPropagation();
              inputRef.current?.focus();
              inputRef.current?.setSelectionRange(
                content.length,
                content.length,
              );
            }}
          >
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

// Styled Components
const Container = styled.div<{ length: number }>`
  width: ${({ length }) => 143 * length + 25 * (length - 1)}px;
  height: 143px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  cursor: text;
`;

const HiddenInput = styled.input`
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

const CharacterBox = styled.div`
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
