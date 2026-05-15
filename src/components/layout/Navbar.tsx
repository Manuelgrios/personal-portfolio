import { Menu } from "lucide-react";
import { NavLink } from "react-router-dom";
import { profile } from "../../data/profile";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <NavLink to="/" className="font-semibold tracking-wide text-text">
          {profile.name}
        </NavLink>
        <div className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) =>
                [
                  "rounded-full px-4 py-2 text-sm transition",
                  isActive
                    ? "bg-accent/12 text-accent"
                    : "text-muted hover:bg-surface-soft hover:text-text",
                ].join(" ")
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
        <button
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted md:hidden"
          aria-label="Open navigation"
          type="button"
        >
          <Menu size={18} />
        </button>
      </nav>
    </header>
  );
}
