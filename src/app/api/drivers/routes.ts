import { supabase } from "../../../lib/supabaseServer";

export async function GET() {
  const { data, error } = await supabase
    .from("driver")
    .select("*")
    .order("name");

  if (error) {
    return new Response(error.message, { status: 500 });
  }

  return Response.json(data);
}
