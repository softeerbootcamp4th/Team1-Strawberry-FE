import { ImageEnum } from "../../../../core/design_system";

function DrivingBanner() {
  return (
    <section>
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
