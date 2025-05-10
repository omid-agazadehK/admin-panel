import api from "@/config/api";
import { useMutation } from "@tanstack/react-query";

const useRegister = () => {
  const fetchUser = (data) => {
    const { username, password } = data;
    return api.post("/auth/register", { username, password });
  };

  return useMutation({
    mutationKey: ["register"],
    mutationFn: fetchUser,
  });
};

const useLogin = () => {
  const fetchUser = (data) => {
    const { username, password } = data;
    return api.post("/auth/login", { username, password });
  };

  return useMutation({
    mutationKey: ["login"],
    mutationFn: fetchUser,
  });
};
export { useRegister, useLogin };
