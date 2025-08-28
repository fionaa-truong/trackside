import Image from "next/image";

export default function NotFound() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center gap-8">
      <Image
        src="/gifs/not_found.gif"
        alt="loading animation"
        width={400}
        height={400}
        className="flex items-center justify-center"
      />
      <span className="text-lg font-semibold text-red-500">
        404 - Page Not Found...
      </span>
    </div>
  );
}
