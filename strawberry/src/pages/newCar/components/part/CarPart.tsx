import { Label, theme, Wrapper } from "../../../../core/design_system";

import { Part } from "../../models/Part";

interface CarPartProps {
  part: Part;
}

function CarPart(props: CarPartProps) {
  const { part } = props;
  console.log(part);
  return (
    <Wrapper display="flex" $flexdirection="column" $gap="24px">
      <img width="200px" height="200px" src={part.imgUrl} />
      <Wrapper display="flex" $flexdirection="column" $gap="12px">
        <Label
          width="100%"
          $token="Title1Medium"
          color={theme.Color.TextIcon.default}
        >
          {part.title}
        </Label>
        <Label
          width="100%"
          $token="Body1Regular"
          color={theme.Color.TextIcon.sub}
        >
          {part.description}
        </Label>
      </Wrapper>
    </Wrapper>
  );
}

export default CarPart;
