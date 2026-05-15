import { profile } from "../../data/profile";

export function Footer() {
  return (
    <footer className="border-t border-border/70">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-8 text-sm text-muted md:flex-row md:items-center md:justify-between">
        <p>
          {profile.name} - {profile.title}
        </p>
        <p>{profile.location}</p>
      </div>
    </footer>
  );
}
