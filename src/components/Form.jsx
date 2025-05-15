import useModal from "@/hooks/useModal";

import React from "react";

function Form({ onSubmit, modalRef, formMethods, type = "create" }) {
  const { closeModal } = useModal();
  const formType = type === "create";
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = formMethods;
  return (
    <>
      <div className="fixed right-0 top-0 h-dvh w-dvw bg-black/20"></div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        ref={modalRef}
        className="absolute left-1/2 top-1/2 z-50 w-3/12 -translate-x-1/2 -translate-y-1/2 rounded-3xl bg-white px-9 py-8"
      >
        <span className="inline-block w-full text-center text-xl">
          {formType ? "ایجاد  محصول جدید" : "ویرایش اطلاعات"}
        </span>
        <div className="mt-7 w-full space-y-4 text-sm">
          <label htmlFor="name" className="flex h-20 flex-col gap-1.5">
            نام کالا
            <input
              {...register("name")}
              className="placeholder:text-placeholderGray rounded-lg border-2 border-transparent bg-bgLight p-2.5 transition-colors duration-200 hover:border-2 hover:border-btnBlue focus:border-2 focus:border-btnBlue focus:outline-none"
              placeholder="نام کالا"
              id="name"
              type="text"
            />
            <span className="text-rose-500">{errors.name?.message}</span>
          </label>

          <label htmlFor="quantity" className="flex h-20 flex-col gap-1.5">
            تعداد موجودی
            <input
              {...register("quantity", { valueAsNumber: true })}
              className="placeholder:text-placeholderGray rounded-lg border-2 border-transparent bg-bgLight p-2.5 transition-colors duration-200 hover:border-2 hover:border-btnBlue focus:border-2 focus:border-btnBlue focus:outline-none"
              placeholder="تعداد "
              id="quantity"
              type="number"
            />
            <span className="text-rose-500">{errors.quantity?.message}</span>
          </label>

          <label htmlFor="price" className="flex h-20 flex-col gap-1.5">
            قیمت
            <input
              {...register("price", { valueAsNumber: true })}
              className="placeholder:text-placeholderGray rounded-lg border-2 border-transparent bg-bgLight p-2.5 transition-colors duration-200 hover:border-2 hover:border-btnBlue focus:border-2 focus:border-btnBlue focus:outline-none"
              placeholder="تعداد "
              type="number"
              id="price"
            />
            <span className="text-rose-500">{errors.price?.message}</span>
          </label>
        </div>
        <div className="mt-10 flex gap-2 text-sm [&>*]:py-2.5">
          <button
            type="submit"
            className="w-full rounded-xl bg-btnBlue text-white transition-colors duration-200 hover:bg-blue-500"
          >
            {formType ? "ایجاد " : "ثبت اطلاعات جدید"}
          </button>
          <button
            type="button"
            onClick={() => {
              closeModal();
              reset();
            }}
            className="w-full rounded-xl bg-gray-200 text-textDark/80 transition-colors duration-200 hover:bg-gray-300"
          >
            انصراف
          </button>
        </div>
      </form>
    </>
  );
}

export default Form;
