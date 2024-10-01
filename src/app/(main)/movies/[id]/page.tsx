import Movie from "@/components/Movie";
import { getMovieData } from "@/lib/client";
import React from "react";

const MoviePage = async ({ params }: { params: { id: string } }) => {
  const movieData = await getMovieData<IMovieData>(params.id);

  return (
    <main className="mt-16">
      <Movie movieData={movieData} />
    </main>
  );
};

export default MoviePage;
