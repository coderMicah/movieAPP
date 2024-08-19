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

interface IMoviePaginationProps {
  page: number;
  className?: string;
  total_pages: number;
  total_results: number;
}
const MoviePagination = ({
  className,
  page,
  total_pages,
  total_results,
}: IMoviePaginationProps) => {
  //   let url = new URL("https://api.themoviedb.org/3/movie");
  //   let params = new URLSearchParams();
  //   params.append("page", "1");

  console.log(
    "Search Params",
    total_pages,
    // total_results,
    page,
    // total_results / total_pages
  );

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

//   const renderPageNumbers = () => {
//     const pageNumbers = [];
//     for (let i = 1; i <= total_pages; i++) {
//       pageNumbers.push(
//         <button
//           key={i}
//           onClick={() => handlePageChange(i)}
//           className={i === page ? "active" : ""}
//           disabled={i === page}
//         >
//           {i}
//         </button>
//       );
//     }
//     return pageNumbers.slice(page,-3);
//   };

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

export default MoviePagination;
