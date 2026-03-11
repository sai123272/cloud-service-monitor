export default function Pagination({
  currentPage,
  totalItems,
  pageSize,
  onPageChange
}) {

  const totalPages = Math.ceil(totalItems / pageSize);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
        gap: "10px",
        marginTop: "20px"
      }}
    >

      <button
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        {"<"}
      </button>

      <span>
        Page {currentPage} / {totalPages}
      </span>

      <button
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        {">"}
      </button>

    </div>
  );
}