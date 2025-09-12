import Link from "next/link";
import Image from "next/image";

interface CarouselCardsProps {
  imgSrc: string;
  feature: string;
  link: string;
  hoverText: string;
  prevImgSrc: string;
  prevFeature: string;
  nextImgSrc: string;
  nextFeature: string;
}

export default function CarouselCards({
  imgSrc,
  feature,
  link,
  hoverText,
  prevImgSrc,
  prevFeature,
  nextImgSrc,
  nextFeature,
}: CarouselCardsProps) {
  return (
    <div className="flex items-center">
      <div className="group relative z-0 overflow-hidden rounded-xl opacity-70 md:-mr-12 md:h-44 md:w-[250px] lg:-mr-32 lg:h-52 lg:w-[350px]">
        <Image
          src={prevImgSrc}
          alt={`${prevFeature} image`}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <span className="bg-moody-grey/40 absolute left-1/2 top-1 z-10 inline-block -translate-x-1/2 items-center justify-center whitespace-nowrap rounded-md px-2 pt-1 text-center text-white">
          {prevFeature}
        </span>
      </div>
      <Link href={link}>
        <div className="group relative z-10 overflow-hidden rounded-xl md:h-52 md:w-[350px] lg:h-64 lg:w-[400px]">
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
      <div className="group relative z-0 -ml-12 overflow-hidden rounded-xl opacity-70 md:h-44 md:w-[250px] lg:-ml-32 lg:h-52 lg:w-[350px]">
        <Image
          src={nextImgSrc}
          alt={`${nextFeature} image`}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <span className="bg-moody-grey/40 absolute left-1/2 top-1 z-10 inline-block -translate-x-1/2 items-center justify-center whitespace-nowrap rounded-md px-2 pt-1 text-center text-white">
          {nextFeature}
        </span>
      </div>
    </div>
  );
}
