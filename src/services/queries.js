import api from "@/config/api";
import { useQuery } from "@tanstack/react-query";

const useProducts = (search, page) => {
  function getProducts() {
    return api.get(`/products?name=${search.toLowerCase()}`);
  }
  return useQuery({
    queryKey: ["products", search, page],
    queryFn: getProducts,
  });
};
export { useProducts };
