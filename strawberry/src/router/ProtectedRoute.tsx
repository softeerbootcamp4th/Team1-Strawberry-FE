import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

function ProtectedRoute() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("accessToken");

    if (!token) {
      alert("로그인 후 이용해주세요.");
      navigate(-1);
    }
  }, [navigate]);

  return <Outlet />;
}

export default ProtectedRoute;
