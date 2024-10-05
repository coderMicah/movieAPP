import Movie from "@/components/Movie";
import { getTMDbData } from "@/lib/client";
import React from "react";

const MoviePage = async ({ params }: { params: { id: string } }) => {
  const movieData = await getTMDbData<IMovieData>("movie", params.id);

  return (
    <main className="mt-16">
      <Movie movieData={movieData} />
    </main>
  );
};

export default MoviePage;
