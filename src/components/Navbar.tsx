import Image from "next/image";
import Link from "next/link";

export default function navbar() {
  return (
    <div className="flex w-full flex-row items-center justify-between bg-sky-blue px-5 py-3">
      <Link href="/" className="hover:scale-105">
        <Image
          src="/trackside_cropped.png"
          alt="trackside logo"
          width={100}
          height={50}
        />
      </Link>
      {/** hamburger for small screens and animate to have it coming from the right */}
      <div className="mr-2 flex flex-row items-center justify-between gap-10 lg:gap-16">
        <Link href="/">
          <span className="hover:text-ocean-blue font-semibold hover:underline">
            Standings
          </span>
        </Link>
        <Link
          href="/"
          className="hover:text-ocean-blue font-semibold hover:underline"
        >
          <span>Projections</span>
        </Link>
        <Link
          href="/"
          className="hover:text-ocean-blue font-semibold hover:underline"
        >
          <span>Circuit Info</span>
        </Link>
        <Link
          href="/"
          className="hover:text-ocean-blue font-semibold hover:underline"
        >
          <span>Upcoming Races</span>
        </Link>
        <Link href="/">
          <Image
            src="/svgs/pfp.svg"
            alt="trackside logo"
            width={50}
            height={50}
            className="hover:scale-105"
          />
        </Link>
      </div>
    </div>
  );
}
