import PageHeader from "../components/PageHeader";
import Eyebrow from "../components/Eyebrow";
import { DELIVERY_LAYERS, ONBOARDING_PHASES } from "../data/delivery";
import DeliveryBg from "../assets/Lean_Ai.jpg";

export default function Delivery() {
  return (
    <div>
      <PageHeader
        pageNum="04"
        eyebrow="How We Work"
        title={
          <>
            A delivery model built for{" "}
            <span className="italic text-accent">enterprise</span> programme
            requirements.
          </>
        }
        lead="Mindshore's delivery model is structured across four operational layers that govern every programme we run. These layers apply regardless of programme type or volume, ensuring consistency, accountability, and measurable quality across all engagements."
        bgImage={DeliveryBg}
      />

      {/* Four layers */}
      <section className="border-b border-ink/15 bg-paper">
        <div className="mx-auto max-w-container px-6 py-24 lg:px-12 lg:py-32">
          <Eyebrow num="§ A">Operational Layers</Eyebrow>
          <h2 className="font-serif text-3xl tracking-tight text-ink mb-16 lg:text-4xl max-w-2xl">
            Four layers, applied to every programme.
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-ink/15">
            {DELIVERY_LAYERS.map((l, i) => (
              <div
                key={i}
                className="bg-paper p-10 lg:p-12 transition hover:bg-cream"
              >
                <div className="flex items-start justify-between mb-8">
                  <span className="font-serif text-6xl italic text-accent">
                    {l.n}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/50 mt-3">
                    Layer
                  </span>
                </div>
                <h3 className="font-serif text-2xl tracking-tight text-ink mb-4 lg:text-3xl">
                  {l.title}
                </h3>
                <p className="leading-relaxed text-ink/75">{l.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Onboarding */}
      <section className="bg-ink text-cream">
        <div className="mx-auto max-w-container px-6 py-24 lg:px-12 lg:py-32">
          <div className="mb-16">
            <div className="mb-6 flex items-center gap-3">
              <span className="font-mono text-[11px] tracking-widest text-accent">
                § B
              </span>
              <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-cream/60">
                Onboarding
              </span>
            </div>
            <h2 className="font-serif text-4xl leading-[1.1] tracking-tight max-w-3xl lg:text-5xl">
              Programme onboarding:
              <br />
              <span className="italic">a phased approach.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ONBOARDING_PHASES.map((p, i) => (
              <div key={i} className="border-t-2 border-accent pt-6">
                <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-accent mb-4">
                  {p.phase}
                </div>
                <h3 className="font-serif text-2xl tracking-tight mb-4">
                  {p.title}
                </h3>
                <p className="leading-relaxed text-cream/70">{p.body}</p>
              </div>
            ))}
          </div>

          <p className="mt-16 max-w-2xl font-serif text-xl italic text-cream/85">
            This approach reduces ramp risk and ensures operational alignment
            before full-scale deployment.
          </p>
        </div>
      </section>
    </div>
  );
}
