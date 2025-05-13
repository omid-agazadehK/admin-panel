import { useForm } from "react-hook-form";
import Product from "./Product";
import { createProductSchema } from "@/schema/schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRef, useState } from "react";
import { useClickOutside } from "@/hooks/useClickOutSide";
import Form from "./Form";
import { useDelete, useEdit } from "@/services/mutation";
import DeleteModal from "./DeleteModal";

function ProductsList({ data, modalType, setModalType, setPage }) {
  const [selectedId, setSelectedId] = useState(null);
  const selectedProduct = data?.data.find((item) => item.id === selectedId);
  const editform = useForm({
    resolver: yupResolver(createProductSchema),
    values: {
      name: selectedProduct?.name,
      quantity: selectedProduct?.quantity,
      price: selectedProduct?.price,
    },
  });
  const modalRef = useRef();
  useClickOutside(modalRef, () => {
    setModalType(null);
  });
  const { mutate: editAction } = useEdit(selectedId);
  const { mutate: deleteAction } = useDelete(selectedId);
  const onSubmit = (data) => {
    editAction(data);
    setModalType(null);
  };
  const onDelete = () => {
    deleteAction();
    setModalType(null);
    if (data.data.length === 1 && data.page > 1) setPage(data.page - 1);
  };

  return (
    <div className="mt-4 rounded-3xl border border-[#E4E4E4] bg-white">
      <div className="flex w-full items-center justify-between rounded-tl-3xl rounded-tr-3xl bg-[#F2F2F2] px-14 py-6 text-right">
        <span className="w-1/6">نام کالا</span>
        <span className="w-1/6">موجودی</span>
        <span className="w-1/6">قیمت</span>
        <span className="w-3/6">شناسه کالا</span>
      </div>
      {modalType === "edit" ? (
        <Form
          onSubmit={onSubmit}
          formMethods={editform}
          modalRef={modalRef}
          onclick={setModalType}
          type="edit"
        />
      ) : null}
      {modalType === "delete" ? (
        <DeleteModal
          modalRef={modalRef}
          ondelete={() => onDelete()}
          onclick={() => setModalType(null)}
        />
      ) : null}
      <div className="h-[610px] divide-y">
        <Product
          data={data}
          setSelectedId={setSelectedId}
          setModalType={setModalType}
        />
      </div>
    </div>
  );
}

export default ProductsList;
