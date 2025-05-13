import CreateProduct from "@/components/CreateProduct";
import Form from "@/components/Form";
import ProductsList from "@/components/ProductsList";
import Search from "@/components/Search";
import { useClickOutside } from "@/hooks/useClickOutSide";
import { createProductSchema } from "@/schema/schema";
import { usePostProduct } from "@/services/mutation";
import { useProducts } from "@/services/queries";
import { yupResolver } from "@hookform/resolvers/yup";

import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Toaster } from "react-hot-toast";

function MainPage() {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [modalType, setModalType] = useState(null);

  const modalRef = useRef(null);

  const createform = useForm({ resolver: yupResolver(createProductSchema) });

  useClickOutside(modalRef, () => {
    setModalType(null);
    createform.reset();
  });

  const { data } = useProducts(search, page);
  const { mutate } = usePostProduct(createform, setModalType);
  console.log(data);
  const onCreate = (data) => {
    mutate(data);
  };

  return (
    <>
      <Search search={search} setSearch={setSearch} setPage={setPage} />
      <CreateProduct onClick={() => setModalType("create")} />
      <Toaster />
      {modalType === "create" && (
        <Form
          onSubmit={onCreate}
          formMethods={createform}
          modalRef={modalRef}
          onclick={setModalType}
        />
      )}
      <ProductsList
        data={data}
        modalType={modalType}
        setModalType={setModalType}
        setPage={setPage}
      />
      <div className="mt-2 flex items-center justify-center gap-2">
        {page > 1 && (
          <button
            onClick={() => setPage(page - 1)}
            className="size-9 rounded-full border-2 border-[#8D8D8D80] text-lg text-[#8D8D8D80] transition-colors duration-150 hover:border-none hover:bg-[#55A3F0] hover:text-white"
          >
            {page - 1}
          </button>
        )}
        <button
          disabled
          className="size-9 cursor-not-allowed rounded-full bg-[#55A3F0] text-lg text-white"
        >
          {page}
        </button>
        {page < data?.totalPages && (
          <button
            onClick={() => setPage(page + 1)}
            className="size-9 rounded-full border-2 border-[#8D8D8D80] text-lg text-[#8D8D8D80] transition-colors duration-150 hover:border-none hover:bg-[#55A3F0] hover:text-white"
          >
            {page + 1}
          </button>
        )}
      </div>
    </>
  );
}

export default MainPage;
