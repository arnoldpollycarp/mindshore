import PageHeader from "../components/PageHeader";
import Eyebrow from "../components/Eyebrow";
import AboutBg from "../assets/heroPageImg.jpg";

export default function About() {
  return (
    <div>
      <PageHeader
        pageNum="02"
        eyebrow="Who We Are"
        title={
          <>
            Operational discipline
            <br />
            for enterprise AI{" "}
            <span className="italic text-accent">programmes</span>.
          </>
        }
        lead="Mindshore Group Limited was established to address a structural gap in the AI services market: the absence of an operationally mature, compliance-aligned provider capable of delivering the human infrastructure that enterprise AI development and deployment requires."
        bgImage={AboutBg}
      />

      {/* The Context */}
      <section className="border-b border-ink/15 bg-paper">
        <div className="mx-auto max-w-container px-6 py-24 lg:px-12 lg:py-32">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 lg:col-span-5">
              <Eyebrow num="§ I">The Context</Eyebrow>
              <h2 className="font-serif text-3xl leading-tight tracking-tight text-ink lg:text-4xl">
                A market built on assumptions that no longer hold.
              </h2>
            </div>
            <div className="col-span-12 lg:col-span-6 lg:col-start-7 space-y-6">
              <p className="text-lg leading-relaxed text-ink/80">
                Enterprise AI teams face increasing pressure to produce
                high-quality training data, evaluate model outputs
                systematically, and deploy human judgment at critical points in
                AI-assisted workflows — all while managing data security
                obligations and maintaining audit-ready documentation.
                General-purpose outsourcing providers are not structured to
                meet these requirements.
              </p>
              <p className="font-serif text-2xl leading-relaxed text-ink">
                <span className="text-accent">Mindshore is.</span> Our company
                was built around the operational requirements of enterprise AI
                programmes, with delivery frameworks, workforce training
                systems, and compliance infrastructure designed specifically
                for this environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="border-b border-ink/15 bg-cream">
        <div className="mx-auto max-w-container px-6 py-24 lg:px-12 lg:py-32">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 lg:col-span-5">
              <Eyebrow num="§ II">Our Approach</Eyebrow>
              <h2 className="font-serif text-4xl leading-[1.1] tracking-tight text-ink lg:text-5xl">
                Structured delivery.
                <br />
                <span className="italic">Measurable outcomes.</span>
              </h2>
            </div>
            <div className="col-span-12 lg:col-span-6 lg:col-start-7">
              <p className="text-lg leading-relaxed text-ink/80">
                We do not position ourselves as a technology company. We are an
                operations company — and operational excellence is what our
                clients depend on us to deliver. That means workforce
                management systems that maintain quality at scale, QA
                frameworks that surface issues before they affect client
                deliverables, and programme governance that gives enterprise
                stakeholders the visibility and control they require.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Commitment */}
      <section className="bg-ink text-cream">
        <div className="mx-auto max-w-container px-6 py-24 lg:px-12 lg:py-32">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 lg:col-span-5">
              <div className="mb-6 flex items-center gap-3">
                <span className="font-mono text-[11px] tracking-widest text-accent">
                  § III
                </span>
                <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-cream/60">
                  Our Commitment
                </span>
              </div>
              <h2 className="font-serif text-4xl leading-[1.1] tracking-tight lg:text-5xl">
                Responsible operations across the AI value chain.
              </h2>
            </div>
            <div className="col-span-12 lg:col-span-6 lg:col-start-7 space-y-6">
              <p className="text-lg leading-relaxed text-cream/80">
                Mindshore applies responsible workforce and programme standards
                across all AI operations delivery. This includes fair
                compensation and working hour standards for high-cognitive-load
                roles, psychosocial support for trust and safety personnel, and
                a programme acceptance process that screens for ethical
                alignment before delivery begins.
              </p>
              <p className="font-serif text-xl italic leading-relaxed text-cream">
                We are committed to building an outsourcing operation that the
                AI industry can trust — not just for output quality, but for{" "}
                <span className="text-accent not-italic">
                  how that output is produced.
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
