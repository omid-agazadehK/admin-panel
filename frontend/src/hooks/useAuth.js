import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

export const useAuth = () => {
  const [isToken, setIsToken] = useState(false);
  const { push } = useRouter();

  useEffect(() => {
    const token = Cookies.get("accessToken");
    if (!token) {
      push("/login");
    } else {
      setIsToken(true);
    }
  }, [push]);
  return isToken;
};
