import api from "@/config/api";
import { useMutation } from "@tanstack/react-query";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router";

function PortectRoute() {
  const navigate = useNavigate();
  const token = Cookies.get("accessToken");
  const [auth, setAuth] = useState(false);
  const fetchUser = () => {
    return api.delete("/products/sinabaomid", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  };
  const { mutate } = useMutation({
    mutationKey: ["validate-token"],
    mutationFn: fetchUser,
  });

  useEffect(() => {
    mutate(undefined, {
      onError: (error) => {
        if (error.response?.status === 401 || error.response?.status === 403)
          return navigate("/login", { replace: true });
        if (error.response?.status === 404) setAuth(true);
      },
    });
  }, [mutate, navigate]);

  if (auth) {
    return <Outlet />;
  }
}

export default PortectRoute;
