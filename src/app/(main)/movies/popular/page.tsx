import Movies from "@/components/Movies";
import { popularMovies } from "@/lib/client";

const PopularPage = async () => {
  const data = await popularMovies("").json<IPaginatedResponse<IMovie>>();

  return <Movies movies={data.results} />;
};

export default PopularPage;
