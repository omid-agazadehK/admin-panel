import React from "react";

function Form({ onSubmit, modalRef, onclick, formMethods, type = "create" }) {
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
              className="rounded-lg bg-[#F2F2F2] p-2.5 placeholder:text-[#8D8D8D] focus:outline-none"
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
              className="rounded-lg bg-[#F2F2F2] p-2.5 placeholder:text-[#8D8D8D] focus:outline-none"
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
              className="rounded-lg bg-[#F2F2F2] p-2.5 placeholder:text-[#8D8D8D] focus:outline-none"
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
            className="w-full rounded-xl bg-[#55A3F0] text-white"
          >
            {formType ? "ایجاد " : "ثبت اطلاعات جدید"}
          </button>
          <button
            type="button"
            onClick={() => {
              onclick(null);
              reset();
            }}
            className="w-full rounded-xl bg-[#DFDFDF] text-[#282828CC]"
          >
            انصراف
          </button>
        </div>
      </form>
    </>
  );
}

export default Form;
