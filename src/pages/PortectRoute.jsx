import api from "@/config/api";
import { useMutation } from "@tanstack/react-query";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { data, Outlet } from "react-router";

function PortectRoute() {
  //   const [mia, setMia] = useState([]);
  const moz = false;
  const fetchUser = () => {
    const token = Cookies.get("accessToken");
    return api.delete("/products/3", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  };
  //403 fake token // 404 product undefined //401 no header => token bro
  const { mutate, isPending, isError, error } = useMutation({
    mutationKey: ["validate-token"],
    mutationFn: fetchUser,
  });
  useEffect(() => {
    mutate(undefined, {
      onError: (error) => {
        console.log("Full error object: ", error);
        console.log("Status: ", error.response?.status);
        console.log("Message: ", error.response?.data?.message);
      },
    });
  }, [mutate]);

  if (moz) {
    return <Outlet />;
  } else {
    return "asdasdasdasdasd";
  }
}

export default PortectRoute;
