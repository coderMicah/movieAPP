"use client"

import { generateTMDBImageUrl } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface IMovieCardProps {
  imageSrc: string;
  href: number;
  name: string;
  vote_avg: number;
  vote_count: number;
  release_date: string;
}
const MovieCard = ({
  name,
  imageSrc,
  href,
  vote_avg,
  vote_count,
}: IMovieCardProps) => {
  const pathname = usePathname();


  return (
    <div className="group relative">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
        <Image
          alt={name}
          src={generateTMDBImageUrl(imageSrc, "w342")}
          width={300}
          height={320}
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
        />
      </div>
      <div className="mt-2 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
            <Link href={pathname.includes("series") ?`/series/${String(href)}` : `/movies/${String(href)}`}>
              <span aria-hidden="true" className="absolute inset-0" />
              {name}
            </Link>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
