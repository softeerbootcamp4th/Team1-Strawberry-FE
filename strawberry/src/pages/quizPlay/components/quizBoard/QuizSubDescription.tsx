import { theme, Label } from "../../../../core/design_system";

interface QuizSubDescriptionProps {
  subDescription: string;
}

function QuizSubDescription({ subDescription }: QuizSubDescriptionProps) {
  return (
    <>
      <Label $token="Title3Regular" color={theme.Color.TextIcon.info}>
        {subDescription}
      </Label>
    </>
  );
}

export default QuizSubDescription;
