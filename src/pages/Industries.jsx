import { ArrowUpRight } from "lucide-react";
import PageHeader from "../components/PageHeader";
import { SECTORS } from "../data/content";
import IndustriesBg from "../assets/Leader_as.jpg";

export default function Industries() {
  return (
    <div>
      <PageHeader
        pageNum="07"
        eyebrow="Sectors We Serve"
        title={
          <>
            Enterprise-grade delivery across{" "}
            <span className="italic text-accent">key</span> verticals.
          </>
        }
        lead="Mindshore serves enterprise clients across industries where AI deployment, data governance, and operational accuracy are strategic and often regulated priorities."
        bgImage={IndustriesBg}
      />

      <section className="bg-paper">
        <div className="mx-auto max-w-container px-6 py-24 lg:px-12 lg:py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-ink/15">
            {SECTORS.map((s, i) => (
              <div
                key={i}
                className="group bg-paper p-10 lg:p-12 transition hover:bg-cream relative"
              >
                <div className="flex items-start justify-between mb-8">
                  <span className="font-serif text-5xl italic text-accent">
                    {s.n}
                  </span>
                  <ArrowUpRight className="h-5 w-5 text-ink/30 transition group-hover:text-accent group-hover:-translate-y-1 group-hover:translate-x-1" />
                </div>
                <h3 className="font-serif text-2xl leading-tight tracking-tight text-ink mb-4">
                  {s.t}
                </h3>
                <p className="text-sm leading-relaxed text-ink/75">{s.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
