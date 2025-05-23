import AuthForm from "@/components/AuthForm";
import { registerSchema } from "@/schema/schema";
import { useRouter } from "next/router";
import React from "react";
import { useForm } from "react-hook-form";
import { Toaster } from "react-hot-toast";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRegister } from "@/services/mutation";
import { showErrorToast } from "@/utils/toastHelper";

function Register() {
  const { push } = useRouter();
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
      onSuccess: () => push("/login"),
      onError: (error) => {
        console.log(error);
        showErrorToast("نام کابری وجود دارد");
      },
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

export default Register;
