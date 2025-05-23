import { logOutHandler } from "@/utils/helper";
import { useRouter } from "next/router";

function Search({ setSearch, setPage, search }) {
  const { push } = useRouter();
  return (
    <form className="relative flex w-full rounded-2xl border border-borderLight bg-white py-5 pl-7 pr-16">
      <input
        className="w-11/12 text-textDark placeholder:text-black/60 focus:outline-none"
        placeholder="جستجو  کالا"
        onChange={(e) => {
          setSearch(e.target.value);
          setPage(1);
        }}
        value={search}
        type="text"
      />
      <svg
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="absolute right-5 top-1/2 size-7 -translate-y-1/2 text-textDark"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
        />
      </svg>
      <span
        onClick={() => logOutHandler(push)}
        className="border-left relative w-2/12 cursor-pointer text-center hover:text-gray-500"
      >
        خروج از حساب
      </span>
    </form>
  );
}

export default Search;
