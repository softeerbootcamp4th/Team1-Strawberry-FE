import { useEffect } from "react";

import usePage from "../usePage";

import { PaginationProps } from "../../components/Pagination";

function usePagination(props: PaginationProps) {
  const { totalPages, currentPage, onPageChange } = props;

  const pagesToShow = 5;
  const { visiblePages, updateVisiblePages } = usePage({
    totalPages,
    pagesToShow,
  });

  useEffect(() => {
    updateVisiblePages(currentPage);
  }, [currentPage, totalPages]);

  const handlePage = (page: number) => {
    onPageChange(page);
    updateVisiblePages(page);
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return { visiblePages, handlePage, handlePrevious, handleNext };
}

export default usePagination;
