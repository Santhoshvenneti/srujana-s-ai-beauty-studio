import { supabase } from "@/integrations/supabase/client";

const KEY = "srujanas_session_id";

export function getSessionId(): string {
  if (typeof window === "undefined") return "ssr";
  let id = window.localStorage.getItem(KEY);
  if (!id) {
    id = crypto.randomUUID();
    window.localStorage.setItem(KEY, id);
  }
  return id;
}

export async function saveChatMessage(
  sessionId: string,
  role: "user" | "assistant",
  content: string,
) {
  if (!content || !content.trim()) return;
  const { error } = await supabase
    .from("chat_messages")
    .insert({ session_id: sessionId, role, content });
  if (error) console.error("[saveChatMessage]", error);
}

export interface LeadInput {
  name: string;
  phone: string;
  service?: string;
  preferred_date?: string;
  message?: string;
  source?: string;
}

export async function saveLead(sessionId: string | null, lead: LeadInput) {
  const { error } = await supabase.from("leads").insert({
    session_id: sessionId,
    name: lead.name.trim(),
    phone: lead.phone.trim(),
    service: lead.service?.trim() || null,
    preferred_date: lead.preferred_date?.trim() || null,
    message: lead.message?.trim() || null,
    source: lead.source ?? "website",
  });
  if (error) {
    console.error("[saveLead]", error);
    throw error;
  }
}
