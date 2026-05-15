import { Mail } from "lucide-react";
import { Card } from "../components/ui/Card";
import { SectionHeader } from "../components/ui/SectionHeader";
import { profile } from "../data/profile";

export function Contact() {
  return (
    <div className="space-y-8">
      <SectionHeader
        eyebrow="Contact"
        title="Get in touch"
        description="Contact details stay in src/data/profile.ts so they can be updated in one place."
      />
      <Card>
        <div className="flex items-start gap-4">
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface-soft text-accent">
            <Mail size={20} />
          </span>
          <div>
            <h2 className="text-lg font-semibold text-text">{profile.name}</h2>
            <p className="mt-2 text-muted">
              {profile.email || "Add a preferred email in src/data/profile.ts."}
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}
