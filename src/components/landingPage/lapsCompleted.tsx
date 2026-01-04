import { getTotalLapsCompleted } from "@/lib/stats";

export default async function LapsCompleted() {
  const laps = await getTotalLapsCompleted(2025);

  return (
    <div className="h-32 w-60 rounded-xl bg-dusty-blue">
      <div className="mx-8 flex h-full flex-row items-center justify-center gap-5">
        <span className="text-6xl text-white">{laps}</span>
        <span className="text-md whitespace-pre-line text-start text-white">
          Laps {"\n"} Completed
        </span>
      </div>
    </div>
  );
}
