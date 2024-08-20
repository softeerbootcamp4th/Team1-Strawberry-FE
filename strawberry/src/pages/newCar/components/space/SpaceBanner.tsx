import styled from "styled-components";
import {
  ImageEnum,
  Label,
  theme,
  Wrapper,
} from "../../../../core/design_system";

function SpaceBanner() {
  return (
    <Wrapper $padding="100px 0" height="fit-content" $position="relative">
      <img
        src={ImageEnum.IMAGES.NEWCAR.SPACE_BANNER}
        alt="spaceBanner"
        width="100%"
      />
      <BannerContentWrapper>
        <Label $token="Display1Medium" color={theme.Color.TextIcon.reverse}>
          Space
        </Label>
        <Label $token="Title2Regular" color={theme.Color.TextIcon.assistive}>
          일상과 아웃도어를 넘나들며 다양하게 공간을 활용할 수 있습니다.
        </Label>
      </BannerContentWrapper>
    </Wrapper>
  );
}

export default SpaceBanner;

const BannerContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  gap: 12px;
`;
