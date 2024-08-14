import { Label, theme, Wrapper } from "../../../../core/design_system";
import { PartData } from "./NewCarParts";

interface PartProps {
  data: PartData;
}

function Part(props: PartProps) {
  const { data } = props;

  return (
    <Wrapper display="flex" $flexdirection="column" $gap="24px">
      <img width="200px" height="200px" src={data.imgUrl} />
      <Wrapper display="flex" $flexdirection="column" $gap="12px">
        <Label
          width="100%"
          $token="Title1Medium"
          color={theme.Color.TextIcon.default}
        >
          {data.title}
        </Label>
        <Label
          width="100%"
          $token="Body1Regular"
          color={theme.Color.TextIcon.sub}
        >
          {data.description}
        </Label>
      </Wrapper>
    </Wrapper>
  );
}

export default Part;
