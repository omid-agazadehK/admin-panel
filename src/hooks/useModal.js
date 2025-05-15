import { ModalContext } from "@/contexts/ModalContext";
import { useContext } from "react";

export default function useModal() {
  return useContext(ModalContext);
}
