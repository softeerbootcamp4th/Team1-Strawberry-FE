import styled from "styled-components";

import Arrow_Left_L_Gray from "/src/assets/images/icons/Arrow_Left_L_Gray.svg";
import Arrow_Right_L_Gray from "/src/assets/images/icons/Arrow_Right_L_Gray.svg";

import usePagination from "../hooks/logics/usePagination";

export interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (arg: number) => void;
}

interface PageNumberProps {
  $active: boolean;
}

const Pagination = (props: PaginationProps) => {
  const { totalPages, currentPage, onPageChange } = props;

  const { visiblePages, handlePage, handlePrevious, handleNext } =
    usePagination({ totalPages, currentPage, onPageChange });

  return (
    <PaginationWrapper>
      <PaginationLeftButton
        onClick={handlePrevious}
        disabled={currentPage === 1}
      >
        <img src={Arrow_Left_L_Gray} alt="이전" />
        이전
      </PaginationLeftButton>
      {visiblePages.map((page) => (
        <PageNumber
          key={page}
          onClick={() => handlePage(page)}
          $active={page === currentPage}
        >
          {page}
        </PageNumber>
      ))}
      <PaginationRightButton
        onClick={handleNext}
        disabled={currentPage === totalPages}
      >
        다음
        <img src={Arrow_Right_L_Gray} alt="다음" />
      </PaginationRightButton>
    </PaginationWrapper>
  );
};

export default Pagination;

const PaginationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
`;

const PaginationButton = styled.button`
  background-color: ${({ theme }) => theme.Color.Common.white};
  display: flex;
  height: 40px;
  padding: 6px 8px;
  flex-direction: row;
  box-sizing: border-box;
  white-space: nowrap;
  align-items: center;
  margin: 0 4px;
  ${({ theme }) => theme.Typography.Body1Regular}
  color: ${({ theme }) => theme.Color.TextIcon.sub};

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

const PaginationLeftButton = styled(PaginationButton)`
  padding: 6px 8px 6px 4px;
`;

const PaginationRightButton = styled(PaginationButton)`
  padding: 6px 4px 6px 8px;
`;

const PageNumber = styled.button<PageNumberProps>`
  background-color: ${({ $active, theme }) =>
    $active ? theme.Color.Primary.normal : theme.Color.Common.white};
  display: flex;
  width: 40px;
  height: 40px;
  padding: 6px 0px;
  margin: 0 4px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  ${({ theme }) => theme.Typography.Body1Regular};
  color: ${({ $active, theme }) =>
    $active ? theme.Color.Common.white : theme.Color.TextIcon.sub};
  border: 1px solid ${({ theme }) => theme.Color.Border.default};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme, $active }) =>
    $active ? theme.Color.Primary.normal : theme.Color.TextIcon.reverse};
  }
`;
