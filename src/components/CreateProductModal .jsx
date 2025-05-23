import { useClickOutside } from "@/hooks/useClickOutSide";
import { createProductSchema } from "@/schema/schema";
import { usePostProduct } from "@/services/mutation";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import Form from "./Form";
import useModal from "@/hooks/useModal";


function CreateProductModal() {
  const { closeModal } = useModal();

  const modalRef = useRef(null);
  const createform = useForm({ resolver: yupResolver(createProductSchema) });
  useClickOutside(modalRef, () => {
    closeModal(null);
    createform.reset();
  });
  const { mutate } = usePostProduct(createform, closeModal);
  const onCreate = (data) => {
    mutate(data);
  };

  return (
    <Form onSubmit={onCreate} formMethods={createform} modalRef={modalRef} />
  );
}

export default CreateProductModal;
