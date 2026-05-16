import { Link } from "react-router-dom";
import { NAV_ITEMS } from "../data/navigation";

export default function Footer() {
  return (
    <footer className="bg-ink text-cream border-t border-cream/10">
      <div className="mx-auto max-w-container px-6 py-16 lg:px-12 lg:py-20">
        <div className="grid grid-cols-12 gap-6 mb-16">
          <div className="col-span-12 lg:col-span-5">
            <div className="font-serif text-4xl tracking-tight lg:text-5xl">
              Mindshore
            </div>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-cream/60">
              The human infrastructure behind enterprise AI. Built for
              programme requirements, not legacy outsourcing.
            </p>
          </div>

          <div className="col-span-6 lg:col-span-2">
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent mb-4">
              Pages
            </div>
            <ul className="space-y-2 text-sm">
              {NAV_ITEMS.slice(0, 5).map((n) => (
                <li key={n.path}>
                  <Link
                    to={n.path}
                    className="text-cream/70 hover:text-accent transition"
                  >
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-6 lg:col-span-2">
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent mb-4">
              More
            </div>
            <ul className="space-y-2 text-sm">
              {NAV_ITEMS.slice(5).map((n) => (
                <li key={n.path}>
                  <Link
                    to={n.path}
                    className="text-cream/70 hover:text-accent transition"
                  >
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-12 lg:col-span-3">
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent mb-4">
              Contact
            </div>
            <p className="text-sm text-cream/70 mb-2">
              partnerships@mindshoregroup.com
            </p>
            <p className="text-sm text-cream/70">www.mindshoregroup.com</p>
          </div>
        </div>

        <div className="border-t border-cream/10 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="font-mono text-[11px] text-cream/50 tracking-wider">
            © {new Date().getFullYear()} Mindshore Group Limited. All rights
            reserved.
          </div>
          <div className="flex gap-6 font-mono text-[11px] text-cream/50 tracking-wider">
            <span>GDPR-Aligned</span>
            <span>·</span>
            <span>SOC 2 Roadmap</span>
            <span>·</span>
            <span>UK Registered</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
