import { object, string, ref, number } from "yup";
const userSchema = object({
  username: string()
    .required("این فیلد الزامی است")
    .min(4, "نام کاربری نمی‌تواند کمتر از 4 کاراکتر باشد")
    .max(30, "نام کاربری نمی‌تواند بیشتر از ۳۰ کاراکتر باشد")
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
export const createProductSchema = object({
  name: string().required("نام کالا الزامی است"),
  quantity: number()
    .typeError("لطفا یک عدد صحیح وارد کنید")
    .integer("فقط عدد صحیح مجاز است")
    .min(1, " تعداد باید حداقل 1 باشد یا بیشتر باشد")
    .required("تعداد الزامی است"),
  price: number()
    .typeError("لطفا یک عدد صحیح وارد کنید")
    .integer("فقط عدد صحیح مجاز است")
    .min(1, " تعداد باید حداقل 1 باشد یا بیشتر باشد")
    .required("قیمت الزامی است"),
});
