import { ReactNode } from "react";

function PublicRoute({ children }: { children: ReactNode }) {
  // 로그인한 경우 navigate하는 코드 추가

  return <>{children}</>;
}

export default PublicRoute;
