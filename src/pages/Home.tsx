import { ArrowRight, CheckCircle2, Mail } from "lucide-react";
import type { CSSProperties } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../components/theme/useTheme";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { Tag } from "../components/ui/Tag";
import { profile } from "../data/profile";
import { projects } from "../data/projects";
import { skillItems } from "../data/skills";
import { socialLinks } from "../data/socialLinks";
import { assetPath } from "../lib/assets";
import { getIcon } from "../lib/icons";

export function Home() {
  const { currentTheme } = useTheme();
  const featuredProjects = projects.filter((project) => project.featured).slice(0, 6);
  const imageTreatment = currentTheme.imageTreatment;

  return (
    <div className="space-y-4 md:space-y-5">
      <section className="grid min-h-[520px] gap-10 overflow-hidden pb-2 pt-9 md:grid-cols-[1fr_0.95fr] md:items-end md:pt-12">
        <div className="relative z-10 pb-10 md:pb-16">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
            {profile.hero.eyebrow}
          </p>
          <h1 className="mt-5 max-w-2xl text-5xl font-black leading-[1.08] tracking-normal text-text md:text-6xl">
            {profile.hero.headline.map((line) => (
              <span key={line}>
                {line}
                <br />
              </span>
            ))}
            <span className="text-accent-dark">
              {profile.hero.highlightedHeadline}
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-muted">
            {profile.hero.body}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            {profile.hero.primaryCta.href ? (
              <Button href={profile.hero.primaryCta.href}>
                {profile.hero.primaryCta.label}
                <ArrowRight size={18} />
              </Button>
            ) : null}
            {profile.hero.secondaryCta.href ? (
              <Button href={profile.hero.secondaryCta.href} variant="secondary">
                {profile.hero.secondaryCta.label}
                <Mail size={17} />
              </Button>
            ) : null}
          </div>
          {socialLinks.length > 0 ? (
            <div className="mt-8 flex items-center gap-8 text-muted">
              {socialLinks.map((link) => {
                const Icon = getIcon(link.iconKey);

                return (
                  <a
                    key={link.key}
                    aria-label={link.label}
                    className="transition hover:text-accent"
                    href={link.href}
                    rel={link.external ? "noreferrer" : undefined}
                    target={link.external ? "_blank" : undefined}
                  >
                    <Icon size={24} />
                  </a>
                );
              })}
            </div>
          ) : null}
        </div>

        {profile.hero.image.src ? (
          <div
            className="relative min-h-[360px] overflow-hidden md:min-h-[520px]"
            style={
              {
                "--active-image-glow": imageTreatment.glow,
                "--active-image-shadow": imageTreatment.shadow,
                "--active-image-filter": imageTreatment.filter,
                "--active-image-wash":
                  imageTreatment.backgroundWash ?? "transparent",
              } as CSSProperties
            }
          >
            <div className="absolute inset-x-0 bottom-0 h-[80%] [background:var(--active-image-wash)]" />
            <div className="absolute inset-x-4 bottom-0 h-[78%] rounded-full blur-2xl [background:var(--active-image-glow)]" />
            <img
              alt={profile.hero.image.alt}
              className="relative z-10 mx-auto h-[360px] w-full max-w-[430px] object-cover object-top shadow-[var(--active-image-shadow)] transition-[filter,box-shadow] duration-300 ease-out md:h-[520px]"
              src={assetPath(profile.hero.image.src)}
              style={{ filter: "var(--active-image-filter)" }}
            />
          </div>
        ) : null}
      </section>

      <Card id="about" className="scroll-mt-24 p-7 md:p-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.42fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
              {profile.sections.about.eyebrow}
            </p>
            <h2 className="mt-3 text-3xl font-bold text-text">
              {profile.sections.about.heading}
            </h2>
            <div className="mt-4 h-px w-12 bg-accent-dark" />
            <p className="mt-6 max-w-2xl text-base leading-8 text-muted">
              {profile.sections.about.body}
            </p>
            {profile.sections.about.infoGroups.length > 0 ? (
              <div className="mt-8 grid gap-6 md:grid-cols-3">
                {profile.sections.about.infoGroups.map((group) => {
                  const Icon = getIcon(group.iconKey);

                  return (
                    <InfoGroup
                      key={group.label}
                      icon={Icon}
                      label={group.label}
                      lines={group.lines}
                    />
                  );
                })}
              </div>
            ) : null}
          </div>

          {profile.sections.about.enjoyItems.length > 0 ? (
            <div className="rounded-2xl border border-border/85 bg-background/25 p-7">
              <h3 className="text-lg font-semibold text-accent-dark">
                {profile.sections.about.enjoyHeading}
              </h3>
              <div className="mt-3 h-px w-12 bg-accent-dark" />
              <ul className="mt-6 space-y-5">
                {profile.sections.about.enjoyItems.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-sm text-text"
                  >
                    <CheckCircle2 className="text-accent" size={17} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </Card>

      <Card id="projects" className="scroll-mt-24 p-6 md:p-7">
        <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
              {profile.sections.projects.eyebrow}
            </p>
            <h2 className="mt-2 text-3xl font-bold text-text">
              {profile.sections.projects.heading}
            </h2>
          </div>
          <Button href="/projects" variant="secondary" className="self-start">
            {profile.sections.projects.viewAllLabel}
            <ArrowRight size={18} />
          </Button>
        </div>

        {featuredProjects.length > 0 ? (
          <div className="mt-7 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project) => {
              const Icon = getIcon(project.icon);

              return (
                <Link key={project.slug} to={`/projects/${project.slug}`}>
                  <div className="group h-full rounded-xl border border-accent-dark/45 bg-card-soft/42 p-4 transition hover:border-accent hover:bg-card-soft/70">
                    <div className="flex items-start gap-4">
                      <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-border bg-surface-soft/80 text-accent">
                        <Icon size={25} />
                      </span>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-start justify-between gap-3">
                          <h3 className="text-lg font-bold leading-snug text-text">
                            {project.title}
                          </h3>
                          <ArrowRight
                            className="mt-1 text-accent-dark opacity-50 transition group-hover:translate-x-1 group-hover:opacity-100"
                            size={16}
                          />
                        </div>
                        <p className="mt-3 text-sm leading-6 text-muted">
                          {project.summary}
                        </p>
                        {project.tags.length > 0 ? (
                          <div className="mt-4 flex flex-wrap gap-2">
                            {project.tags.map((tag) => (
                              <Tag key={tag}>{tag}</Tag>
                            ))}
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        ) : null}
      </Card>

      <Card id="skills" className="scroll-mt-24 p-6 md:p-7">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
          {profile.sections.skills.eyebrow}
        </p>
        <h2 className="mt-2 text-3xl font-bold text-text">
          {profile.sections.skills.heading}
        </h2>
        {profile.sections.skills.description ? (
          <p className="mt-3 text-sm leading-6 text-muted">
            {profile.sections.skills.description}
          </p>
        ) : null}
        {skillItems.length > 0 ? (
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-12">
            {skillItems.map((skill) => (
              <div
                key={`${skill.category}-${skill.name}`}
                className="flex min-h-20 flex-col items-center justify-center gap-2 rounded-lg border border-accent-dark/55 bg-background/36 px-3 py-3 text-center transition hover:border-accent"
              >
                <span className="text-xl font-black text-accent">
                  {skill.shortLabel}
                </span>
                <span className="text-xs font-medium text-text">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        ) : null}
      </Card>

      <Card id="contact" className="scroll-mt-24 p-6 md:p-7">
        <div className="grid gap-7 lg:grid-cols-[0.42fr_1fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
              {profile.sections.contact.eyebrow}
            </p>
            <h2 className="mt-2 text-3xl font-bold text-text">
              {profile.sections.contact.heading}
            </h2>
            <p className="mt-4 text-sm leading-6 text-muted">
              {profile.sections.contact.body}
            </p>
          </div>
          {socialLinks.length > 0 ? (
            <div className="grid gap-4 md:grid-cols-3">
              {socialLinks.map((link) => {
                const Icon = getIcon(link.iconKey);

                return (
                  <ContactCard
                    key={link.key}
                    href={link.href}
                    icon={Icon}
                    label={link.label}
                    value={link.value}
                    external={link.external}
                  />
                );
              })}
            </div>
          ) : null}
        </div>
      </Card>
    </div>
  );
}

type InfoGroupProps = {
  icon: ReturnType<typeof getIcon>;
  label: string;
  lines: string[];
};

function InfoGroup({ icon: Icon, label, lines }: InfoGroupProps) {
  if (!label && lines.length === 0) {
    return null;
  }

  return (
    <div className="border-border/80 md:border-r md:pr-6 md:last:border-r-0">
      <div className="flex items-start gap-3">
        <Icon className="mt-1 shrink-0 text-accent-dark" size={21} />
        <div>
          {label ? (
            <h3 className="text-sm font-bold leading-6 text-text">{label}</h3>
          ) : null}
          {lines.map((line) => (
            <p key={line} className="mt-2 text-xs leading-5 text-muted">
              {line}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

type ContactCardProps = {
  href: string;
  icon: ReturnType<typeof getIcon>;
  label: string;
  value: string;
  external?: boolean;
};

function ContactCard({
  href,
  icon: Icon,
  label,
  value,
  external,
}: ContactCardProps) {
  if (!href || !value) {
    return null;
  }

  return (
    <a
      className="flex items-center gap-4 rounded-xl border border-border/80 bg-background/30 p-5 transition hover:border-accent"
      href={href}
      rel={external ? "noreferrer" : undefined}
      target={external ? "_blank" : undefined}
    >
      <Icon className="shrink-0 text-accent-dark" size={25} />
      <span>
        <span className="block text-sm font-bold text-text">{label}</span>
        <span className="mt-1 block break-all text-xs text-muted">
          {value}
        </span>
      </span>
    </a>
  );
}
