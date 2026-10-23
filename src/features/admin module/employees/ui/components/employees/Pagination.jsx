
import React from "react";

const Pagination = ({ pagination, onPageChange }) => {
  const {
    page,
    total,
    limit,
    totalPages,
  } = pagination || {};

  const start = total === 0 ? 0 : (page - 1) * limit + 1;
  const end = Math.min(page * limit, total);

  // Generate page numbers
const pages = Array.from(
  { length: Math.min(5, totalPages) },
  (_, index) => index + 1
);

  return (
    <div className="flex flex-col gap-4 border-t border-slate-200 bg-white px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
      <p className="text-sm text-slate-500">
        Showing{" "}
        <span className="font-semibold text-slate-800">{start}</span>
        {" "}to{" "}
        <span className="font-semibold text-slate-800">{end}</span>
        {" "}of{" "}
        <span className="font-semibold text-slate-800">{total}</span>
        {" "}employees
      </p>

      <div className="flex flex-wrap items-center gap-2">
        {/* Previous Button */}
        <button
          type="button"
          onClick={() => onPageChange(page - 1)}
          disabled={page <= 1}
          className="rounded-lg border border-slate-200 px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-40"
        >
          Previous
        </button>

        {/* Page Numbers */}
        {pages.map((pageNumber) => (
          <button
            key={pageNumber}
            type="button"
            onClick={() => onPageChange(pageNumber)}
            className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
              page === pageNumber
                ? "bg-indigo-600 text-white"
                : "border border-slate-200 text-slate-600 hover:bg-slate-100"
            }`}
          >
            {pageNumber}
          </button>
        ))}

        {/* Next Button */}
        <button
          type="button"
          onClick={() => onPageChange(page + 1)}
          disabled={page >= totalPages}
          className="rounded-lg border border-slate-200 px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-40"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
