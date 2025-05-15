import Product from "./Product";

function ProductsList({ data }) {
  return (
    <div className="mt-4 rounded-3xl border border-borderLight bg-white">
      <div className="flex w-full items-center justify-between rounded-tl-3xl rounded-tr-3xl bg-[#F2F2F2] px-14 py-6 text-right">
        <span className="w-1/6">نام کالا</span>
        <span className="w-1/6">موجودی</span>
        <span className="w-1/6">قیمت</span>
        <span className="w-3/6">شناسه کالا</span>
      </div>
      <div className="relative h-[610px] divide-y">
        {!data ? (
          <span className="absolute left-1/2 top-2 -translate-x-1/2 text-2xl tracking-wider text-gray-700">
            هیچ کالای وجد ندارد
          </span>
        ) : (
          <Product data={data} />
        )}
      </div>
    </div>
  );
}

export default ProductsList;
