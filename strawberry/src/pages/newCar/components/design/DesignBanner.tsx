import {
  theme,
  Label,
  Wrapper,
  ImageEnum,
} from "../../../../core/design_system";

function DesignBanner() {
  const designText =
    "라이프 스타일에서 확장된 디자인으로\n새로운 고객 가치를 전달합니다";

  return (
    <Wrapper $position="relative" height="700px">
      <img src={ImageEnum.IMAGES.NEWCAR.DESIGN_BANNER} width="100%" />
      <Wrapper
        $position="absolute"
        $top="0"
        $padding="104px 240px"
        $boxsizing="border-box"
      >
        <Label $token="Display1Medium" color={theme.Color.TextIcon.reverse}>
          Design
        </Label>
        <Label $token="Title2Regular" color={theme.Color.TextIcon.assistive}>
          {designText}
        </Label>
      </Wrapper>
    </Wrapper>
  );
}

export default DesignBanner;
