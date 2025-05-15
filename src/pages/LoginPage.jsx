import { loginSchema } from "@/schema/schema";
import { useForm } from "react-hook-form";
import {  useNavigate } from "react-router";
import { yupResolver } from "@hookform/resolvers/yup";

import toast, { Toaster } from "react-hot-toast";
import { useLogin } from "@/services/mutation";
import Cookies from "js-cookie";
import AuthForm from "@/components/AuthForm";

function LoginPage() {
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const { isPending, mutate } = useLogin();
  const onSubmit = (i) => {
    mutate(i, {
      onSuccess: (data) => {
        Cookies.set("accessToken", data.token, { expires: 2 / 48 });
        navigate("/");
      },
      onError: () => toast.error("userName doas not exist"),
    });
  };

  return (
    <div className="flex h-full items-center justify-center">
      <Toaster />
    
      <AuthForm
        onSubmit={handleSubmit(onSubmit)}
        register={register}
        errors={errors}
        isPending={isPending}
        showRePassword={false}
      />
    </div>
  );
}

export default LoginPage;
