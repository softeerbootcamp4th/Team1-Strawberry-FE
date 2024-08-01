import { useState } from "react";

import styled from "styled-components";
import { Wrapper, Label } from "../../../../core/design_system";

import hintHoverButton from "/src/assets/images/icons/hintHoverButton.svg";
import HintPopover from "./HintPopover";

interface QuizQuestionType {
  question: string;
  hint: string;
}

function QuizQuestion({ question, hint }: QuizQuestionType) {
  const [isHintShown, setIsHintShown] = useState(false);

  return (
    <div>
      <Wrapper
        width="fit-content"
        height="fit-content"
        display="flex"
        $flexdirection="row"
        $position="relative"
      >
        <Label $token="Display2Medium" $margin="36px 0 54px 0">
          {question}
        </Label>
        <button onClick={() => setIsHintShown(true)}>
          <HoverImg src={hintHoverButton} />
        </button>
        <Wrapper $position="absolute" width="100%" $top="60px" right="0">
          {isHintShown && (
            <HintPopover setClose={() => setIsHintShown(false)} hint={hint} />
          )}
        </Wrapper>
      </Wrapper>
    </div>
  );
}

export default QuizQuestion;

const HoverImg = styled.img`
  position: absolute;
  top: 35px;
  right: -35px;
`;
