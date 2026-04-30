import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";

export const Pagination = ({ page, setPage, info }) => {
  const handlePrev = () => {
    setPage(page - 1);
  };

  const handleNext = () => {
    setPage(page + 1);
  };

  const prevDisabled = !info?.prev;
  const nextDisabled = !info?.next;

  return (
    <div className="flex gap-4 justify-center items-center">
      <button
        onClick={handlePrev}
        disabled={prevDisabled}
        className={`bg-slate-800/50 p-2 text-white rounded-lg ${prevDisabled && "opacity-50 cursor-not-allowed"}`}
      >
        <ChevronLeft />
      </button>
      <p>{page}</p>
      <button
        onClick={handleNext}
        disabled={nextDisabled}
        className={`bg-slate-800/50 p-2 text-white rounded-lg  ${nextDisabled && "opacity-50 cursor-not-allowed"}`}
      >
        <ChevronRight />
      </button>
    </div>
  );
};
