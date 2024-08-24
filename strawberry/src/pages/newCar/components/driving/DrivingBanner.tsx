import {
  theme,
  ImageEnum,
  Label,
  Wrapper,
} from "../../../../core/design_system";

function DrivingBanner() {
  return (
    <section>
      <Wrapper
        display="flex"
        $flexdirection="column"
        $alignitems="center"
        $margin="0 0 40px 0"
      >
        <Label $token="Display1Medium" color={theme.Color.TextIcon.default}>
          Driving
        </Label>
        <Label $token="Title2Regular" color={theme.Color.TextIcon.sub}>
          일상과 아웃도어를 넘나들며 다양하게 공간을 활용할 수 있습니다.
        </Label>
      </Wrapper>
      <img
        loading="lazy"
        src={ImageEnum.IMAGES.NEWCAR.DRIVING_BANNER}
        alt="drivingBanner"
        width="100%"
      />
    </section>
  );
}

export default DrivingBanner;
