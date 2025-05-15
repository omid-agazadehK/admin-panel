function Pagination({ page, setPage, data }) {
  return (
    <div className="mt-2 flex items-center justify-center gap-2">
      {page > 1 && (
        <button
          onClick={() => setPage(page - 1)}
          className="border-placeholderGray/50 text-placeholderGray/40 text-50 size-9 rounded-full border-2 transition-colors duration-150 hover:border-none hover:bg-btnBlue hover:text-white"
        >
          {page - 1}
        </button>
      )}
      <button
        disabled
        className="size-9 cursor-not-allowed rounded-full bg-btnBlue text-lg text-white"
      >
        {page}
      </button>
      {page < data?.totalPages && (
        <button
          onClick={() => setPage(page + 1)}
          className="border-placeholderGray/50 text-placeholderGray/40 text-50 size-9 rounded-full border-2 transition-colors duration-150 hover:border-none hover:bg-btnBlue hover:text-white"
        >
          {page + 1}
        </button>
      )}
    </div>
  );
}

export default Pagination;
