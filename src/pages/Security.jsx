import PageHeader from "../components/PageHeader";
import { SECURITY_SECTIONS } from "../data/security";
import SecurityBg from "../assets/securitypage.png";

export default function Security() {
  return (
    <div>
      <PageHeader
        pageNum="05"
        eyebrow="Security & Compliance"
        title={
          <>
            Security infrastructure for{" "}
            <span className="italic text-accent">regulated</span> data.
          </>
        }
        lead="Mindshore's security and compliance framework is designed to support enterprise clients operating in regulated environments across the United States and European Union. The following standards govern all programme delivery."
        bgImage={SecurityBg}
      />

      <section className="bg-paper">
        <div className="mx-auto max-w-container px-6 py-24 lg:px-12 lg:py-32">
          <div className="space-y-16">
            {SECURITY_SECTIONS.map((s, i) => (
              <div
                key={i}
                className="grid grid-cols-12 gap-6 border-b border-ink/20 pb-16 last:border-0"
              >
                <div className="col-span-12 lg:col-span-4">
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono text-sm text-accent">
                      0{i + 1}
                    </span>
                    <h2 className="font-serif text-3xl leading-tight tracking-tight text-ink lg:text-4xl">
                      {s.title}
                    </h2>
                  </div>
                </div>
                <div className="col-span-12 lg:col-span-7 lg:col-start-6">
                  <ul className="space-y-5">
                    {s.points.map((p, j) => (
                      <li key={j} className="flex gap-4">
                        <span className="mt-2 h-px w-6 flex-shrink-0 bg-accent" />
                        <span className="leading-relaxed text-ink/80">
                          {p}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
