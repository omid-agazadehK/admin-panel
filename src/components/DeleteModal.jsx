function DeleteModal({ modalRef, ondelete, onclick }) {
  return (
    <>
      <div className="fixed right-0 top-0 h-dvh w-dvw bg-black/20"></div>
      <div
        ref={modalRef}
        className="fixed left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-7 rounded-[30px] bg-white px-[70px] py-8"
      >
        <img src="./Close.png" className="mb-9 size-24" alt="asd" />
        <span className="text-xl text-[#282828]">
          آیا از حذف این محصول مطمئنید؟
        </span>
        <div className="flex w-full justify-center gap-4">
          <button
            onClick={ondelete}
            className="w-full rounded-xl bg-[#F43F5E] px-16 py-2.5 text-white"
          >
            حذف
          </button>
          <button
            onClick={onclick}
            className="w-full rounded-xl bg-[#DFDFDF] px-16 py-2.5 text-[#282828CC]"
          >
            لغو
          </button>
        </div>
      </div>
    </>
  );
}

export default DeleteModal;
