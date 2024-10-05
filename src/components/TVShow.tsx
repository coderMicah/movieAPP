import { getImage } from "@/lib/images";
import { cn, generateTMDBImageUrl } from "@/lib/utils";
import Image from "next/image";
import { buttonVariants } from "./ui/button";
import { PlayIcon } from "lucide-react";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "./ui/dialog";
import {  getTMDBVideos } from "@/lib/client";
import VideoPlayer from "./VideoPlayer";
import { Suspense } from "react";

const TVShow = async (showData: { showData: ITVShowData  }) => {
  const show = showData.showData;
  const imagePath = generateTMDBImageUrl(show.backdrop_path, "w780");
  const { base64 } = await getImage(imagePath);

  const videos = await getTMDBVideos("tv",show.id)

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

        <div className="layoutContainer absolute top-[50%] z-20 mx-auto flex w-full max-w-[85rem] translate-y-[-50%] flex-col items-start space-y-3 text-white md:space-y-6">
          <h2 className="text-2xl capitalize md:text-4xl">{show.name}</h2>

          <div className="flex">
            {show.genres.map((genre, index) => {
              const showSeparator = index < show.genres.length - 1;
              return (
                <p className="text-xs md:text-sm" key={genre?.id}>
                  <span>{genre?.name}</span>
                  {showSeparator && <span className="mx-1">|</span>}
                </p>
              );
            })}
          </div>

          <div className="md:w-1/2">
            <p className="text-sm md:text-base">{show.overview}</p>
          </div>

          {trailer && (
            <Dialog>
              <DialogTrigger>
                <p
                  className={cn(
                    buttonVariants(),
                    "flex gap-x-2 bg-red-600 hover:bg-red-600/50",
                  )}
                >
                  <PlayIcon size={16} />
                  Play Trailer
                </p>
              </DialogTrigger>
              <DialogContent className="p-0 md:max-w-3xl">
                <DialogTitle className="px-1 pt-4 text-xs">
                  Movie Trailer
                </DialogTitle>
                <Suspense fallback={<p>Loading video...</p>}>
                  <VideoPlayer id={trailer.key} />
                </Suspense>
              </DialogContent>
            </Dialog>
          )}
        </div>
      </div>
    </div>
  );
};

export default TVShow;
