import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  MessageCircle,
  Star,
  MapPin,
  Clock,
  Instagram,
  Youtube,
  Facebook,
  Sparkles,
  GraduationCap,
  Heart,
  Award,
  CheckCircle2,
  Menu,
  X,
} from "lucide-react";
import { ChatWidget } from "@/components/ChatWidget";
import { FloatingPetals } from "@/components/FloatingPetals";
import { toast } from "sonner";
import { saveLead } from "@/lib/chat-store";
import { getSessionId } from "@/lib/chat-store";

import heroBride from "@/assets/hero-bride.jpg";
import logo from "@/assets/logo.png";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

const PHONE = "07399221188";
const PHONE_DISPLAY = "073992 21188";
const WHATSAPP_URL = "https://wa.me/917399221188";
const INSTAGRAM = "https://instagram.com/srujanasmakeovers";
const YOUTUBE = "https://www.youtube.com/@SrujanasMakeOvers";
const FACEBOOK = "https://www.facebook.com/profile.php?id=61577537227805";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <AnnouncementBar />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <GrandOpening />
      <Reviews />
      <Gallery />
      <Academy />
      <LocationContact />
      <SocialSection />
      <Footer />
      <ChatWidget />
      <WhatsAppFloat />
    </div>
  );
}

function AnnouncementBar() {
  return (
    <div className="gradient-rose-gold text-primary-foreground text-center text-xs sm:text-sm py-2 px-4 font-medium">
      🎉 New Branch Now Open in Rajahmundry — Opposite GSL Medical College! 🎉
    </div>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Gallery", href: "#gallery" },
    { label: "Training", href: "#academy" },
    { label: "Contact", href: "#contact" },
  ];
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-ivory/85 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <img src={logo} alt="Srujana's MakeOvers logo" className="h-10 w-10 object-contain" />
          <div className="leading-tight">
            <div className="font-display font-semibold text-base sm:text-lg text-rose-deep tracking-wide">
              SRUJANA'S
            </div>
            <div className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-gold">
              MakeOvers
            </div>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-charcoal">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-rose transition story-link">
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href={`tel:${PHONE}`}
          className="hidden md:inline-flex items-center gap-2 gradient-rose-gold text-primary-foreground px-5 py-2.5 rounded-full text-sm font-medium hover:scale-105 transition-transform shadow-soft"
        >
          <Phone className="h-4 w-4" /> Book Now
        </a>
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-rose-deep"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-ivory px-4 py-3 space-y-2">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-2 text-sm font-medium text-charcoal hover:text-rose"
            >
              {l.label}
            </a>
          ))}
          <a
            href={`tel:${PHONE}`}
            className="block text-center mt-2 gradient-rose-gold text-primary-foreground px-5 py-3 rounded-full text-sm font-medium"
          >
            📞 Book Now · {PHONE_DISPLAY}
          </a>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <FloatingPetals />
      <div className="grid lg:grid-cols-2 min-h-[88vh]">
        {/* Text side */}
        <div className="relative z-10 flex items-center px-6 sm:px-12 lg:px-20 py-16 lg:py-24 bg-gradient-to-br from-ivory via-blush/30 to-ivory">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-card border border-gold/40 text-xs font-medium text-rose-deep shadow-soft mb-6">
              <Star className="h-3.5 w-3.5 fill-gold text-gold" />
              <span>5.0 · 30 Google Reviews · Verified</span>
            </div>

            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] text-charcoal mb-3">
              <span className="text-gradient-gold">SRUJANA'S</span>
              <br />
              <span className="text-rose-deep">MakeOvers</span>
            </h1>

            <p className="font-display text-xl sm:text-2xl italic text-rose mb-6 shimmer-gold">
              Where Beauty Meets Artistry
            </p>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8">
              Rajahmundry's premier women-owned beauty studio — crafting unforgettable bridal moments, glamorous looks, and certified beautician careers.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={`tel:${PHONE}`}
                className="inline-flex items-center justify-center gap-2 gradient-rose-gold text-primary-foreground px-7 py-3.5 rounded-full font-medium shadow-glow-rose hover:scale-105 transition-transform"
              >
                <Phone className="h-4 w-4" /> Book Now
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-7 py-3.5 rounded-full font-medium hover:scale-105 transition-transform shadow-soft"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp Us
              </a>
            </div>

            <div className="flex items-center gap-6 mt-10 text-xs text-muted-foreground">
              <div className="flex items-center gap-1.5"><Heart className="h-3.5 w-3.5 text-rose" /> Women Owned</div>
              <div className="flex items-center gap-1.5"><Award className="h-3.5 w-3.5 text-gold" /> Certified</div>
              <div className="flex items-center gap-1.5"><Sparkles className="h-3.5 w-3.5 text-rose" /> Premium Studio</div>
            </div>
          </motion.div>
        </div>

        {/* Image side */}
        <div className="relative h-[60vh] lg:h-auto">
          <div className="absolute inset-0 gradient-rose-gold opacity-25 mix-blend-multiply z-10" />
          <img
            src={heroBride}
            alt="Bride with elegant rose gold makeup by Srujana's MakeOvers"
            className="absolute inset-0 h-full w-full object-cover"
            width={1536}
            height={1024}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ivory/40 via-transparent to-transparent z-20" />
        </div>
      </div>
    </section>
  );
}

function About() {
  const highlights = [
    { icon: CheckCircle2, label: "Certified Services" },
    { icon: Sparkles, label: "Modern Studio" },
    { icon: Star, label: "5★ Rated" },
    { icon: GraduationCap, label: "Pro Training" },
  ];
  return (
    <section id="about" className="py-20 sm:py-28 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blush/40 text-rose-deep text-xs font-medium uppercase tracking-widest mb-4">
            <Heart className="h-3.5 w-3.5" /> Women Owned · Locally Loved
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-charcoal mb-5">
            About <span className="text-gradient-gold">Srujana's</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            Born from a passion for beauty and grounded in warm Andhra hospitality, Srujana's MakeOvers has grown into one of Rajahmundry's most loved beauty studios. From dreamy bridal transformations to launching the careers of new beauticians — every service is delivered with artistry, precision, and care.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {highlights.map((h) => (
            <motion.div
              key={h.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center p-6 rounded-2xl bg-card border border-border shadow-soft hover:shadow-glow-rose transition-shadow"
            >
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-full gradient-rose-gold text-primary-foreground mb-3">
                <h.icon className="h-6 w-6" />
              </div>
              <div className="font-display font-semibold text-charcoal">{h.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  const services = [
    {
      icon: "💄",
      title: "Bridal & Event Makeovers",
      desc: "Timeless bridal looks crafted for your most precious moments — from haldi to reception.",
    },
    {
      icon: "✨",
      title: "Party Makeup",
      desc: "Statement glam for engagements, birthdays and special nights out.",
    },
    {
      icon: "🌬️",
      title: "HD & Airbrush Makeup",
      desc: "Flawless, photo-ready finish that lasts all day with premium HD and airbrush techniques.",
    },
    {
      icon: "🌸",
      title: "Beauty Parlour Services",
      desc: "Facials, threading, waxing, manicure, pedicure, hair care and skincare rituals.",
    },
    {
      icon: "🎓",
      title: "Beautician Training",
      desc: "Certified professional courses with hands-on training and placement guidance.",
    },
  ];
  return (
    <section id="services" className="py-20 sm:py-28 px-4 sm:px-6 bg-gradient-to-b from-blush/20 via-ivory to-ivory">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-3">Our Services</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-charcoal">
            Crafted with <span className="text-gradient-gold">love & artistry</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative p-7 rounded-3xl bg-card border border-border hover:border-gold/50 hover:shadow-glow-rose transition-all overflow-hidden"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-blush/30 blur-2xl group-hover:bg-rose/30 transition-colors" />
              <div className="relative">
                <div className="text-4xl mb-4">{s.icon}</div>
                <h3 className="font-display text-xl font-semibold text-charcoal mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function GrandOpening() {
  const sparkles = Array.from({ length: 18 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    delay: Math.random() * 3,
  }));

  return (
    <section className="relative py-20 sm:py-24 px-4 sm:px-6 gradient-rose-gold text-primary-foreground overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        {sparkles.map((s) => (
          <span
            key={s.id}
            className="absolute h-2 w-2 rounded-full bg-ivory"
            style={{
              left: `${s.left}%`,
              top: `${s.top}%`,
              animation: `sparkle 2.5s ease-in-out ${s.delay}s infinite`,
              boxShadow: "0 0 10px rgba(255,255,255,0.8)",
            }}
          />
        ))}
      </div>
      <div className="relative max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur text-xs font-medium uppercase tracking-widest mb-5">
          ✨ Grand Opening
        </div>
        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
          New Branch Now Open!
        </h2>
        <p className="text-lg sm:text-xl opacity-95 mb-2">
          SP Raju Infra, Opposite GSL Medical College
        </p>
        <p className="text-base opacity-90 mb-7">Rajahmundry · Andhra Pradesh</p>
        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/15 backdrop-blur border border-white/30 mb-8">
          <Sparkles className="h-5 w-5" />
          <span className="font-display font-semibold text-lg">Opened 22nd March 2026</span>
        </div>
        <div>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-rose-deep px-7 py-3.5 rounded-full font-semibold hover:scale-105 transition-transform shadow-soft"
          >
            <MessageCircle className="h-4 w-4" /> Visit Us — Message on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  const reviews = [
    { name: "Priya R.", text: "Well maintained, hygienic service. Loved every minute of my bridal trial!", rating: 5 },
    { name: "Aishwarya K.", text: "Well experienced team, highly recommend. Nice work and so warm!", rating: 5 },
    { name: "Sneha M.", text: "I absolutely loved the makeup. Looked like a dream on my reception 💖", rating: 5 },
  ];
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-3">Reviews</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-charcoal mb-4">
            Loved by <span className="text-gradient-gold">our brides</span>
          </h2>
          <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-gold text-gold" />
              ))}
            </div>
            <span className="font-semibold text-charcoal">5.0</span>
            <span>· 30 Google Reviews</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-7 rounded-3xl bg-card border border-border shadow-soft"
            >
              <div className="flex mb-3">
                {Array.from({ length: r.rating }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-base text-charcoal/85 leading-relaxed italic mb-5">
                "{r.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full gradient-rose-gold flex items-center justify-center text-primary-foreground font-display font-bold">
                  {r.name[0]}
                </div>
                <div>
                  <div className="font-semibold text-sm text-charcoal">{r.name}</div>
                  <div className="text-xs text-muted-foreground">Google Reviewer</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  const [filter, setFilter] = useState<"All" | "Bridal" | "Party" | "Training">("All");
  const [lightbox, setLightbox] = useState<string | null>(null);

  const items = [
    { src: g1, cat: "Bridal", alt: "Soft glam bridal makeup", h: "row-span-2" },
    { src: g2, cat: "Bridal", alt: "Makeup brushes and rose gold palette", h: "" },
    { src: g3, cat: "Party", alt: "Glam party makeup look", h: "row-span-2" },
    { src: g5, cat: "Bridal", alt: "Traditional South Indian bride", h: "" },
    { src: g4, cat: "Training", alt: "Beautician training session", h: "" },
    { src: g6, cat: "Training", alt: "Modern rose gold studio interior", h: "" },
  ];

  const filters = ["All", "Bridal", "Party", "Training"] as const;
  const visible = items.filter((i) => filter === "All" || i.cat === filter);

  return (
    <section id="gallery" className="py-20 sm:py-28 px-4 sm:px-6 bg-gradient-to-b from-ivory via-blush/15 to-ivory">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-3">Our Work</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-charcoal mb-6">
            A glimpse of <span className="text-gradient-gold">our artistry</span>
          </h2>
          <div className="inline-flex flex-wrap justify-center gap-2 p-1.5 rounded-full bg-card border border-border">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition ${
                  filter === f
                    ? "gradient-rose-gold text-primary-foreground shadow-soft"
                    : "text-charcoal/70 hover:text-rose"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 auto-rows-[200px] sm:auto-rows-[260px]">
          {visible.map((it, i) => (
            <motion.button
              key={i}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              onClick={() => setLightbox(it.src)}
              className={`relative overflow-hidden rounded-2xl group ${it.h}`}
            >
              <img
                src={it.src}
                alt={it.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-rose-deep/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <span className="text-xs uppercase tracking-widest text-ivory font-medium">{it.cat}</span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          className="fixed inset-0 z-[60] bg-charcoal/90 backdrop-blur flex items-center justify-center p-4 cursor-zoom-out"
        >
          <img src={lightbox} alt="" className="max-h-[90vh] max-w-full rounded-2xl shadow-2xl" />
        </div>
      )}
    </section>
  );
}

function Academy() {
  const points = [
    "Certified professional curriculum",
    "Hands-on practical training",
    "Small batches, personalised mentoring",
    "Placement guidance & career support",
  ];
  return (
    <section id="academy" className="py-20 sm:py-28 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-3">Training Academy</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-charcoal mb-5">
            Build a career in <span className="text-gradient-gold">beauty</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-6">
            Learn from working professionals and start your own journey as a certified beautician or makeup artist. Our courses combine theory, hands-on practice, and real client experience.
          </p>
          <ul className="space-y-3 mb-8">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3 text-charcoal">
                <CheckCircle2 className="h-5 w-5 text-rose mt-0.5 shrink-0" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
          <a
            href={`${WHATSAPP_URL}?text=${encodeURIComponent("Hi! I'd like to enquire about the Beautician Training Course.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 gradient-rose-gold text-primary-foreground px-7 py-3.5 rounded-full font-medium shadow-glow-rose hover:scale-105 transition-transform"
          >
            <MessageCircle className="h-4 w-4" /> Enquire on WhatsApp
          </a>
        </div>
        <div className="relative">
          <div className="absolute -inset-6 gradient-rose-gold rounded-3xl opacity-20 blur-3xl" />
          <img
            src={g4}
            alt="Beautician training session"
            loading="lazy"
            className="relative rounded-3xl shadow-glow-rose w-full h-[500px] object-cover"
          />
        </div>
      </div>
    </section>
  );
}

function LocationContact() {
  const [form, setForm] = useState({ name: "", phone: "", service: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const hours = [
    "Monday: 10:00 AM – 9:00 PM",
    "Tuesday: 10:00 AM – 9:00 PM",
    "Wednesday: 10:00 AM – 9:00 PM",
    "Thursday: 10:00 AM – 9:00 PM",
    "Friday: 10:00 AM – 9:00 PM",
    "Saturday: 10:00 AM – 9:00 PM",
    "Sunday: 10:00 AM – 9:00 PM",
  ];

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) {
      toast.error("Please share your name and phone");
      return;
    }
    if (!/^[+\d\s-]{6,20}$/.test(form.phone.trim())) {
      toast.error("Please enter a valid phone number");
      return;
    }
    setSubmitting(true);
    try {
      await saveLead(getSessionId(), {
        ...form,
        source: "contact_form",
      });
      toast.success("Thank you! We'll reach out shortly 💄");
      setForm({ name: "", phone: "", service: "", message: "" });
    } catch {
      toast.error("Something went wrong. Please try WhatsApp instead.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section id="contact" className="py-20 sm:py-28 px-4 sm:px-6 bg-gradient-to-b from-blush/15 via-ivory to-ivory">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-3">Visit Us</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-charcoal">
            Come say <span className="text-gradient-gold">hello</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="rounded-3xl overflow-hidden shadow-soft border border-border h-[280px]">
              <iframe
                title="Srujana's MakeOvers location"
                src="https://www.google.com/maps?q=SP+Raju+Infra+near+GSL+Medical+College+Rajanagaram+Rajahmundry&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-card border border-border">
                <Phone className="h-5 w-5 text-rose mb-2" />
                <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Phone</div>
                <a href={`tel:${PHONE}`} className="text-charcoal font-medium hover:text-rose">{PHONE_DISPLAY}</a>
              </div>
              <div className="p-5 rounded-2xl bg-card border border-border">
                <MapPin className="h-5 w-5 text-rose mb-2" />
                <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Address</div>
                <p className="text-sm text-charcoal">C-Block, SP Raju Infra, 203, near GSL Medical College, Rajanagaram, Rajahmundry</p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-card border border-border">
              <Clock className="h-5 w-5 text-rose mb-2" />
              <div className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Hours</div>
              <ul className="text-sm text-charcoal space-y-1">
                {hours.map((h) => <li key={h}>{h}</li>)}
              </ul>
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="p-7 rounded-3xl bg-card border border-border shadow-soft space-y-4 self-start"
          >
            <h3 className="font-display text-2xl font-semibold text-charcoal mb-1">
              Booking Enquiry
            </h3>
            <p className="text-sm text-muted-foreground mb-2">
              Tell us a bit and we'll get back to you.
            </p>
            <div>
              <label className="block text-xs font-medium text-charcoal mb-1.5">Your Name</label>
              <input
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                maxLength={100}
                className="w-full px-4 py-3 rounded-xl border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-rose/40"
                required
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-charcoal mb-1.5">Phone</label>
              <input
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                maxLength={20}
                type="tel"
                className="w-full px-4 py-3 rounded-xl border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-rose/40"
                required
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-charcoal mb-1.5">Service</label>
              <select
                value={form.service}
                onChange={(e) => setForm({ ...form, service: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-rose/40"
              >
                <option value="">Select a service</option>
                <option>Bridal Makeup</option>
                <option>Party Makeup</option>
                <option>HD / Airbrush Makeup</option>
                <option>Beauty Parlour Services</option>
                <option>Beautician Training Course</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-charcoal mb-1.5">Message (optional)</label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                maxLength={1000}
                rows={3}
                className="w-full px-4 py-3 rounded-xl border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-rose/40 resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={submitting}
              className="w-full gradient-rose-gold text-primary-foreground py-3.5 rounded-full font-medium shadow-glow-rose hover:scale-[1.02] transition-transform disabled:opacity-60"
            >
              {submitting ? "Sending..." : "Send Enquiry"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function SocialSection() {
  const socials = [
    { icon: MessageCircle, label: "WhatsApp", href: WHATSAPP_URL, color: "bg-[#25D366]" },
    { icon: Instagram, label: "Instagram", href: INSTAGRAM, color: "bg-gradient-to-br from-[#f09433] via-[#dc2743] to-[#bc1888]" },
    { icon: Youtube, label: "YouTube", href: YOUTUBE, color: "bg-[#FF0000]" },
    { icon: Facebook, label: "Facebook", href: FACEBOOK, color: "bg-[#1877F2]" },
  ];
  return (
    <section className="py-16 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-gold mb-3">Connect</p>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-charcoal mb-8">
          Follow our <span className="text-gradient-gold">journey</span>
        </h2>
        <div className="flex justify-center gap-4 flex-wrap">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className={`group h-14 w-14 rounded-full ${s.color} text-white flex items-center justify-center shadow-soft hover:scale-110 transition-transform`}
            >
              <s.icon className="h-6 w-6 group-hover:rotate-6 transition-transform" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-charcoal text-ivory pt-14 pb-8 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 mb-10">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <img src={logo} alt="" className="h-10 w-10 bg-ivory rounded-full p-1" />
            <div>
              <div className="font-display text-lg font-semibold">SRUJANA'S</div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-gold">MakeOvers</div>
            </div>
          </div>
          <p className="font-display italic text-gold text-sm">Beauty · Makeovers · Training</p>
          <p className="text-xs text-ivory/60 mt-3 leading-relaxed">
            Rajahmundry's premium women-owned beauty studio. Crafting beautiful moments since day one.
          </p>
        </div>
        <div>
          <h4 className="font-display font-semibold mb-3 text-gold">Quick Links</h4>
          <ul className="space-y-2 text-sm text-ivory/80">
            <li><a href="#about" className="hover:text-gold">About</a></li>
            <li><a href="#services" className="hover:text-gold">Services</a></li>
            <li><a href="#gallery" className="hover:text-gold">Gallery</a></li>
            <li><a href="#academy" className="hover:text-gold">Training Academy</a></li>
            <li><a href="#contact" className="hover:text-gold">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display font-semibold mb-3 text-gold">Get in touch</h4>
          <ul className="space-y-2 text-sm text-ivory/80">
            <li><a href={`tel:${PHONE}`} className="hover:text-gold">📞 {PHONE_DISPLAY}</a></li>
            <li><a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-gold">💬 WhatsApp Us</a></li>
            <li className="text-xs text-ivory/60">📍 SP Raju Infra, near GSL Medical College, Rajahmundry</li>
          </ul>
          <div className="flex gap-3 mt-4">
            <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="h-9 w-9 rounded-full border border-ivory/30 flex items-center justify-center hover:bg-gold hover:text-charcoal hover:border-gold transition"><Instagram className="h-4 w-4" /></a>
            <a href={YOUTUBE} target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="h-9 w-9 rounded-full border border-ivory/30 flex items-center justify-center hover:bg-gold hover:text-charcoal hover:border-gold transition"><Youtube className="h-4 w-4" /></a>
            <a href={FACEBOOK} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="h-9 w-9 rounded-full border border-ivory/30 flex items-center justify-center hover:bg-gold hover:text-charcoal hover:border-gold transition"><Facebook className="h-4 w-4" /></a>
          </div>
        </div>
      </div>
      <div className="border-t border-ivory/10 pt-6 text-center text-xs text-ivory/50">
        © {new Date().getFullYear()} Srujana's MakeOvers · Rajahmundry, Andhra Pradesh · All rights reserved.
      </div>
    </footer>
  );
}

function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 left-6 z-40 h-14 w-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-glow-rose hover:scale-110 transition-transform"
    >
      <MessageCircle className="h-7 w-7" />
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
    </a>
  );
}
