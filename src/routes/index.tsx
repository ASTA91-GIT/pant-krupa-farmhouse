import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import entrance from "@/assets/entrance.jpg.asset.json";
import roseSunset from "@/assets/rose-sunset.jpg.asset.json";
import plumeria from "@/assets/plumeria.jpg.asset.json";
import palms from "@/assets/palms.jpg.asset.json";
import sunsetCar from "@/assets/sunset-car.jpg.asset.json";

const PHONE = "+91 00000 00000";
const PHONE_TEL = "+910000000000";
const WHATSAPP = "910000000000";
const EMAIL = "bookings@pantkrupafarmhouse.in";
const ADDRESS = "Bopoli, Post Tadwagale, Taluka Alibag, Raigad, Maharashtra";
const MAPS_URL = "https://maps.app.goo.gl/1VmrxJkFnA7CvpQG9";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pant Krupa Farmhouse — Private Getaway in Alibag" },
      { name: "description", content: "A serene private farmhouse in Bopoli, Alibag. Open skies, palm groves, sunrise hills and a quiet escape from the city." },
      { property: "og:title", content: "Pant Krupa Farmhouse — Alibag" },
      { property: "og:description", content: "Private farmhouse stays in Bopoli, Alibag. Hill views, gardens and a quiet escape." },
      { property: "og:image", content: entrance.url },
      { name: "twitter:image", content: entrance.url },
    ],
  }),
  component: Home,
});

const nav = [
  { href: "#about", label: "About" },
  { href: "#gallery", label: "Gallery" },
  { href: "#stay", label: "The Stay" },
  { href: "#location", label: "Location" },
  { href: "#contact", label: "Contact" },
];

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <About />
      <Gallery />
      <Stay />
      <Location />
      <Contact />
      <Footer />
    </div>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/60">
      <div className="container-pad flex h-16 items-center justify-between">
        <a href="#top" className="flex items-baseline gap-2">
          <span className="font-display text-lg tracking-tight text-primary">Pant Krupa</span>
          <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Farmhouse · Alibag</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="text-muted-foreground hover:text-foreground transition-colors">
              {n.label}
            </a>
          ))}
          <a
            href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent("Hi, I'd like to book Pant Krupa Farmhouse.")}`}
            target="_blank" rel="noreferrer"
            className="inline-flex items-center rounded-full bg-accent px-4 py-2 text-accent-foreground text-xs font-medium tracking-wide hover:opacity-90 transition"
          >
            Book Now
          </a>
        </nav>
        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground" aria-label="menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d={open ? "M6 6l12 12M6 18L18 6" : "M4 7h16M4 12h16M4 17h16"} strokeLinecap="round" />
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="container-pad py-4 flex flex-col gap-4">
            {nav.map((n) => (
              <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="text-foreground/80">
                {n.label}
              </a>
            ))}
            <a
              href={`https://wa.me/${WHATSAPP}`}
              target="_blank" rel="noreferrer"
              className="inline-flex w-fit items-center rounded-full bg-accent px-4 py-2 text-accent-foreground text-xs font-medium"
            >
              Book on WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] w-full overflow-hidden">
      <img
        src={entrance.url}
        alt="Decorated entrance gate of Pant Krupa Farmhouse"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/70" />
      <div className="relative container-pad flex min-h-[100svh] flex-col justify-end pb-20 pt-32 text-[color:var(--cream)]">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.35em] text-[color:var(--cream)]/80">
            Bopoli · Tadwagale · Alibag
          </p>
          <h1 className="mt-5 font-display text-5xl leading-[1.05] sm:text-6xl md:text-7xl lg:text-8xl">
            Pant Krupa
            <span className="block italic font-light text-[color:var(--cream)]/85">Farmhouse</span>
          </h1>
          <p className="mt-6 max-w-xl text-base md:text-lg text-[color:var(--cream)]/85 leading-relaxed">
            A private retreat tucked behind the hills of Alibag — open skies, palm groves,
            quiet mornings and slow, golden evenings.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground hover:opacity-90 transition"
            >
              Plan your stay
            </a>
            <a
              href="#gallery"
              className="inline-flex items-center rounded-full border border-[color:var(--cream)]/40 px-6 py-3 text-sm font-medium text-[color:var(--cream)] hover:bg-[color:var(--cream)]/10 transition"
            >
              View the farmhouse
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[color:var(--cream)]/60 text-[10px] tracking-[0.3em] uppercase">
        scroll
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-[color:var(--cream)]">
      <div className="container-pad grid gap-14 md:grid-cols-12 md:gap-20 items-start">
        <div className="md:col-span-5">
          <p className="text-xs uppercase tracking-[0.3em] text-accent">Our farmhouse</p>
          <h2 className="mt-4 text-4xl md:text-5xl text-primary">
            Where the city ends, <em className="font-light">stillness begins.</em>
          </h2>
        </div>
        <div className="md:col-span-7 space-y-6 text-base md:text-lg leading-relaxed text-foreground/80">
          <p>
            Pant Krupa Farmhouse sits on the quiet outskirts of Alibag, in the village of Bopoli —
            a short drive from the beach yet wrapped in coconut palms, rose vines and the soft
            shoulders of the Sahyadri hills.
          </p>
          <p>
            It's a place built for unhurried weekends. Long lunches under the open sky, evening
            walks past the gate, monsoon clouds rolling over the ridge, and the kind of sunsets
            that ask you to stop scrolling and just sit.
          </p>
          <dl className="grid grid-cols-3 gap-6 pt-6 border-t border-border/70">
            <Stat k="6+" v="Guests" />
            <Stat k="2 hrs" v="From Mumbai" />
            <Stat k="Private" v="Entire farmhouse" />
          </dl>
        </div>
      </div>
    </section>
  );
}

function Stat({ k, v }: { k: string; v: string }) {
  return (
    <div>
      <div className="font-display text-3xl text-primary">{k}</div>
      <div className="mt-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">{v}</div>
    </div>
  );
}

function Gallery() {
  const items = [
    { src: plumeria.url, alt: "Plumeria flower against monsoon hills", tall: true },
    { src: sunsetCar.url, alt: "Sunset behind the Sahyadri ridge" },
    { src: palms.url, alt: "Coconut palms reaching into the sky" },
    { src: roseSunset.url, alt: "A rose held to the evening sky" },
    { src: entrance.url, alt: "Farmhouse entrance under a clear blue sky", wide: true },
  ];
  return (
    <section id="gallery" className="py-24 md:py-32 bg-background">
      <div className="container-pad">
        <div className="flex items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-accent">Gallery</p>
            <h2 className="mt-3 text-4xl md:text-5xl text-primary">A few quiet moments</h2>
          </div>
          <p className="hidden md:block max-w-xs text-sm text-muted-foreground">
            Snapshots from around the farmhouse — across seasons, weather and hours of the day.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {items.map((it, i) => (
            <figure
              key={i}
              className={`relative overflow-hidden rounded-2xl bg-muted group ${
                it.tall ? "row-span-2 aspect-[3/5] md:aspect-[3/5]" : it.wide ? "col-span-2 aspect-[16/10]" : "aspect-[4/5]"
              }`}
            >
              <img
                src={it.src}
                alt={it.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stay() {
  const features = [
    { t: "Open lawn & garden", d: "Room to wander, room for kids to run, room for nothing at all." },
    { t: "Decorated entrance", d: "Set up for small functions, family pujas and intimate gatherings." },
    { t: "Hill & sunset views", d: "Sahyadri ridge to the east, open western sky for golden hours." },
    { t: "Parking on site", d: "Easy gated parking for multiple cars right inside the property." },
    { t: "Coconut & flower groves", d: "Plumeria, roses and tall coconut palms across the plot." },
    { t: "Quiet, private village", d: "No traffic, no horns — only the wind and the occasional bird." },
  ];
  return (
    <section id="stay" className="py-24 md:py-32 bg-primary text-primary-foreground">
      <div className="container-pad">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--clay)]">The stay</p>
          <h2 className="mt-3 text-4xl md:text-5xl">
            What you'll find when you arrive
          </h2>
        </div>
        <div className="mt-14 grid gap-px bg-primary-foreground/10 rounded-2xl overflow-hidden md:grid-cols-3">
          {features.map((f) => (
            <div key={f.t} className="bg-primary p-8 md:p-10">
              <h3 className="text-2xl font-display">{f.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-primary-foreground/75">{f.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Location() {
  return (
    <section id="location" className="py-24 md:py-32 bg-[color:var(--cream)]">
      <div className="container-pad grid gap-12 md:grid-cols-12 md:gap-16 items-center">
        <div className="md:col-span-5">
          <p className="text-xs uppercase tracking-[0.3em] text-accent">Find us</p>
          <h2 className="mt-3 text-4xl md:text-5xl text-primary">Bopoli, Alibag</h2>
          <p className="mt-6 text-base leading-relaxed text-foreground/80">
            {ADDRESS}. Roughly a two-hour drive from Mumbai via the Mumbai-Pune highway
            and the Alibag link road, or via the Mandwa jetty.
          </p>
          <a
            href={MAPS_URL}
            target="_blank" rel="noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background hover:opacity-90 transition"
          >
            Open in Google Maps
            <span aria-hidden>→</span>
          </a>
        </div>
        <div className="md:col-span-7">
          <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl border border-border shadow-sm">
            <iframe
              title="Pant Krupa Farmhouse location"
              src="https://www.google.com/maps?q=Bopoli+Tadwagale+Alibag&output=embed"
              className="h-full w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-background">
      <div className="container-pad">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.3em] text-accent">Plan your stay</p>
          <h2 className="mt-3 text-4xl md:text-5xl text-primary">
            Reach out — we'll get back the same day.
          </h2>
          <p className="mt-5 text-foreground/75">
            Tell us your dates and group size and we'll share availability, tariff and
            directions. Drop a message on WhatsApp for the fastest reply.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          <ContactCard
            label="WhatsApp"
            value={PHONE}
            href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent("Hi Pant Krupa, I'd like to enquire about a stay.")}`}
            cta="Message us"
          />
          <ContactCard label="Call" value={PHONE} href={`tel:${PHONE_TEL}`} cta="Tap to call" />
          <ContactCard label="Email" value={EMAIL} href={`mailto:${EMAIL}`} cta="Send email" />
        </div>

        <InquiryForm />
      </div>
    </section>
  );
}

function ContactCard({ label, value, href, cta }: { label: string; value: string; href: string; cta: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group rounded-2xl border border-border bg-card p-6 hover:border-accent transition-colors"
    >
      <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">{label}</div>
      <div className="mt-3 font-display text-2xl text-primary">{value}</div>
      <div className="mt-6 text-sm text-accent group-hover:translate-x-1 transition-transform">
        {cta} →
      </div>
    </a>
  );
}

function InquiryForm() {
  const [data, setData] = useState({ name: "", phone: "", dates: "", guests: "", note: "" });
  const set = (k: keyof typeof data) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setData({ ...data, [k]: e.target.value });

  const message = encodeURIComponent(
    `Hi Pant Krupa Farmhouse,\n\nName: ${data.name}\nPhone: ${data.phone}\nDates: ${data.dates}\nGuests: ${data.guests}\n\n${data.note}`,
  );

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        window.open(`https://wa.me/${WHATSAPP}?text=${message}`, "_blank");
      }}
      className="mt-16 rounded-3xl border border-border bg-card p-6 md:p-10"
    >
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Your name"><input required value={data.name} onChange={set("name")} className={inputCls} /></Field>
        <Field label="Phone"><input required value={data.phone} onChange={set("phone")} className={inputCls} type="tel" /></Field>
        <Field label="Dates"><input value={data.dates} onChange={set("dates")} placeholder="e.g. 24 – 26 Jan" className={inputCls} /></Field>
        <Field label="Guests"><input value={data.guests} onChange={set("guests")} placeholder="e.g. 6 adults, 2 kids" className={inputCls} /></Field>
        <Field label="Anything else?" className="md:col-span-2">
          <textarea value={data.note} onChange={set("note")} rows={4} className={inputCls + " resize-none"} />
        </Field>
      </div>
      <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
        <p className="text-xs text-muted-foreground">Submitting opens WhatsApp with your message pre-filled.</p>
        <button
          type="submit"
          className="inline-flex items-center rounded-full bg-accent px-7 py-3 text-sm font-medium text-accent-foreground hover:opacity-90 transition"
        >
          Send inquiry
        </button>
      </div>
    </form>
  );
}

const inputCls =
  "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition";

function Field({ label, children, className = "" }: { label: string; children: React.ReactNode; className?: string }) {
  return (
    <label className={`block ${className}`}>
      <span className="block text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">{label}</span>
      {children}
    </label>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-[color:var(--cream)]">
      <div className="container-pad py-12 grid gap-8 md:grid-cols-3 items-start">
        <div>
          <div className="font-display text-2xl text-primary">Pant Krupa Farmhouse</div>
          <p className="mt-2 text-sm text-muted-foreground max-w-xs">{ADDRESS}</p>
        </div>
        <div className="text-sm text-foreground/80 space-y-2">
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Contact</div>
          <div>{PHONE}</div>
          <div>{EMAIL}</div>
        </div>
        <div className="text-sm text-foreground/80 space-y-2 md:text-right">
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Visit</div>
          <a href={MAPS_URL} target="_blank" rel="noreferrer" className="hover:text-accent">Google Maps →</a>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="container-pad py-5 text-xs text-muted-foreground flex flex-wrap items-center justify-between gap-2">
          <span>© {new Date().getFullYear()} Pant Krupa Farmhouse</span>
          <span>Alibag · Maharashtra · India</span>
        </div>
      </div>
    </footer>
  );
}
