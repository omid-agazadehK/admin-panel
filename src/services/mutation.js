import api from "@/config/api";
import { showErrorToast, showSuccessToast } from "@/utils/toastHelper";
import { useMutation, useQueryClient } from "@tanstack/react-query";
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
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      setOpenModal(null);
      formDet.reset();
      showSuccessToast(`محصول ${data.name} با موفقیت ایجاد شد 😊`);
    },
    onError: () => showErrorToast("خطایه سرور لطفا بعدا تلاش کنید"),
  });
};

const useEdit = (closeModal) => {
  const queryClient = useQueryClient();
  function fetchEdit({ data, id }) {
    return api.put(`/products/${id}`, data);
  }
  return useMutation({
    mutationKey: ["edit-products"],
    mutationFn: fetchEdit,
    onSuccess: () => {
      showSuccessToast("تقییرات با موفقیت اعمال شد");
      queryClient.invalidateQueries({ queryKey: ["products"] });
      closeModal();
    },
    onError: () => showErrorToast("خطای سرور لطفا بعدا تلاش کنید"),
  });
};
const useDelete = () => {
  const queryClient = useQueryClient();

  function fetchDelete(id) {
    return api.delete(`/products/${id}`);
  }
  return useMutation({
    mutationKey: ["Delete-products"],
    mutationFn: fetchDelete,
    onSuccess: () => {
      showSuccessToast("محصول مورد نظر حذف شد");
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
    onError: (err) => showErrorToast(err.message),
  });
};
export { useLogin, useRegister, usePostProduct, useEdit, useDelete };
