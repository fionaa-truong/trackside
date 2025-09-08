import Image from "next/image";

export default function About() {
  return (
    <div className="mt-8 grid w-[350px] grid-cols-1 items-center justify-center gap-8 md:w-[750px] md:grid-cols-3 lg:w-[850px]">
      <div className="relative h-full w-full md:col-span-1">
        <Image
          src="/trackside_cropped.png"
          alt="trackside logo"
          fill
          className="object-contain"
        />
      </div>

      <span className="items-center justify-center md:col-span-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum
      </span>
    </div>
  );
}
