import type { LucideIcon } from "lucide-react";
import { Code2, GraduationCap, Mail } from "lucide-react";
import { Card } from "../components/ui/Card";
import { SectionHeader } from "../components/ui/SectionHeader";
import { contactLinks, profile } from "../data/profile";

const contactIcons: Record<(typeof contactLinks)[number]["key"], LucideIcon> = {
  email: Mail,
  linkedin: GraduationCap,
  github: Code2,
};

export function Contact() {
  return (
    <div className="space-y-8">
      <SectionHeader
        eyebrow="Contact"
        title="Get in touch"
        description="Reach out for internships, collaboration, or technical work involving software tools, automation, debugging, or data visualization."
      />
      <Card>
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-text">{profile.name}</h2>
          <p className="mt-2 text-muted">{profile.shortBio}</p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {contactLinks.map((link) => {
            const Icon = contactIcons[link.key];

            return (
              <a
                key={link.key}
                className="flex items-center gap-4 rounded-xl border border-border/80 bg-background/30 p-5 transition hover:border-accent"
                href={link.href}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                target={link.href.startsWith("http") ? "_blank" : undefined}
              >
                <Icon className="shrink-0 text-accent-dark" size={24} />
                <span>
                  <span className="block text-sm font-bold text-text">
                    {link.label}
                  </span>
                  <span className="mt-1 block break-all text-xs text-slate-300">
                    {link.value}
                  </span>
                </span>
              </a>
            );
          })}
        </div>
      </Card>
    </div>
  );
}
