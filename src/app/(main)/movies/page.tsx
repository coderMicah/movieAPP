
import MoviePagination from "@/components/MoviePagination";
import Movies from "@/components/Movies";
import { getData } from "@/lib/client";

const PopularPage = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) => {
  const page = searchParams.page || "1";
  const sort_by = searchParams.sort_by || "";
  const with_genres = searchParams.with_genres || ""

  const sP = new URLSearchParams();
  sP.append("page", page);
  sP.append("sort_by", sort_by);
  sP.append("with_genres", with_genres);

  const data = await getData<IMovie>("movie",sP);

  return (
    <>
      <Movies movies={data.results} />
      <MoviePagination
        className={"mb-10"}
        page={data.page}
        total_pages={data.total_pages}
        total_results={data.total_results}
      />
    </>
  );
};

export default PopularPage;
