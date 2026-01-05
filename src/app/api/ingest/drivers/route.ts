import { supabaseAdmin } from "@/lib/supabaseServer";
import { fetchOpenF1 } from "@/lib/fetchOpenF1";
import type { OpenF1Driver } from "@/types/openf1";
import type { DriverInsert } from "@/types/db";

export async function POST(): Promise<Response> {
  const drivers = await fetchOpenF1<OpenF1Driver[]>(
    "https://api.openf1.org/v1/drivers"
  );

  const inserts: DriverInsert[] = drivers.map((d) => ({
    driver_number: d.driver_number,
    first_name: d.first_name,
    last_name: d.last_name,
    team_id: null,
  }));

  const { error } = await supabaseAdmin.from("driver").upsert(inserts, {
    onConflict: "driver_number",
  });

  if (error) {
    return new Response(error.message, { status: 500 });
  }

  return Response.json({
    inserted: inserts.length,
  });
}
