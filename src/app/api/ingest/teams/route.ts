import { supabaseAdmin } from "@/lib/supabaseServer";
import { fetchOpenF1 } from "@/lib/fetchOpenF1";
import type { OpenF1Driver } from "@/types/openf1";
import type { TeamInsert } from "@/types/db";

export async function POST(): Promise<Response> {
  const drivers = await fetchOpenF1<OpenF1Driver[]>(
    "https://api.openf1.org/v1/drivers?session_key=latest"
  );

  const uniqueTeams = Array.from(new Set(drivers.map((d) => d.team_name)));

  const inserts: TeamInsert[] = uniqueTeams.map((name) => ({ name }));

  const { error } = await supabaseAdmin
    .from("team")
    .upsert(inserts, { onConflict: "name" });

  if (error) {
    return new Response(error.message, { status: 500 });
  }

  return Response.json({ inserted: inserts.length });
}
