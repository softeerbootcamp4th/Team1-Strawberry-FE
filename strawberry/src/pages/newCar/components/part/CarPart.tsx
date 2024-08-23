import styled from "styled-components";
import { Label, theme, Wrapper } from "../../../../core/design_system";
import { Part } from "../../models/Part";

interface CarPartProps {
  part: Part;
}

function CarPart(props: CarPartProps) {
  const { part } = props;

  return (
    <AnimationWrapper>
      <img
        className="slide-top"
        loading="lazy"
        width="200px"
        height="200px"
        src={part.imgUrl}
      />
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
    </AnimationWrapper>
  );
}

export default CarPart;

const AnimationWrapper = styled.div`
  width: 710px;
  display: flex;
  flex-direction: column;
  gap: 24px;

  .slide-top {
    animation: slide-top 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }
`;
