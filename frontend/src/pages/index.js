import CreateProductBtn from "@/components/CreateProductBtn";
import CreateProductModal from "@/components/CreateProductModal ";
import DeleteModal from "@/components/DeleteModal";
import EditProductModal from "@/components/EditProductModal";
import Pagination from "@/components/Pagination ";
import ProductsList from "@/components/ProductsList";
import Search from "@/components/Search";
import { useAuth } from "@/hooks/useAuth";
import useModal from "@/hooks/useModal";
import { useProducts } from "@/services/queries";

import { useState } from "react";
import { Toaster } from "react-hot-toast";

export default function Home() {
  const isToken = useAuth();
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const { data } = useProducts(search, page);
  const { modalType } = useModal();
  if (!isToken)
    return (
      <span className="text-3xl fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        ....... Loading{" "}
      </span>
    );
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
