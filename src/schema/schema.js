import { object, string, ref } from "yup";
const userSchema = object({
  username: string()
    .required("این فیلد الزامی است")
    .matches(
      /^[a-zA-Z0-9!@#$%^&*]+$/,
      "فقط کاراکترهای انگلیسی و  (!@#$%) مجاز هستن ",
    ),
  password: string()
    .matches(
      /^[a-zA-Z0-9!@#$%^&*]+$/,
      "فقط کاراکترهای انگلیسی و  (!@#$%) مجاز هستن ",
    )
    .min(8, "رمز عبور باید بیشتر از 8 حروف باشد")
    .required("وارد کردن رمز عبور الزامی است"),
});
export const loginSchema = userSchema;
export const registerSchema = loginSchema.concat(
  object().shape({
    reenterPassword: string()
      .oneOf([ref("password")], "رمز عبور وارد شده مطابقت ندارند")
      .required("تکرار رمز عبور الزامی است"),
  }),
);
