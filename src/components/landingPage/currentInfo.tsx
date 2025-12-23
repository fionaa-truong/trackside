import Current from "./current";
import { getRaceDistance } from "@/lib/trackDistances";

interface OpenF1Session {
  session_name: string;
  date_start: string;
  date_end: string;
}

interface OpenF1Races {
  race_key: number;
  circuit_short_name: string;
  country_name: string;
}

// TODO: if date is race day make white bar a random number
// TODO: if race is over but still race day make the white bar at the end
// TODO: if not race day put white bar at the beginning
async function getCurrentRace() {
  const now = new Date();

  // get most recent race weekend
  const racesRes = await fetch("https://api.openf1.org/v1/meetings?year=2025", {
    cache: "no-store",
  });

  const races: OpenF1Races[] = await racesRes.json();

  let nextRace: OpenF1Races | null = null;
  let raceSession: OpenF1Session | null = null;

  // get sessions for that race weekend
  for (const race of races) {
    // Fetch sessions for this race
    const sessionsRes = await fetch(
      `https://api.openf1.org/v1/sessions?meeting_key=${race.race_key}`,
      { cache: "no-store" }
    );
    const sessions: OpenF1Session[] = await sessionsRes.json();

    // find the race session
    const session = sessions.find((s) => s.session_name === "Race");

    if (!session) continue;

    const raceEnd = new Date(session.date_end);

    if (raceEnd > now) {
      nextRace = race;
      raceSession = session;
      break;
    }
  }

  if (!nextRace || !raceSession) {
    const lastRace = races[0];
    const lastSessionsRes = await fetch(
      `https://api.openf1.org/v1/sessions?meeting_key=${lastRace.race_key}`,
      { cache: "no-store" }
    );
    const lastSessions: OpenF1Session[] = await lastSessionsRes.json();
    nextRace = lastRace;
    raceSession = lastSessions.find((s) => s.session_name === "Race")!;
  }

  if (!raceSession) {
    return {
      circuit: "TBD",
      location: "TBD",
      date: "TBD",
      time: "TBD",
      distance: 0,
      imgSrc: "/trackside_cropped.png",
    };
  }

  const raceStart = new Date(raceSession.date_start);

  return {
    circuit: nextRace.circuit_short_name,
    location: nextRace.country_name,
    date: raceStart.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    }),
    time: raceStart.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      timeZone: "UTC",
    }),
    distance: getRaceDistance(nextRace.circuit_short_name),
    imgSrc: `/trackOutlines/${nextRace.country_name.toLowerCase()}.png`,
  };
}

export default async function CurrentInfo() {
  const race = await getCurrentRace();
  return (
    <>
      <Current {...race} />
    </>
  );
}
