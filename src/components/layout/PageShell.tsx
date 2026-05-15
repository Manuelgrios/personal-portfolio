import type { ReactNode } from "react";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

type PageShellProps = {
  children: ReactNode;
};

export function PageShell({ children }: PageShellProps) {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_80%_10%,rgb(14_165_233_/_0.12),transparent_24rem)] text-text">
      <Navbar />
      <main className="mx-auto min-h-[calc(100vh-8rem)] max-w-6xl px-5 py-12 md:py-16">
        {children}
      </main>
      <Footer />
    </div>
  );
}
