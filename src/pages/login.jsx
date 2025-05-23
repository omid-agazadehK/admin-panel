import AuthForm from "@/components/AuthForm";
import { loginSchema } from "@/schema/schema";
import { useLogin } from "@/services/mutation";
import { yupResolver } from "@hookform/resolvers/yup";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";

function LoginPage() {
  const { push } = useRouter();
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
        push("/");
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
