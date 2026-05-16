export default function PageHeader({ pageNum, eyebrow, title, lead, bgImage }) {
  const hasBg = Boolean(bgImage);

  return (
    <section
      className={`relative border-b border-ink/15 ${hasBg ? "bg-fixed bg-cover bg-center" : "bg-cream"}`}
      style={hasBg ? { backgroundImage: `url(${bgImage})` } : undefined}
    >
      {hasBg && <div className="absolute inset-0 bg-ink/70" />}
      {hasBg && (
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      )}
      <div className="relative mx-auto max-w-container px-6 py-20 lg:px-12 lg:py-32">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-2">
            <div className={`font-mono text-[11px] uppercase tracking-[0.25em] ${hasBg ? "text-cream/50" : "text-ink/60"}`}>
              Page {pageNum}
            </div>
          </div>
          <div className="col-span-12 lg:col-span-9">
            <div className="mb-6 font-mono text-[11px] uppercase tracking-[0.25em] text-accent">
              {eyebrow}
            </div>
            <h1 className={`font-serif text-5xl leading-[1.05] tracking-tight md:text-6xl lg:text-7xl ${hasBg ? "text-cream" : "text-ink"}`}>
              {title}
            </h1>
            {lead && (
              <p className={`mt-8 max-w-2xl text-lg leading-relaxed ${hasBg ? "text-cream/75" : "text-ink/75"}`}>
                {lead}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
