import { Outlet } from "react-router-dom";

function PublicRoute() {
  // 로그인한 경우 navigate하는 코드 추가

  return <Outlet />;
}

export default PublicRoute;
