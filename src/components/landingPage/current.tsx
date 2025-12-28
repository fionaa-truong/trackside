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
    <div className="grid h-40 w-[350px] grid-cols-1 items-center gap-3 rounded-b-lg border-t-2 border-white bg-black text-blue-white md:h-24 md:w-[750px] md:grid-cols-3 md:flex-row md:gap-0 lg:h-32 lg:w-[850px] lg:grid-cols-5">
      <div className="col-span-1 lg:col-span-2">
        <div className="flex flex-row items-center justify-center gap-5 md:gap-2 lg:gap-0">
          <div className="relative mt-3 h-16 w-16 md:mt-0 lg:-ml-6 lg:h-24 lg:w-24">
            <Image
              src={imgSrc}
              alt="Track Outline"
              fill
              className="bg-[#E3DCE3] object-contain p-1 md:mx-4"
            />
          </div>
          <div className="mt-3 flex flex-col justify-center text-xs md:ml-6 md:mt-0 md:text-sm lg:text-base">
            <span>{circuit}</span>
            <span>{location}</span>
            <span>
              Race: {date}, {time} UTC
            </span>
          </div>
        </div>
      </div>
      <div className="col-span-2 lg:col-span-3">
        <div className="flex flex-col items-center justify-center gap-2 text-xs md:ml-2 md:gap-5 md:text-sm lg:ml-6 lg:text-base">
          <div className="flex flex-row items-center gap-3 md:gap-5">
            <div>00.000</div>
            <div className="relative h-2 w-52 bg-dove-grey md:w-72">
              <div className="absolute left-0 top-0 h-2 w-2 bg-white" />
            </div>

            <div>{distance}</div>
          </div>
          <div className="relative mb-2 flex h-8 w-40 flex-row items-center gap-14 md:mb-0 md:w-52 lg:h-10 lg:w-64">
            <Image
              src="/landingPage/player.png"
              alt="Music Controls"
              fill
              className="items-center object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
