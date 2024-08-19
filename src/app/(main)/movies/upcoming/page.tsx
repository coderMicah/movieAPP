import Movies from '@/components/Movies'
import { upcomingMovies } from '@/lib/client'


const UpcomingPage = async () => {
  const data = await upcomingMovies.get("").json<IPaginatedResponse<IMovie>>()
  return (
    <Movies movies={data.results}/>
  )
}

export default UpcomingPage