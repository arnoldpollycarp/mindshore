export default function Eyebrow({ children, num }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      {num && (
        <span className="font-mono text-[11px] text-accent tracking-widest">
          {num}
        </span>
      )}
      <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-ink/60">
        {children}
      </span>
      <span className="h-px flex-1 max-w-[80px] bg-ink/30" />
    </div>
  );
}
