import { theme, Label } from "../../../../core/design_system";

function QuizSubDescription({ subDescription }: { subDescription: string }) {
  return (
    <>
      <Label $token="Title3Regular" color={theme.Color.TextIcon.info}>
        {subDescription}
      </Label>
    </>
  );
}

export default QuizSubDescription;
