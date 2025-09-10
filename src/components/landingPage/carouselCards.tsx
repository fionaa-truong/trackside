import Link from "next/link";
import Image from "next/image";

interface CarouselCardsProps {
  imgSrc: string;
  feature: string;
  link: string;
  hoverText: string;
}

export default function CarouselCards({
  imgSrc,
  feature,
  link,
  hoverText,
}: CarouselCardsProps) {
  return (
    <Link href={link}>
      <div className="group relative h-52 w-[350px] overflow-hidden rounded-xl">
        <Image
          src={imgSrc}
          alt={`${feature} image`}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <span className="bg-moody-grey/40 absolute left-1/2 top-1 z-10 inline-block -translate-x-1/2 items-center justify-center whitespace-nowrap rounded-md px-2 pt-1 text-center text-white">
          {feature}
        </span>

        <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <span className="px-2 text-center text-sm text-white">
            {hoverText}
          </span>
        </div>
      </div>
    </Link>
  );
}
