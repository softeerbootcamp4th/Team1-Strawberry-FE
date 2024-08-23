import styled from "styled-components";

import {
  theme,
  Label,
  Wrapper,
  ImageEnum,
} from "../../../../core/design_system";
import AnimText from "../../../../core/design_system/styles/AnimText";

function DesignBanner() {
  const designText =
    "라이프 스타일에서 확장된 디자인으로\n새로운 고객 가치를 전달합니다";

  return (
    <section>
      <Wrapper
        $position="relative"
        height="fit-content"
        $padding="100px 0"
        $boxsizing="border-box"
        display="flex"
        $justifycontent="center"
      >
        <img
          loading="lazy"
          src={ImageEnum.IMAGES.NEWCAR.DESIGN_BANNER}
          width="100%"
        />
        <Wrapper width="1440px" $position="absolute" $top="204px">
          <Label $token="Display1Medium" color={theme.Color.TextIcon.reverse}>
            Design
          </Label>
          <AnimText content={designText} delay={50} tag={StyledDesignText} />
        </Wrapper>
      </Wrapper>
    </section>
  );
}

export default DesignBanner;

const StyledDesignText = styled.p`
  ${({ theme }) => theme.Typography.Title2Regular}
  color: ${({ theme }) => theme.Color.TextIcon.assistive}
`;
