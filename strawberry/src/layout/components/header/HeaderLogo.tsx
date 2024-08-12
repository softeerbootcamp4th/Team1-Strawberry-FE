import { Link } from "react-router-dom";

import headerLogo from "/src/assets/images/logos/Hyundai_Motor_Company_logo_1.svg";

// link 추가
function HeaderLogo() {
  return (
    <div>
      <Link to="/">
        <img src={headerLogo} alt="Logo" width="145px" height="19px" />
      </Link>
    </div>
  );
}

export default HeaderLogo;
