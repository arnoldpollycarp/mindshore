import { ArrowUpRight } from "lucide-react";
import PageHeader from "../components/PageHeader";
import Eyebrow from "../components/Eyebrow";
import { ROLES } from "../data/content";
import CareersBg from "../assets/Ppt_AI.jpg";

export default function Careers() {
  return (
    <div>
      <PageHeader
        pageNum="08"
        eyebrow="Join Mindshore"
        title={
          <>
            Build the human layer of{" "}
            <span className="italic text-accent">enterprise AI</span>.
          </>
        }
        lead="Mindshore is building an operations company that the AI industry depends on. Our work is detailed, rigorous, and consequential — it directly shapes the quality and safety of AI systems used by enterprises around the world."
        bgImage={CareersBg}
      />

      <section className="border-b border-ink/15 bg-cream">
        <div className="mx-auto max-w-container px-6 py-24 lg:px-12 lg:py-32">
          <div className="grid grid-cols-12 gap-6 mb-16">
            <div className="col-span-12 lg:col-span-5">
              <Eyebrow num="§ A">What We Look For</Eyebrow>
              <h2 className="font-serif text-3xl tracking-tight text-ink lg:text-4xl">
                Quality. Clarity. Standards.
              </h2>
            </div>
            <div className="col-span-12 lg:col-span-6 lg:col-start-7">
              <p className="text-lg leading-relaxed text-ink/80">
                We look for people who take quality seriously, communicate
                clearly, and are committed to professional standards in
                everything they deliver.
              </p>
            </div>
          </div>

          <div className="border-t border-ink/20">
            {ROLES.map((r, i) => (
              <div
                key={i}
                className="group grid grid-cols-12 gap-6 border-b border-ink/20 py-10 transition hover:bg-paper cursor-pointer"
              >
                <div className="col-span-1">
                  <span className="font-mono text-sm text-accent">
                    0{i + 1}
                  </span>
                </div>
                <div className="col-span-11 lg:col-span-5">
                  <h3 className="font-serif text-2xl leading-tight tracking-tight text-ink lg:text-3xl">
                    {r.t}
                  </h3>
                </div>
                <div className="col-span-12 lg:col-span-5 lg:col-start-7 flex items-center justify-between gap-6">
                  <p className="leading-relaxed text-ink/75">{r.b}</p>
                  <ArrowUpRight className="h-5 w-5 text-ink/30 transition group-hover:text-accent flex-shrink-0" />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 grid grid-cols-12 gap-6">
            <div className="col-span-12 lg:col-span-7 lg:col-start-3 bg-ink p-10 lg:p-14 text-cream">
              <p className="font-serif text-xl leading-relaxed mb-8 lg:text-2xl">
                Mindshore applies fair labour standards across its workforce.
                Roles are compensated transparently, and workforce well-being
                programmes are in place for personnel in high-cognitive-load
                functions.
              </p>
              <a
                href="#"
                className="group inline-flex items-center gap-3 border-b border-accent pb-2 text-sm font-medium uppercase tracking-[0.2em] text-accent"
              >
                View Open Roles
                <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <div className="mt-6 font-mono text-xs text-cream/50">
                www.mindshoregroup.com/careers
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
