import { getImage } from "@/lib/images";
import { generateTMDBImageUrl } from "@/lib/utils";
import Image from "next/image";
import { Button } from "./ui/button";
import { PlayIcon } from "lucide-react";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "./ui/dialog";
import { client } from "@/lib/client";
import VideoPlayer from "./VideoPlayer";
import { Suspense } from "react";

const Movie = async (movieData: { movieData: IMovieData }) => {
  const movie = movieData.movieData;
  const imagePath = generateTMDBImageUrl(movie.backdrop_path, "w780");
  const { base64 } = await getImage(imagePath);

  const videos = await client
    .get(`movie/${movie.id}/videos`)
    .json<IVideoData>();

  const trailer = videos.results.filter(
    (video) => video.type === "Trailer" && video.site === "YouTube",
  )[0];

  return (
    <div className="mt-16">
      <div className="relative z-10 h-[90vh]">
        <div className="h-full w-full">
          <div className="absolute z-10 h-full w-full bg-black opacity-60" />
          <Image
            src={imagePath}
            alt="poster-image"
            fill
            placeholder="blur"
            blurDataURL={base64}
            objectFit="cover"
          />
        </div>

        <div className="layoutContainer absolute top-[50%] z-20 mx-auto flex w-full max-w-[85rem] translate-y-[-50%] flex-col items-start space-y-6 text-white">
          <h2 className="text-4xl capitalize">{movie.title}</h2>

          <div className="flex">
            {movie.genres.map((genre, index) => {
              const showSeparator = index < movie.genres.length - 1;
              return (
                <p key={genre?.id}>
                  <span>{genre?.name}</span>
                  {showSeparator && <span className="mx-1">|</span>}
                </p>
              );
            })}
          </div>

          <div className="md:w-1/2">
            <p>{movie.overview}</p>
          </div>

          {trailer && (
            <Dialog>
              <DialogTrigger>
                <Button className="flex gap-x-2 bg-red-600 hover:bg-red-600/50">
                  <PlayIcon size={16} />
                  Play Trailer
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-3xl p-0">
                <DialogTitle className="px-1 pt-4 text-xs">Movie Trailer</DialogTitle>
                <Suspense fallback={<p>Loading video...</p>}>
                  <VideoPlayer id={trailer.key} />
                </Suspense>
              </DialogContent>
            </Dialog>
          )}
        </div>
      </div>

      <div className="layoutContainer">
        <h3>Cast</h3>
        
      </div>
    </div>
  );
};

export default Movie;
