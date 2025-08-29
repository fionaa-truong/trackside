import Image from "next/image";

export default function About() {
  return (
    <div className="mt-8 flex flex-col justify-center gap-8 p-5 md:flex-row">
      <Image
        src="/trackside_cropped.png"
        alt="trackside logo"
        width={400}
        height={200}
      />
      <span className="items-center justify-center">
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
