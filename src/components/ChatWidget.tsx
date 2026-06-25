import { useEffect, useRef, useState } from "react";
import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport, type UIMessage } from "ai";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Sparkles, RefreshCw } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { getSessionId, saveChatMessage, saveLead } from "@/lib/chat-store";
import logo from "@/assets/logo.png";

const WHATSAPP = "917399221188";

const QUICK_REPLIES = [
  "💍 Bridal Makeup Enquiry",
  "📅 Book an Appointment",
  "🎓 Beautician Course Info",
  "📍 Location & Timings",
  "💰 Pricing & Packages",
];

const GREETING: UIMessage = {
  id: "greeting",
  role: "assistant",
  parts: [
    {
      type: "text",
      text:
        "Hi! 👋 Welcome to **Srujana's MakeOvers**! I'm your beauty assistant 💄✨\n\nHow can I help you today? Pick a quick option below or type your question.",
    },
  ],
};

const STORAGE_KEY = "srujanas_chat_history";

function loadHistory(): UIMessage[] {
  if (typeof window === "undefined") return [GREETING];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [GREETING];
    const parsed = JSON.parse(raw) as UIMessage[];
    return parsed.length > 0 ? parsed : [GREETING];
  } catch {
    return [GREETING];
  }
}

function messageText(m: UIMessage): string {
  return m.parts
    .map((p) => (p.type === "text" ? p.text : ""))
    .join("");
}

function parseLead(text: string): {
  name?: string;
  phone?: string;
  service?: string;
  date?: string;
} {
  const result: ReturnType<typeof parseLead> = {};
  const phoneMatch = text.match(/(?:\+?91[\s-]?)?[6-9]\d{9}/);
  if (phoneMatch) result.phone = phoneMatch[0].replace(/[\s-]/g, "");
  const nameMatch =
    text.match(/(?:my name is|i'?m|name[:\-]?)\s*([A-Za-z][A-Za-z\s.]{1,40})/i) ||
    text.match(/^([A-Z][a-z]+(?:\s[A-Z][a-z]+)?)/);
  if (nameMatch) result.name = nameMatch[1].trim();
  if (/bridal/i.test(text)) result.service = "Bridal Makeup";
  else if (/party/i.test(text)) result.service = "Party Makeup";
  else if (/hd|airbrush/i.test(text)) result.service = "HD/Airbrush Makeup";
  else if (/course|training|beautician/i.test(text)) result.service = "Beautician Training";
  return result;
}

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [initialMessages, setInitialMessages] = useState<UIMessage[] | null>(null);
  const [input, setInput] = useState("");
  const [sessionId] = useState(() => getSessionId());
  const [leadCollected, setLeadCollected] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setInitialMessages(loadHistory());
  }, []);

  const { messages, sendMessage, status, setMessages } = useChat({
    id: sessionId,
    messages: initialMessages ?? [GREETING],
    transport: new DefaultChatTransport({ api: "/api/chat" }),
    onError: (e) => console.error("[chat]", e),
  });

  // Persist to localStorage
  useEffect(() => {
    if (!initialMessages) return;
    if (typeof window === "undefined") return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
    } catch {}
  }, [messages, initialMessages]);

  // Save to DB on completion
  const lastSavedRef = useRef<Set<string>>(new Set());
  useEffect(() => {
    if (status === "streaming" || status === "submitted") return;
    for (const m of messages) {
      if (m.id === "greeting") continue;
      if (lastSavedRef.current.has(m.id)) continue;
      lastSavedRef.current.add(m.id);
      if (m.role === "user" || m.role === "assistant") {
        saveChatMessage(sessionId, m.role, messageText(m));
      }
    }
  }, [messages, status, sessionId]);

  // Lead capture: when user message contains name + phone
  useEffect(() => {
    if (leadCollected) return;
    const userTexts = messages
      .filter((m) => m.role === "user")
      .map(messageText)
      .join(" \n ");
    const lead = parseLead(userTexts);
    if (lead.name && lead.phone) {
      setLeadCollected(true);
      saveLead(sessionId, {
        name: lead.name,
        phone: lead.phone,
        service: lead.service,
        message: userTexts.slice(0, 1500),
        source: "chatbot",
      }).catch(() => setLeadCollected(false));
    }
  }, [messages, leadCollected, sessionId]);

  // Auto-scroll
  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages]);

  // Focus input
  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open, status]);

  const isLoading = status === "submitted" || status === "streaming";

  function handleSubmit(e?: React.FormEvent) {
    e?.preventDefault();
    const text = input.trim();
    if (!text || isLoading) return;
    setInput("");
    sendMessage({ text });
  }

  function sendQuickReply(text: string) {
    if (isLoading) return;
    sendMessage({ text });
  }

  function clearChat() {
    setMessages([GREETING]);
    lastSavedRef.current = new Set();
    setLeadCollected(false);
    if (typeof window !== "undefined") {
      window.localStorage.removeItem(STORAGE_KEY);
    }
  }

  // Build WhatsApp prefilled message from last user content + lead
  function buildWhatsAppUrl() {
    const userTexts = messages.filter((m) => m.role === "user").map(messageText).join(" | ");
    const lead = parseLead(userTexts);
    const parts = [`Hi Srujana's MakeOvers! I'd like to enquire:`];
    if (lead.service) parts.push(`Service: ${lead.service}`);
    if (lead.name) parts.push(`Name: ${lead.name}`);
    if (lead.phone) parts.push(`Phone: ${lead.phone}`);
    if (!lead.service && !lead.name && userTexts) parts.push(userTexts.slice(0, 200));
    const text = encodeURIComponent(parts.join("\n"));
    return `https://wa.me/${WHATSAPP}?text=${text}`;
  }

  const showWhatsAppCta = leadCollected || messages.filter((m) => m.role === "user").length >= 2;

  return (
    <>
      {/* Floating bubble */}
      <AnimatePresence>
        {!open && (
          <motion.button
            key="bubble"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            onClick={() => setOpen(true)}
            className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full gradient-rose-gold px-5 py-4 text-primary-foreground shadow-glow-rose hover:scale-105 transition-transform"
            aria-label="Open chat with Srujana's AI Assistant"
          >
            <div className="relative">
              <MessageCircle className="h-6 w-6" />
              <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-gold animate-pulse" />
            </div>
            <span className="hidden sm:inline font-medium text-sm">
              Chat with Srujana's AI 💄
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="panel"
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 28 }}
            className="fixed bottom-6 right-4 left-4 sm:left-auto sm:right-6 sm:w-[400px] z-50 flex flex-col rounded-3xl overflow-hidden bg-card shadow-glow-rose border border-border max-h-[85vh]"
            style={{ height: "min(620px, 85vh)" }}
          >
            {/* Header */}
            <div className="gradient-rose-gold px-4 py-3 flex items-center gap-3 text-primary-foreground">
              <div className="h-10 w-10 rounded-full bg-ivory/95 flex items-center justify-center p-1.5">
                <img src={logo} alt="Srujana's" className="h-full w-full object-contain" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-display font-semibold leading-tight truncate">
                  Srujana's Beauty Assistant
                </div>
                <div className="text-xs opacity-90 flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
                  Online · replies instantly
                </div>
              </div>
              <button
                onClick={clearChat}
                className="p-2 hover:bg-white/10 rounded-full transition"
                aria-label="Clear chat"
              >
                <RefreshCw className="h-4 w-4" />
              </button>
              <button
                onClick={() => setOpen(false)}
                className="p-2 hover:bg-white/10 rounded-full transition"
                aria-label="Close chat"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Messages */}
            <div
              ref={scrollRef}
              className="flex-1 overflow-y-auto px-4 py-4 space-y-3"
              style={{
                background:
                  "linear-gradient(180deg, color-mix(in oklab, var(--blush) 18%, var(--ivory)) 0%, var(--ivory) 100%)",
              }}
            >
              {messages.map((m) => {
                const text = messageText(m);
                if (!text && m.role === "assistant" && isLoading) {
                  return (
                    <div key={m.id} className="flex items-end gap-2">
                      <div className="rounded-2xl rounded-bl-sm bg-card border border-border px-4 py-3 shadow-sm">
                        <div className="flex gap-1">
                          <span className="h-2 w-2 rounded-full bg-rose animate-bounce [animation-delay:-0.3s]" />
                          <span className="h-2 w-2 rounded-full bg-rose animate-bounce [animation-delay:-0.15s]" />
                          <span className="h-2 w-2 rounded-full bg-rose animate-bounce" />
                        </div>
                      </div>
                    </div>
                  );
                }
                return (
                  <div
                    key={m.id}
                    className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[85%] px-4 py-2.5 text-sm leading-relaxed ${
                        m.role === "user"
                          ? "gradient-rose-gold text-primary-foreground rounded-2xl rounded-br-sm"
                          : "bg-card text-foreground border border-border rounded-2xl rounded-bl-sm shadow-sm"
                      }`}
                    >
                      <div className="prose prose-sm max-w-none prose-p:my-1 prose-strong:text-current">
                        <ReactMarkdown>{text}</ReactMarkdown>
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Quick replies after first assistant message */}
              {messages.length === 1 && (
                <div className="flex flex-wrap gap-2 pt-2">
                  {QUICK_REPLIES.map((q) => (
                    <button
                      key={q}
                      onClick={() => sendQuickReply(q)}
                      className="text-xs px-3 py-2 rounded-full bg-card border border-rose/30 text-rose-deep hover:bg-rose/10 transition"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              )}

              {/* WhatsApp handoff */}
              {showWhatsAppCta && (
                <a
                  href={buildWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mt-2 rounded-2xl bg-[#25D366] text-white text-center px-4 py-3 text-sm font-medium shadow-soft hover:opacity-95 transition"
                >
                  📲 Confirm on WhatsApp
                </a>
              )}

              {leadCollected && (
                <div className="text-center text-xs text-muted-foreground italic mt-1">
                  ✅ Your enquiry has been noted! Our team will reach out soon.
                </div>
              )}
            </div>

            {/* Input */}
            <form
              onSubmit={handleSubmit}
              className="border-t border-border bg-card px-3 py-3 flex items-center gap-2"
            >
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                disabled={isLoading}
                className="flex-1 rounded-full border border-border bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-rose/40 disabled:opacity-50"
                maxLength={500}
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="h-10 w-10 flex items-center justify-center rounded-full gradient-rose-gold text-primary-foreground disabled:opacity-50 hover:scale-105 transition-transform"
                aria-label="Send"
              >
                {isLoading ? (
                  <Sparkles className="h-4 w-4 animate-spin" />
                ) : (
                  <Send className="h-4 w-4" />
                )}
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
