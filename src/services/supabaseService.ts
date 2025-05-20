import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = process.env.SUPABASE_URL!;
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY!;

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

interface LeadData {
  name: string;
  email: string;
  interest: string;
}

export async function storeLead(lead: LeadData): Promise<void> {
  const { data, error } = await supabase
    .from("leads")
    .insert([{ ...lead, source: "instagram" }]);

  if (error) {
    console.error("❌ Error inserting lead:", error);
  } else {
    console.log("✅ Lead stored in Supabase:", data);
  }
}
