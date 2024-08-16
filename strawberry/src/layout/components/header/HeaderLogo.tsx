import { Link } from "react-router-dom";

import { ImageEnum } from "../../../core/design_system";

function HeaderLogo() {
  return (
    <div>
      <Link to="/">
        <img
          src={ImageEnum.LOGOS.HYUNDAI_MOTOR_COMPANY_LOGO_1}
          alt="Logo"
          width="145px"
          height="19px"
        />
      </Link>
    </div>
  );
}

export default HeaderLogo;
