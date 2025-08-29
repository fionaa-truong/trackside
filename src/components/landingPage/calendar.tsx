interface CalendarProps {
  trackNumber: number;
  circuit: string;
  location: string;
}

export default function Calendar({
  trackNumber,
  circuit,
  location,
}: CalendarProps) {
  return (
    <div className="text-blue-white flex flex-row gap-8 border-b border-white/20 px-4 py-2">
      <span>{trackNumber}</span>
      <div className="flex flex-row gap-5">
        <span>
          {circuit} <span className="mx-2">•</span> {location}
        </span>
      </div>
    </div>
  );
}
