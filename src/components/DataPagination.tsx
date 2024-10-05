"use client";
import { cn } from "@/lib/utils";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationLink,
  PaginationEllipsis,
  PaginationNext,
} from "./ui/pagination";
import { useRouter, useSearchParams } from "next/navigation";

interface IDataPaginationProps {
  page: number;
  className?: string;
  total_pages: number;
  total_results: number;
}
const DataPagination = ({
  className,
  page,
  total_pages,
  total_results,
}: IDataPaginationProps) => {
 


  const router = useRouter();

  const handleNext = () => {
    if (total_pages > page) {
      router.push(`?page=${page + 1}`);
    }
    return;
  };
  const handlePrev = () => {
    if (page > 1) {
      router.push(`?page=${page - 1}`);
    }
    return;
  };

  const handlePageChange = (i: number) => {
    router.push(`?page=${i}`);
  };



  const renderPageNumbers = () => {
    const startPage = Math.max(page - 2, 1);
    const endPage = Math.min(page + 2, total_pages);
  
    const pageNumbers = [];
    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <PaginationItem
          key={i}
          onClick={() => handlePageChange(i)}
        //   disabled={i === page}
        >
          <PaginationLink isActive={i === page}>{i}</PaginationLink>
        </PaginationItem>
      );
    }
  
    return pageNumbers.slice(0,3);
  };
  

  return (
    <div className={cn(className)}>
      <Pagination>
        <PaginationContent>

          <PaginationItem>
            <PaginationPrevious onClick={handlePrev} />
          </PaginationItem>

          {renderPageNumbers()}
          
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>

          <PaginationItem>
            <PaginationNext onClick={handleNext} />
          </PaginationItem>

        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default DataPagination;
