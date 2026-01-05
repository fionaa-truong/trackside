import { supabaseAdmin } from "@/lib/supabaseServer";
import { fetchOpenF1 } from "@/lib/fetchOpenF1";
import type { OpenF1Result } from "@/types/openf1";

export async function POST(): Promise<Response> {
  const results = await fetchOpenF1<OpenF1Result[]>(
    "https://api.openf1.org/v1/results"
  );

  for (const r of results) {
    const { data: race } = await supabaseAdmin
      .from("race")
      .select("id")
      .eq("round_number", r.meeting_key)
      .single();

    const { data: driver } = await supabaseAdmin
      .from("driver")
      .select("id")
      .eq("driver_number", r.driver_number)
      .single();

    if (!race || !driver) continue;

    await supabaseAdmin.from("result").upsert({
      race_id: race.id,
      driver_id: driver.id,
      finish_position: r.position,
      points: r.points,
    });
  }

  return Response.json({ status: "results ingested" });
}
