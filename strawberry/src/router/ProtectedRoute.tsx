import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useGlobalDispatch } from "../core/hooks/useGlobalDispatch";

function ProtectedRoute() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("accessToken");

    if (!token) {
      navigate("/login");
    }
  }, [navigate]);

  return <Outlet />;
}

export default ProtectedRoute;
