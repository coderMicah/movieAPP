import MovieCard from "./MovieCard";
import Sort from "./Sort";


const TVShows = ({shows}:{shows:ITVShow[]}) => {
    
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6  lg:max-w-7xl lg:px-8">
        <div className="flex justify-between border-b border-gray-200 pb-6 mb-6">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            TV Shows
          </h2>
          <Sort />
        </div>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {shows.map((show) => (
            <MovieCard
              key={show.id}
              imageSrc={show.poster_path}
              href={show.id}
              name={show.name}
              release_date={show.first_air_date}
              vote_avg={show.vote_average}
              vote_count={show.vote_count}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TVShows;
