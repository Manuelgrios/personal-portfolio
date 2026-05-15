import { Download, Menu, X } from "lucide-react";
import type { MouseEvent } from "react";
import { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { profile, profileLinks } from "../../data/profile";
import { scrollToHash } from "../../lib/hashNavigation";

const navItems = [
  { label: "About", href: "/#about" },
  { label: "Projects", href: "/#projects" },
  { label: "Skills", href: "/#skills" },
  { label: "Contact", href: "/#contact" },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const navRef = useRef<HTMLElement>(null);

  function handleHashClick(
    event: MouseEvent<HTMLAnchorElement>,
    href: string,
  ) {
    setIsMenuOpen(false);
    const hash = href.slice(href.indexOf("#"));

    if (location.pathname === "/") {
      event.preventDefault();
      navigate({ pathname: "/", hash });
      window.requestAnimationFrame(() => scrollToHash(hash));
      return;
    }

    event.preventDefault();
    navigate({ pathname: "/", hash });
  }

  function closeMobileMenu() {
    setIsMenuOpen(false);
  }

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    function handlePointerDown(event: PointerEvent) {
      if (
        navRef.current &&
        event.target instanceof Node &&
        !navRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isMenuOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/82 backdrop-blur-xl">
      <nav ref={navRef} className="relative mx-auto max-w-[1180px] px-5">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" onClick={closeMobileMenu} className="flex items-center gap-4">
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
                onClick={(event) => handleHashClick(event, item.href)}
                className="text-sm font-medium text-slate-200 transition hover:text-accent focus:outline-none focus-visible:text-accent"
              >
                {item.label}
              </Link>
            ))}
            <a
              className="inline-flex min-h-10 items-center gap-2 rounded-lg border border-accent-dark bg-accent-dark px-4 text-sm font-semibold text-white shadow-[0_0_18px_rgb(37_99_235_/_0.28)] transition hover:bg-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
              download
              href={profileLinks.resume}
            >
              <Download size={16} />
              Resume
            </a>
          </div>
          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border text-muted transition hover:border-accent/70 hover:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 md:hidden"
            aria-controls="mobile-navigation"
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? "Close navigation" : "Open navigation"}
            onClick={() => setIsMenuOpen((current) => !current)}
            type="button"
          >
            {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        <div
          id="mobile-navigation"
          className={[
            "absolute inset-x-5 top-[calc(100%+0.5rem)] overflow-hidden rounded-2xl border border-border/80 bg-background/95 shadow-[0_20px_60px_rgb(2_6_23_/_0.45)] backdrop-blur-xl transition md:hidden",
            isMenuOpen
              ? "pointer-events-auto translate-y-0 opacity-100"
              : "pointer-events-none -translate-y-2 opacity-0",
          ].join(" ")}
          hidden={!isMenuOpen}
        >
          <div className="flex flex-col p-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                onClick={(event) => handleHashClick(event, item.href)}
                className="min-h-12 rounded-xl px-4 py-3 text-sm font-semibold text-slate-200 transition hover:bg-surface-soft hover:text-accent focus:outline-none focus-visible:bg-surface-soft focus-visible:text-accent"
              >
                {item.label}
              </Link>
            ))}
            <a
              className="mt-2 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-accent-dark bg-accent-dark px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
              download
              href={profileLinks.resume}
              onClick={closeMobileMenu}
            >
              <Download size={16} />
              Resume
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
