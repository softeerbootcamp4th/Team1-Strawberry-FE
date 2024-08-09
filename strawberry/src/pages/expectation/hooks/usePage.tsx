import { useState } from "react";

interface PageProps {
  totalPages: number;
  pagesToShow: number;
}

const usePage = ({ totalPages, pagesToShow }: PageProps) => {
  const [visiblePages, setVisiblePages] = useState(
    Array.from({ length: Math.min(totalPages, pagesToShow) }, (_, i) => i + 1),
  );

  const updateVisiblePages = (newPage: number) => {
    const startPage = Math.floor((newPage - 1) / pagesToShow) * pagesToShow + 1;
    const endPage = Math.min(startPage + pagesToShow - 1, totalPages);
    const newVisiblePages = Array.from(
      { length: endPage - startPage + 1 },
      (_, i) => startPage + i,
    );
    setVisiblePages(newVisiblePages);
  };

  return { visiblePages, updateVisiblePages };
};

export default usePage;
