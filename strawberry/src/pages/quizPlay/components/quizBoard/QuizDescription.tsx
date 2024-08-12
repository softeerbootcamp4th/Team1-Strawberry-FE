import { Label } from "../../../../core/design_system";

function QuizDescription({ description }: { description: string }) {
  return (
    <div>
      <Label $textalign="center" $token="Title2Regular">
        {description}
      </Label>
    </div>
  );
}

export default QuizDescription;
