import Image from "next/image";

export default function NotFound() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center gap-8">
      <div className="relative h-1/2 w-3/4">
        <Image
          src="/gifs/lights_out.gif"
          alt="loading animation"
          fill
          className="object-contain"
        />
      </div>
      <span className="text-lg font-semibold text-red-500 md:text-xl">
        404 - Page Not Found...
      </span>
    </div>
  );
}
