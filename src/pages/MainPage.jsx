import CreateProductBtn from "@/components/CreateProductBtn";
import CreateProductModal from "@/components/CreateProductModal ";
import DeleteModal from "@/components/DeleteModal";
import EditProductModal from "@/components/EditProductModal";
import Pagination from "@/components/Pagination ";
import ProductsList from "@/components/ProductsList";
import Search from "@/components/Search";
import { useClickOutside } from "@/hooks/useClickOutSide";
import useModal from "@/hooks/useModal";
import { useProducts } from "@/services/queries";

import { useRef, useState } from "react";
import { Toaster } from "react-hot-toast";

function MainPage() {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const { data } = useProducts(search, page);
  const { closeModal, modalType } = useModal();

  const modalRef = useRef();
  useClickOutside(modalRef, closeModal);

  return (
    <>
      <Toaster />
      <Search search={search} setSearch={setSearch} setPage={setPage} />
      <CreateProductBtn />
      {modalType === "create" && <CreateProductModal />}
      <ProductsList data={data} setPage={setPage} />
      {modalType === "edit" && <EditProductModal />}
      {modalType === "delete" ? (
        <DeleteModal data={data} setPage={setPage} />
      ) : null}
      <Pagination page={page} setPage={setPage} data={data} />
    </>
  );
}

export default MainPage;
