import { generateTMDBImageUrl } from "@/lib/utils";
import Image from "next/image";

const Movie = (movieData: { movieData: IMovieData }) => {
  const data = movieData.movieData;
  const imagePath = generateTMDBImageUrl(data.backdrop_path,"w780");

  return (
    <div className="mt-16">
      <div className="absolute h-full w-full -z-50">
        <div className="absolute z-10 bg-black opacity-60 w-full h-full"/>
        <Image
          src={imagePath}
          alt="poster-image"
          fill
          objectFit="cover"
          className="absolute"
        />
      </div>
    </div>
  );
};

export default Movie;
