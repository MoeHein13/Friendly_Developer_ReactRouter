type PaginationType = {
  currentPage: number;
  totalPage: number;
  setCurrentPage: (page: number) => void;
};

const Pagination: React.FC<PaginationType> = ({
  currentPage,
  totalPage,
  setCurrentPage,
}) => {
  if (totalPage <= 1) return null;
  return (
    <>
      {" "}
      <div className="flex items-center justify-center gap-2 mt-8">
        {Array.from({ length: totalPage }, (_, indx) => (
          <button
            key={indx + 1}
            className={`py-1 px-2 rounded cursor-pointer ${
              currentPage === indx + 1
                ? "bg-blue-700 text-white"
                : "bg-gray-700 text-gray-200"
            }`}
            onClick={() => setCurrentPage(indx + 1)}
          >
            {indx + 1}
          </button>
        ))}
      </div>
    </>
  );
};

export default Pagination;
