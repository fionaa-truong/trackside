import Image from "next/image";

export default function Loading() {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="relative h-1/2 w-1/2">
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
