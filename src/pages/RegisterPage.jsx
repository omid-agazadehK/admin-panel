import { registerSchema } from "@/schema/schema";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { yupResolver } from "@hookform/resolvers/yup";

import { Toaster } from "react-hot-toast";
import { useRegister } from "@/services/mutation";
import AuthForm from "@/components/AuthForm";
import { showErrorToast } from "@/utils/toastHelper";

function RegisterPage() {
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const { isPending, mutate } = useRegister();
  const onSubmit = (i) => {
    mutate(i, {
      onSuccess: () => navigate("/login"),
      onError: () => showErrorToast("نام کابری وجود دارد"),
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
        showRePassword={true}
      />
    </div>
  );
}

export default RegisterPage;
