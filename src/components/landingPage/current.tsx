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
    <div className="text-blue-white flex h-32 w-[850px] flex-row items-center rounded-b-lg border-t-2 border-white bg-black">
      <div className="relative h-24 w-24">
        <Image
          src={imgSrc}
          alt="Track Outline"
          fill
          className="mx-4 bg-[#E3DCE3] object-contain p-1"
        />
      </div>
      <div className="ml-8 flex flex-col">
        <span>{circuit}</span>
        <span>{location}</span>
        <span>
          Race: {date}, {time} UTC
        </span>
      </div>
      <div className="ml-6 flex flex-col items-center justify-center gap-5">
        <div className="ml-2 flex flex-row items-center gap-5">
          <div>00.000</div>
          <div className="bg-dove-grey relative h-2 w-72">
            <div className="absolute left-0 top-0 h-2 w-2 bg-white" />
          </div>

          <div>{distance}</div>
        </div>
        <div className="relative ml-1 flex h-10 w-64 flex-row items-center gap-14">
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
