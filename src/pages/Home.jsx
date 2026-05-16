import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Plus } from "lucide-react";
import Eyebrow from "../components/Eyebrow";
import HeroImg from "../assets/data_hero_img.jpg";

const TICKER = [
  "AI Data Operations",
  "RLHF",
  "Trust & Safety",
  "BPO",
  "Model Evaluation",
  "Red-Teaming",
  "Managed Workforce",
  "GDPR-Aligned",
];

const GLANCE_ITEMS = [
  {
    num: "I.",
    title: "AI Data Operations",
    body: "Annotation, RLHF, model evaluation, red-teaming, prompt validation, and human-in-the-loop workflows — designed for AI teams building and improving models at scale.",
  },
  {
    num: "II.",
    title: "Trust & Safety",
    body: "Structured content moderation and policy enforcement operations, delivered by trained teams under well-being-aware management frameworks.",
  },
  {
    num: "III.",
    title: "Business Process Outsourcing",
    body: "Customer support, back-office processing, and dedicated remote workforce deployment — integrated into client operations with defined SLAs and QA reporting.",
  },
];

const WHY_ITEMS = [
  {
    t: "AI-Native Operations",
    b: "Every delivery framework, training pathway, and QA system is designed around AI programme requirements from the ground up.",
  },
  {
    t: "Compliance-Aligned",
    b: "GDPR-aware delivery environments, executed DPAs, and security documentation designed for enterprise vendor due diligence.",
  },
  {
    t: "Dedicated Workforce",
    b: "Clients receive dedicated teams — not shared capacity pools. Your programme is resourced, trained, and calibrated for your specific requirements.",
  },
  {
    t: "Measurable Quality",
    b: "Inter-annotator agreement tracking, throughput reporting, and calibration-based iteration are standard components of every programme.",
  },
];

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <section
        className="relative border-b border-ink/15 bg-fixed bg-cover bg-center"
        style={{ backgroundImage: `url(${HeroImg})` }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-ink/70" />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
        <div className="relative mx-auto max-w-container px-6 py-24 lg:px-12 lg:py-40">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 lg:col-span-2">
              <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-cream/50">
                01 / Homepage
              </div>
            </div>
            <div className="col-span-12 lg:col-span-10">
              <div className="mb-8 flex items-center gap-3">
                <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-accent">
                  Hero
                </span>
                <span className="h-px w-20 bg-cream/30" />
                <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-cream/50">
                  Enterprise AI Operations
                </span>
              </div>

              <h1 className="font-serif text-[clamp(2.5rem,7vw,7rem)] leading-[0.95] tracking-tight text-cream">
                The Human
                <br />
                Infrastructure
                <br />
                <span className="italic text-accent">Behind</span> Enterprise
                AI.
              </h1>

              <div className="mt-12 grid grid-cols-12 gap-6">
                <div className="col-span-12 lg:col-span-7">
                  <p className="text-lg leading-relaxed text-cream/75 lg:text-xl">
                    Mindshore Group Limited delivers AI data operations,
                    managed workforce solutions, and business process
                    outsourcing for enterprise clients across the US and EU.
                  </p>
                  <p className="mt-6 font-serif text-base italic text-cream/55">
                    Structured delivery. Compliance-aligned infrastructure.
                    Trained workforces built for AI programmes at scale.
                  </p>
                </div>
                <div className="col-span-12 flex flex-col gap-3 self-end lg:col-span-5 lg:items-end">
                  <Link
                    to="/services"
                    className="group inline-flex items-center justify-between gap-4 border border-cream bg-cream px-6 py-4 text-[12px] font-medium uppercase tracking-[0.2em] text-ink transition hover:bg-accent hover:border-accent hover:text-cream w-full lg:w-auto"
                  >
                    Explore Our Services
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </Link>
                  <Link
                    to="/contact"
                    className="group inline-flex items-center justify-between gap-4 border border-cream/60 px-6 py-4 text-[12px] font-medium uppercase tracking-[0.2em] text-cream transition hover:bg-cream hover:text-ink w-full lg:w-auto"
                  >
                    Request a Briefing
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Ticker */}
        <div className="border-t border-ink/15 bg-ink py-3 overflow-hidden">
          <div className="flex gap-12 whitespace-nowrap font-mono text-[11px] uppercase tracking-[0.3em] text-cream/60 animate-marquee">
            {[...TICKER, ...TICKER].map((t, i) => (
              <span key={i} className="flex items-center gap-12">
                {t} <span className="text-accent">◆</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* AT A GLANCE */}
      <section className="border-b border-ink/15 bg-paper">
        <div className="mx-auto max-w-container px-6 py-24 lg:px-12 lg:py-32">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 lg:col-span-4">
              <Eyebrow num="§ 01">At a Glance</Eyebrow>
              <h2 className="font-serif text-4xl leading-[1.1] tracking-tight text-ink lg:text-5xl">
                Built for the operational demands of enterprise AI.
              </h2>
            </div>
            <div className="col-span-12 lg:col-span-7 lg:col-start-6">
              <p className="text-lg leading-relaxed text-ink/75">
                As AI development has accelerated, so has the demand for
                structured, accountable human operations to support it.
                Mindshore provides that operational layer — combining
                specialist workforces, rigorous quality systems, and secure
                delivery infrastructure designed to integrate directly into
                enterprise AI and business workflows.
              </p>
            </div>
          </div>

          <div className="mt-20 border-t border-ink/20">
            {GLANCE_ITEMS.map((item, i) => (
              <div
                key={i}
                className="group grid grid-cols-12 gap-6 border-b border-ink/20 py-10 transition hover:bg-cream"
              >
                <div className="col-span-2 lg:col-span-1">
                  <span className="font-serif text-2xl italic text-accent">
                    {item.num}
                  </span>
                </div>
                <div className="col-span-10 lg:col-span-4">
                  <h3 className="font-serif text-2xl tracking-tight text-ink lg:text-3xl">
                    {item.title}
                  </h3>
                </div>
                <div className="col-span-12 lg:col-span-6 lg:col-start-7">
                  <p className="leading-relaxed text-ink/75">{item.body}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 max-w-3xl">
            <p className="font-serif text-xl leading-relaxed text-ink">
              Mindshore serves enterprise clients in technology, financial
              services, healthcare, legal, and media.{" "}
              <Link
                to="/about"
                className="underline decoration-accent decoration-2 underline-offset-4 hover:text-accent"
              >
                Learn more about how we work →
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* WHY MINDSHORE */}
      <section className="bg-ink text-cream">
        <div className="mx-auto max-w-container px-6 py-24 lg:px-12 lg:py-32">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 lg:col-span-5">
              <div className="mb-6 flex items-center gap-3">
                <span className="font-mono text-[11px] tracking-widest text-accent">
                  § 02
                </span>
                <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-cream/60">
                  Why Mindshore
                </span>
              </div>
              <h2 className="font-serif text-4xl leading-[1.1] tracking-tight lg:text-5xl">
                What separates us from{" "}
                <span className="italic text-accent">general-purpose</span>{" "}
                outsourcing.
              </h2>
              <p className="mt-8 leading-relaxed text-cream/70">
                Mindshore is not a generalist BPO that has rebranded for the AI
                market. AI operations are our primary domain. Our workforce
                recruitment, training, calibration processes, and quality
                assurance frameworks are built specifically for AI programme
                requirements — not adapted from legacy call centre or data
                entry operations.
              </p>
            </div>

            <div className="col-span-12 lg:col-span-6 lg:col-start-7">
              <div className="grid grid-cols-1 gap-px bg-cream/15 md:grid-cols-2">
                {WHY_ITEMS.map((item, i) => (
                  <div
                    key={i}
                    className="bg-ink p-8 transition hover:bg-ink/50"
                  >
                    <Plus className="h-4 w-4 text-accent mb-4" />
                    <h4 className="font-serif text-xl tracking-tight mb-3">
                      {item.t}
                    </h4>
                    <p className="text-sm leading-relaxed text-cream/65">
                      {item.b}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
