function Search({ setSearch, setPage, search }) {
  return (
    <form className="relative flex w-full rounded-2xl border border-[#E4E4E4] bg-white py-5 pl-7 pr-16">
      <input
        className="w-full text-[#282828] placeholder:text-[#00000099] focus:outline-none"
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
        className="absolute right-5 top-1/2 size-7 -translate-y-1/2 text-[#282828]"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
        />
      </svg>
      <div></div>
    </form>
  );
}

export default Search;
