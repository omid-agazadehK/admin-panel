import Search from "@/components/Search";
import useModal from "@/hooks/useModal";
import { useProducts } from "@/services/queries";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";

export default function Home() {
  const { push } = useRouter();
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const { data } = useProducts(search, page);
  const { closeModal, modalType } = useModal();
  useEffect(() => {
    const token = Cookies.get("accessToken");

    if (!token) {
      push("/login");
    }
  }, [push]);

  return (
    <>
      <Toaster />
      <Search search={search} setSearch={setSearch} setPage={setPage} />

    </>
  );
}
