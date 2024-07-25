import { Outlet } from "react-router-dom";

function ProtectedRoute() {
  // 로그인 하지 않으면 navigate

  return <Outlet />;
}

export default ProtectedRoute;
