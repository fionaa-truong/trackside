import Image from "next/image";

interface CurrentProps {
  circuit: string;
  location: string;
  date: string;
  time: string;
  distance: number;
  imgSrc: string;
}

export default function Current({
  circuit,
  location,
  date,
  time,
  distance,
  imgSrc,
}: CurrentProps) {
  return (
    <div className="text-blue-white flex h-40 w-[350px] flex-col items-center gap-3 rounded-b-lg border-t-2 border-white bg-black md:h-24 md:w-[750px] md:flex-row md:gap-0 lg:h-32 lg:w-[850px]">
      <div className="flex flex-row">
        <div className="relative -mx-8 mt-3 h-16 w-16 md:mx-0 md:mt-0 lg:h-24 lg:w-24">
          <Image
            src={imgSrc}
            alt="Track Outline"
            fill
            className="-mx-12 bg-[#E3DCE3] object-contain p-1 md:mx-4"
          />
        </div>
        <div className="flex flex-col justify-center text-xs md:ml-8 md:text-sm lg:text-base">
          <span>{circuit}</span>
          <span>{location}</span>
          <span>
            Race: {date}, {time} UTC
          </span>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-2 text-xs md:ml-2 md:gap-5 md:text-sm lg:ml-6 lg:text-base">
        <div className="flex flex-row items-center gap-3 md:ml-2 md:gap-5">
          <div>00.000</div>
          <div className="bg-dove-grey relative h-2 w-52 md:w-72">
            <div className="absolute left-0 top-0 h-2 w-2 bg-white" />
          </div>

          <div>{distance}</div>
        </div>
        <div className="relative ml-1 flex h-8 w-40 flex-row items-center gap-14 md:w-52 lg:h-10 lg:w-64">
          <Image
            src="/landingPage/player.png"
            alt="Music Controls"
            fill
            className="items-center object-contain"
          />
        </div>
      </div>
    </div>
  );
}
