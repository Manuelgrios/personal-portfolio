import { Download, Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { profile, profileLinks } from "../../data/profile";

const navItems = [
  { label: "About", href: "/#about" },
  { label: "Projects", href: "/#projects" },
  { label: "Skills", href: "/#skills" },
  { label: "Contact", href: "/#contact" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/82 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-[1180px] items-center justify-between px-5">
        <Link to="/" className="flex items-center gap-4">
          <span className="text-2xl font-black tracking-normal text-accent-dark">
            MG
          </span>
          <span className="text-base font-semibold text-text">{profile.name}</span>
        </Link>
        <div className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className="text-sm font-medium text-slate-200 transition hover:text-accent"
            >
              {item.label}
            </Link>
          ))}
          <a
            className="inline-flex min-h-10 items-center gap-2 rounded-lg border border-accent-dark bg-accent-dark px-4 text-sm font-semibold text-white shadow-[0_0_18px_rgb(37_99_235_/_0.28)] transition hover:bg-blue-500"
            download
            href={profileLinks.resume}
          >
            <Download size={16} />
            Resume
          </a>
        </div>
        <button
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border text-muted md:hidden"
          aria-label="Open navigation"
          type="button"
        >
          <Menu size={18} />
        </button>
      </nav>
    </header>
  );
}
