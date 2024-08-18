import { ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface RouteProps {
  children: ReactNode;
}

function PublicRoute({ children }: RouteProps) {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("accessToken");

    if (token) {
      navigate("/");
    }
  }, [navigate]);

  return <>{children}</>;
}

export default PublicRoute;
