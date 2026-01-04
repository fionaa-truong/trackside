interface Session {
  session_key: number;
  session_name: string;
  date_start: string;
  date_end: string;
}

interface Meeting {
  race_key: number;
}

interface Lap {
  lap_number: number;
}

export async function getRacesCompleted(year: number) {
  const now = new Date();

  const meetingsRes = await fetch(
    `https://api.openf1.org/v1/meetings?year=${year}`,
    { cache: "no-store" }
  );

  const meetings: Meeting[] = await meetingsRes.json();

  let completed = 0;

  for (const meeting of meetings) {
    const sessionsRes = await fetch(
      `https://api.openf1.org/v1/sessions?meeting_key=${meeting.race_key}`,
      { cache: "no-store" }
    );

    const sessions: Session[] = await sessionsRes.json();

    const race = sessions.find((s) => s.session_name === "Race");

    if (!race) continue;

    if (new Date(race.date_end) < now) {
      completed++;
    }
  }

  return {
    completed,
    total: meetings.length - 1,
  };
}

export async function getTotalLapsCompleted(year: number) {
  const now = new Date();

  const meetingsRes = await fetch(
    `https://api.openf1.org/v1/meetings?year=${year}`,
    { cache: "no-store" }
  );

  const meetings = await meetingsRes.json();

  let totalLaps = 0;

  for (const meeting of meetings) {
    const sessionsRes = await fetch(
      `https://api.openf1.org/v1/sessions?meeting_key=${meeting.race_key}`,
      { cache: "no-store" }
    );

    const sessions = await sessionsRes.json();
    const race = sessions.find((s: Session) => s.session_name === "Race");

    if (!race || new Date(race.date_end) > now) continue;

    const lapsRes = await fetch(
      `https://api.openf1.org/v1/laps?session_key=${race.session_key}`,
      { cache: "no-store" }
    );

    const laps: Lap[] = await lapsRes.json();

    totalLaps += Math.max(...laps.map((l) => l.lap_number));
  }

  return totalLaps;
}
