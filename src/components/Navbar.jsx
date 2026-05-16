import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { NAV_ITEMS } from "../data/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const handleNav = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/15 bg-cream/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-container items-center justify-between px-6 py-5 lg:px-12">
        <Link to="/" onClick={handleNav} className="flex items-baseline gap-2">
          <span className="font-serif text-2xl tracking-tight text-ink">
            Mindshore
          </span>
          <span className="hidden text-[10px] font-mono uppercase tracking-[0.2em] text-ink/50 sm:inline">
            Group Ltd.
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `relative px-3 py-2 text-[13px] tracking-wide transition-colors ${
                  isActive ? "text-ink" : "text-ink/60 hover:text-ink"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-px bg-accent" />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <Link
          to="/contact"
          className="hidden lg:inline-flex items-center gap-2 border border-ink bg-ink px-5 py-2.5 text-[12px] font-medium uppercase tracking-[0.15em] text-cream transition hover:bg-accent hover:border-accent"
        >
          Briefing <ArrowUpRight className="h-3.5 w-3.5" />
        </Link>

        <button
          className="lg:hidden text-ink"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-ink/15 bg-cream">
          <div className="flex flex-col px-6 py-4">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={handleNav}
                className={({ isActive }) =>
                  `py-3 text-left text-sm border-b border-ink/10 ${
                    isActive ? "text-accent" : "text-ink"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
