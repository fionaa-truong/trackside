import Image from "next/image";

export default function Loading() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center">
      <div className="relative h-1/4 w-1/4">
        <Image
          src="/gifs/not_found.gif"
          alt="loading animation"
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
}
