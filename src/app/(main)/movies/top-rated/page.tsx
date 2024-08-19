import Movies from '@/components/Movies';
import { topRatedMovies } from '@/lib/client';


const TopRatedPage = async () => {
  const data = await topRatedMovies.get("").json<IPaginatedResponse<IMovie>>();
  return (
    <Movies movies={data.results} />
  )
}

export default TopRatedPage

