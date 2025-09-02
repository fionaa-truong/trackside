export default function LapsCompleted() {
  // TODO: makes laps completed dynamic
  return (
    <div className="bg-dusty-blue h-32 w-60 rounded-xl">
      <div className="mx-8 flex h-full flex-row items-center justify-center gap-5">
        <span className="text-6xl text-white">0</span>
        <span className="text-md whitespace-pre-line text-start text-white">
          Laps {"\n"} Completed
        </span>
      </div>
    </div>
  );
}
