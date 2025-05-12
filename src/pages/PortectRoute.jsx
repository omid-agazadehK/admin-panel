import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router";

function PortectRoute() {
  const navigate = useNavigate();
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    const token = Cookies.get("accessToken");

    if (!token) {
      navigate("/login");
    }
    setAuth(true);
  }, [navigate]);

  if (auth) {
    return <Outlet />;
  }
}

export default PortectRoute;
