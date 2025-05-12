import api from "@/config/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

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
const usePostProduct = (formDet, setOpenModal) => {
  const queryClient = useQueryClient();

  const postProduct = (data) => {
    return api.post("/products", data);
  };
  return useMutation({
    mutationKey: ["post-product"],
    mutationFn: postProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      setOpenModal(false);
      formDet.reset();
      toast.success("afanar bro");
    },
    onError: (error) => toast.error(error.message),
  });
};
export { useLogin, useRegister, usePostProduct };
