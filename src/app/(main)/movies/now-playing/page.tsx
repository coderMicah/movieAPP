import MoviePagination from "@/components/MoviePagination";
import Movies from "@/components/Movies";
import { client, nowPlayingMovies } from "@/lib/client";

const NowPlayingPage = async ({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string };
}) => {
  const page = searchParams.page || "1";

  const data = await client
    .extend((options) => ({
      prefixUrl: `${options.prefixUrl}/now_playing?language=en-US`,
      searchParams: { page: page },
    }))
    .get("")
    .json<IPaginatedResponse<IMovie>>();

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

export default NowPlayingPage;
