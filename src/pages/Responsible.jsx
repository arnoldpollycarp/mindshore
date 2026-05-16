import PageHeader from "../components/PageHeader";
import Eyebrow from "../components/Eyebrow";
import { RESPONSIBLE_AI_PILLARS } from "../data/content";
import ResponsibleBg from "../assets/responsible_AI.png";

export default function Responsible() {
  return (
    <div>
      <PageHeader
        pageNum="06"
        eyebrow="Responsible AI & Impact"
        title={
          <>
            Responsible operations across the AI{" "}
            <span className="italic text-accent">data supply chain</span>.
          </>
        }
        lead="Human data operations sit at the foundation of AI system quality and safety. The decisions made about how annotation workforces are trained, managed, and supported — and how programme outputs are validated — have a direct impact on the AI systems that millions of people will interact with."
        bgImage={ResponsibleBg}
      />

      <section className="border-b border-ink/15 bg-cream">
        <div className="mx-auto max-w-container px-6 py-24 lg:px-12 lg:py-32">
          <div className="grid grid-cols-12 gap-6 mb-20">
            <div className="col-span-12 lg:col-span-2">
              <Eyebrow>Position</Eyebrow>
            </div>
            <div className="col-span-12 lg:col-span-9">
              <p className="font-serif text-2xl leading-snug text-ink lg:text-3xl">
                Mindshore applies a responsible operations framework across all
                AI programme delivery.{" "}
                <span className="italic text-accent">
                  This is not a marketing position.
                </span>{" "}
                It is an operational commitment reflected in how we recruit,
                train, manage, and support our workforce, and in the
                programmes we accept.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-ink/15">
            {RESPONSIBLE_AI_PILLARS.map((col, i) => (
              <div key={i} className="bg-cream p-10 lg:p-12">
                <div className="border-t-2 border-accent pt-6 mb-8">
                  <h3 className="font-serif text-2xl tracking-tight text-ink">
                    {col.t}
                  </h3>
                </div>
                <ul className="space-y-5">
                  {col.items.map((it, j) => (
                    <li
                      key={j}
                      className="text-sm leading-relaxed text-ink/80 pl-5 border-l border-ink/30"
                    >
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
