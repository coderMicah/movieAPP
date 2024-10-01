import Filters from "@/components/Filters";
import MoviePagination from "@/components/MoviePagination";
import Movies from "@/components/Movies";
import { getData } from "@/lib/client";

const MoviesPage = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) => {
  const page = searchParams.page || "1";
  const sort_by = searchParams.sort_by || "";
  const with_genres = searchParams.genre || "";

  const sP = new URLSearchParams();
  sP.append("page", page);
  sP.append("sort_by", sort_by);
  sP.append("with_genres", with_genres);

  const data = await getData<IMovie>("movie", sP);

  return (
    <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4 mt-16">
      {/* Sidebar */}
      <aside>
        <Filters />
      </aside>

      {/* Movies */}
      <div className="lg:col-span-3 sm:px-6">
        <Movies movies={data.results} />
        <MoviePagination
          className={"mb-10"}
          page={data.page}
          total_pages={data.total_pages}
          total_results={data.total_results}
        />
      </div>
    </div>
  );
};

export default MoviesPage;
