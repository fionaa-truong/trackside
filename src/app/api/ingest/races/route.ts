import { supabaseAdmin } from "@/lib/supabaseServer";
import { fetchOpenF1 } from "@/lib/fetchOpenF1";
import type { OpenF1Meeting } from "@/types/openf1";
import type { TrackInsert, RaceInsert } from "@/types/db";

export async function POST(): Promise<Response> {
  const meetings = await fetchOpenF1<OpenF1Meeting[]>(
    "https://api.openf1.org/v1/meetings"
  );

  for (const meeting of meetings) {
    const { data: track } = await supabaseAdmin
      .from("track")
      .upsert({ name: meeting.meeting_name }, { onConflict: "name" })
      .select("id")
      .single();

    if (!track) continue;

    const race: RaceInsert = {
      round_number: meeting.meeting_key,
      location: meeting.location,
      race_date: meeting.date_start.split("T")[0],
      race_time_utc: meeting.date_start.split("T")[1],
      has_sprint: meeting.has_sprint,
      track_id: track.id,
    };

    await supabaseAdmin
      .from("race")
      .upsert(race, { onConflict: "round_number" });
  }

  return Response.json({ status: "races ingested" });
}
