import { Label } from "../../../../core/design_system";

interface QuizDescriptionProps {
  description: string;
}

function QuizDescription({ description }: QuizDescriptionProps) {
  return (
    <div>
      <Label $textalign="center" $token="Title2Regular">
        {description}
      </Label>
    </div>
  );
}

export default QuizDescription;
