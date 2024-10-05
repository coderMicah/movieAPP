import { getImage } from "@/lib/images";
import { generateTMDBImageUrl } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

interface ICardProps {
  imageSrc: string;
  href: number;
  name: string;
}
const PersonCard = async ({ name, imageSrc, href }: ICardProps) => {
//   const imagePath = generateTMDBImageUrl(imageSrc, "w500");
//   const { base64 } = await getImage(imagePath);
  return (
    <div className="group relative">
      <div className="aspect-h-1 aspect-w-1 lg:aspect-none w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 md:h-80 lg:h-96">
        <Image
          alt={name}
          src={generateTMDBImageUrl(imageSrc, "w500")}
        //   placeholder="empty"
        //   blurDataURL={base64}
          width={300}
          height={320}
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
        />
      </div>
      <div className="mt-2 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
            <Link href={`/people/${String(href)}`}>
              <span aria-hidden="true" className="absolute inset-0" />
              {name}
            </Link>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default PersonCard;
