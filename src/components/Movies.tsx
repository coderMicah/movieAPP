import MovieCard from "./MovieCard";
import Sort from "./Sort";


const Movies = ({movies}:{movies:IMovie[]}) => {

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6  lg:max-w-7xl lg:px-8">
        <div className="flex justify-between border-b border-gray-200 pb-6 mb-6">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Movies Title
          </h2>
          <Sort />
        </div>

        {!movies?.length ? (
        <p className="text-center text-muted-foreground col-span-full">
          No books found.
        </p>
      ) : ( <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            imageSrc={movie.poster_path}
            href={movie.id}
            name={movie.title}
            release_date={movie.release_date}
            vote_avg={movie.vote_average}
            vote_count={movie.vote_count}
          />
        ))}
      </div>)}

       
      </div>
    </div>
  );
};

export default Movies;
