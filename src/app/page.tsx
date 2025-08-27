import Image from "next/image";

export default function Home() {
  return (
    <div className="grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20">
      <h1>hello world</h1>
      <Image src="/favicon.ico" alt="trackside_logo" width={50} height={50} />
    </div>
  );
}
