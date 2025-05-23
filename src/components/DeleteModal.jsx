import { useClickOutside } from "@/hooks/useClickOutSide";
import useModal from "@/hooks/useModal";
import { useDelete } from "@/services/mutation";
import { useRef } from "react";

function DeleteModal({ data, setPage }) {
  const { closeModal, selectedItem } = useModal();
  const modalRef = useRef();
  useClickOutside(modalRef, closeModal);

  const { mutate: deleteAction } = useDelete();

  const onDelete = () => {
    deleteAction(selectedItem?.id, {
      onSuccess: () => {
        if (data.data.length === 1 && data.page > 1) setPage(data.page - 1);
      },
    });
    closeModal();
    if (data.data.length === 1 && data.page > 1) setPage(data.page - 1);
  };
  return (
    <>
      <div className="fixed right-0 top-0 h-dvh w-dvw bg-black/20"></div>
      <div
        ref={modalRef}
        className="fixed left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-7 rounded-[30px] bg-white px-[70px] py-8"
      >
        <img src="./Close.png" className="mb-9 size-24" alt="asd" />
        <span className="text-xl text-textDark">
          آیا از حذف این محصول مطمئنید؟
        </span>
        <div className="flex w-full justify-center gap-4">
          <button
            onClick={() => onDelete()}
            className="w-full rounded-xl bg-rose-500 hover:bg-rose-600 transition-colors duration-200 px-16 py-2.5 text-white"
          >
            حذف
          </button>
          <button
            onClick={() => closeModal()}
            className="w-full rounded-xl bg-gray-200 hover:bg-gray-300 transition-colors duration-200 px-16 py-2.5 text-textDark/80"
          >
            لغو
          </button>
        </div>
      </div>
    </>
  );
}

export default DeleteModal;
