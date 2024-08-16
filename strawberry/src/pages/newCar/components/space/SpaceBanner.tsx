import { ImageEnum, Wrapper } from "../../../../core/design_system";

function SpaceBanner() {
  return (
    <Wrapper $padding="100px 0">
      <img
        src={ImageEnum.IMAGES.NEWCAR.SPACE_BANNER}
        alt="spaceBanner"
        width="100%"
      />
    </Wrapper>
  );
}

export default SpaceBanner;
