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
      setOpenModal(null);
      formDet.reset();
      toast.success("afanar bro");
    },
    onError: (error) => toast.error(error.message),
  });
};

const useEdit = (selectedId) => {
  const queryClient = useQueryClient();

  function fetchEdit(data) {
    return api.put(`/products/${selectedId}`, data);
  }
  return useMutation({
    mutationKey: ["edit-products"],
    mutationFn: fetchEdit,
    onSuccess: () => {
      toast.success("edited bra");
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
    onError: (err) => toast.error(err.message),
  });
};
const useDelete = (selectedId) => {
  const queryClient = useQueryClient();

  function fetchDelete() {
    return api.delete(`/products/${selectedId}`);
  }
  return useMutation({
    mutationKey: ["Delete-products"],
    mutationFn: fetchDelete,
    onSuccess: () => {
      toast.success("Deleted bra");
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
    onError: (err) => toast.error(err.message),
  });
};
export { useLogin, useRegister, usePostProduct, useEdit, useDelete };
