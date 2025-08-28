import Image from "next/image";

export default function Loading() {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <Image
        src="/gifs/lights_out.gif"
        alt="loading animation"
        width={600}
        height={600}
        className="flex items-center justify-center"
      />
    </div>
  );
}
