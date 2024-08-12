import { Wrapper, Label } from "../../../../core/design_system";

import PopoverButton from "../../../common/components/buttons/popover/PopoverButton";

interface QuizQuestionType {
  question: string;
  hint: string;
}

function QuizQuestion({ question, hint }: QuizQuestionType) {
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
        <Wrapper $position="absolute">
          <PopoverButton type="힌트" content={hint} />
        </Wrapper>
      </Wrapper>
    </div>
  );
}

export default QuizQuestion;
