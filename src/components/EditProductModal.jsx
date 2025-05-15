import { useClickOutside } from "@/hooks/useClickOutSide";
import { createProductSchema } from "@/schema/schema";
import { useEdit } from "@/services/mutation";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import Form from "./Form";
import useModal from "@/hooks/useModal";

function EditProductModal() {
  const { closeModal, selectedItem } = useModal();

  const editform = useForm({
    resolver: yupResolver(createProductSchema),
    values: {
      name: selectedItem?.name,
      quantity: selectedItem?.quantity,
      price: selectedItem?.price,
    },
  });
  const modalRef = useRef();
  useClickOutside(modalRef, closeModal);
  const { mutate: editAction } = useEdit(closeModal);
  const onSubmit = (data) => {
    editAction({ data, id: selectedItem?.id });
  };
  return (
    <>
      <Form
        onSubmit={onSubmit}
        formMethods={editform}
        modalRef={modalRef}
        type="edit"
      />
    </>
  );
}

export default EditProductModal;
