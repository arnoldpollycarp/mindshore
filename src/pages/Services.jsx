import PageHeader from "../components/PageHeader";
import { AI_SERVICES, BPO_SERVICES } from "../data/services";
import ServicesBg from "../assets/HeroImgAI.jpg";

export default function Services() {
  return (
    <div>
      <PageHeader
        pageNum="03"
        eyebrow="Services"
        title={
          <>
            Three practices.
            <br />
            One operating{" "}
            <span className="italic text-accent">standard</span>.
          </>
        }
        lead="From AI data operations to managed workforces, every Mindshore engagement runs on the same delivery discipline."
        bgImage={ServicesBg}
      />

      {/* AI Operations */}
      <section className="border-b border-ink/15 bg-paper">
        <div className="mx-auto max-w-container px-6 py-24 lg:px-12 lg:py-32">
          <div className="grid grid-cols-12 gap-6 mb-16">
            <div className="col-span-12 lg:col-span-3">
              <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-accent">
                I. AI Operations
              </div>
            </div>
            <div className="col-span-12 lg:col-span-8">
              <h2 className="font-serif text-4xl leading-[1.1] tracking-tight text-ink lg:text-5xl">
                AI Data Operations
              </h2>
            </div>
          </div>

          <div className="border-t border-ink/20">
            {AI_SERVICES.map((s, i) => (
              <div
                key={i}
                className="group grid grid-cols-12 gap-6 border-b border-ink/20 py-10 transition hover:bg-cream"
              >
                <div className="col-span-12 lg:col-span-1">
                  <span className="font-mono text-sm text-accent">{s.n}</span>
                </div>
                <div className="col-span-12 lg:col-span-4">
                  <h3 className="font-serif text-2xl leading-tight tracking-tight text-ink lg:text-[28px]">
                    {s.title}
                  </h3>
                </div>
                <div className="col-span-12 lg:col-span-7 space-y-4">
                  <p className="leading-relaxed text-ink/80">{s.body}</p>
                  {s.cases && (
                    <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-ink/55">
                      Use cases: {s.cases}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Safety */}
      <section className="border-b border-ink/15 bg-ink text-cream">
        <div className="mx-auto max-w-container px-6 py-24 lg:px-12 lg:py-32">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 lg:col-span-3">
              <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-accent">
                II. Trust & Safety
              </div>
            </div>
            <div className="col-span-12 lg:col-span-9">
              <h2 className="font-serif text-4xl leading-[1.1] tracking-tight lg:text-5xl mb-8">
                Trust and Safety Operations
              </h2>
              <p className="text-lg leading-relaxed text-cream/80 max-w-3xl">
                Mindshore operates content moderation and trust and safety
                programmes for platforms and AI systems requiring policy
                enforcement at scale. Teams are trained on client content
                policies and supported by structured escalation frameworks and
                workforce well-being programmes designed for sustained
                operational performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BPO */}
      <section className="bg-cream">
        <div className="mx-auto max-w-container px-6 py-24 lg:px-12 lg:py-32">
          <div className="grid grid-cols-12 gap-6 mb-16">
            <div className="col-span-12 lg:col-span-3">
              <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-accent">
                III. BPO
              </div>
            </div>
            <div className="col-span-12 lg:col-span-8">
              <h2 className="font-serif text-4xl leading-[1.1] tracking-tight text-ink lg:text-5xl">
                BPO & Managed Workforce
              </h2>
            </div>
          </div>

          <div className="border-t border-ink/20">
            {BPO_SERVICES.map((s, i) => (
              <div
                key={i}
                className="group grid grid-cols-12 gap-6 border-b border-ink/20 py-10 transition hover:bg-paper"
              >
                <div className="col-span-12 lg:col-span-1">
                  <span className="font-mono text-sm text-accent">{s.n}</span>
                </div>
                <div className="col-span-12 lg:col-span-4">
                  <h3 className="font-serif text-2xl leading-tight tracking-tight text-ink lg:text-[28px]">
                    {s.title}
                  </h3>
                </div>
                <div className="col-span-12 lg:col-span-7">
                  <p className="leading-relaxed text-ink/80">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
