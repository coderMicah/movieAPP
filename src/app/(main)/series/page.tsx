import Filters from "@/components/Filters";
import TVShows from "@/components/TVShows";
import { getTMDBList } from "@/lib/client";
import DataPagination from "@/components/DataPagination";

const SeriesPage = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) => {
  const page = searchParams.page || "1";
  const sort_by = searchParams.sort_by || "popularity.desc";
  const with_genres = searchParams.genre || "";

  const sP = new URLSearchParams();
  sP.append("page", page);
  sP.append("sort_by", sort_by);
  sP.append("with_genres", with_genres);

  const data = await getTMDBList<ITVShow>("tv", sP);

  return (
    <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
      {/* Sidebar */}
      <aside>
        <Filters />
      </aside>

      {/* Movies */}
      <div className="sm:px-6 lg:col-span-3">
        <TVShows shows={data.results} />
        <DataPagination
          className={"mb-10"}
          page={data.page}
          total_pages={data.total_pages}
          total_results={data.total_results}
        />
      </div>
    </div>
  );
};

export default SeriesPage;
