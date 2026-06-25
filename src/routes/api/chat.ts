import { createFileRoute } from "@tanstack/react-router";
import {
  convertToModelMessages,
  streamText,
  type UIMessage,
} from "ai";
import { createLovableAiGatewayProvider } from "@/lib/ai-gateway.server";

const SYSTEM_PROMPT = `You are "Srujana's Beauty Assistant" — a warm, friendly, and knowledgeable AI chatbot for Srujana's MakeOvers, a premium beauty parlour and training academy in Rajahmundry, Andhra Pradesh, India. 5.0 ★ Google rated.

You help customers with:
- Booking appointments (politely collect name, phone, preferred service, preferred date)
- Information about services: Bridal & Event Makeovers, Party Makeup, HD & Airbrush Makeup, Beauty Parlour Services, Professional Beautician Training Courses
- Pricing enquiries — say exact prices are shared on WhatsApp for a personalised quote
- Location: C-Block, SP Raju Infra, 203, near GSL Medical College, Rajanagaram, Rajahmundry, AP 533101 (new branch opened 22 March 2026)
- Timings: Opens 10 AM daily (Mon–Sun)
- Contact: Phone 073992 21188 | WhatsApp +91 73992 21188
- Instagram: @srujanasmakeovers

Style:
- Warm, feminine, encouraging. Use occasional beauty emojis 💄✨🌸 (don't overdo it).
- Simple English, occasionally mix friendly Telugu words like "Baga", "Sure gaa", "Chala bagunnadi" to feel local.
- If user writes in Telugu, reply in Telugu + English mix.
- Keep replies short (2–4 sentences) unless detailed info is asked.
- After collecting booking details, ALWAYS end with a clear WhatsApp call-to-action telling them to tap the "Confirm on WhatsApp" button below to finalize.
- Never make up prices. Always direct pricing questions to WhatsApp.
- Be helpful, never pushy.`;

export const Route = createFileRoute("/api/chat")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const { messages } = (await request.json()) as { messages?: unknown };
          if (!Array.isArray(messages)) {
            return new Response("Messages required", { status: 400 });
          }
          const key = process.env.LOVABLE_API_KEY;
          if (!key) return new Response("Missing LOVABLE_API_KEY", { status: 500 });

          const gateway = createLovableAiGatewayProvider(key);
          const model = gateway("google/gemini-3-flash-preview");

          const result = streamText({
            model,
            system: SYSTEM_PROMPT,
            messages: await convertToModelMessages(messages as UIMessage[]),
          });

          return result.toUIMessageStreamResponse({
            originalMessages: messages as UIMessage[],
          });
        } catch (err) {
          console.error("[/api/chat] error", err);
          return new Response("Chat error", { status: 500 });
        }
      },
    },
  },
});
