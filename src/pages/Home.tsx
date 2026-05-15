import type { LucideIcon } from "lucide-react";
import {
  Apple,
  ArrowRight,
  BarChart3,
  Box,
  CheckCircle2,
  Code2,
  FlaskConical,
  GraduationCap,
  Mail,
  SquareTerminal,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { Tag } from "../components/ui/Tag";
import { contactLinks, profile, profileLinks } from "../data/profile";
import { projects } from "../data/projects";
import { skillItems } from "../data/skills";
import { assetPath } from "../lib/assets";

const projectIcons: Record<string, LucideIcon> = {
  "chrome-extension-deployment-workflow": Code2,
  "unity-mcp-shader-integration": Box,
  "flask-login-external-post-debugging": FlaskConical,
  "sorted-linked-list-dynamic-memory": SquareTerminal,
  "apple-developer-hiring-research": Apple,
  "data-visualization-portfolio-direction": BarChart3,
};

const socialIcons: Record<(typeof contactLinks)[number]["key"], LucideIcon> = {
  email: Mail,
  linkedin: GraduationCap,
  github: Code2,
};

export function Home() {
  return (
    <div className="space-y-4 md:space-y-5">
      <section className="grid min-h-[520px] gap-10 overflow-hidden pb-2 pt-9 md:grid-cols-[1fr_0.95fr] md:items-end md:pt-12">
        <div className="relative z-10 pb-10 md:pb-16">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
            {profile.title}
          </p>
          <h1 className="mt-5 max-w-2xl text-5xl font-black leading-[1.08] tracking-normal text-text md:text-6xl">
            Building tools.
            <br />
            Solving problems.
            <br />
            <span className="text-accent-dark">Visualizing data.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
            {profile.shortBio}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/#projects">
              View Projects
              <ArrowRight size={18} />
            </Button>
            <Button href="/#contact" variant="secondary">
              Contact Me
              <Mail size={17} />
            </Button>
          </div>
          <div className="mt-8 flex items-center gap-8 text-slate-400">
            {contactLinks.map((link) => {
              const Icon = socialIcons[link.key];

              return (
                <a
                  key={link.key}
                  aria-label={link.label}
                  className="transition hover:text-accent"
                  href={link.href}
                  rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                >
                  <Icon size={24} />
                </a>
              );
            })}
          </div>
        </div>

        <div className="relative min-h-[360px] md:min-h-[520px]">
          <div className="absolute inset-x-6 bottom-0 h-[78%] rounded-full bg-accent-dark/45 blur-3xl" />
          <div className="absolute inset-x-0 bottom-0 h-[62%] bg-[radial-gradient(circle,rgb(37_99_235_/_0.34),transparent_62%)]" />
          <img
            alt="Professional headshot of Manuel Garnica"
            className="relative z-10 mx-auto h-[360px] w-full max-w-[430px] object-cover object-top md:h-[520px]"
            src={assetPath("assets/headshot.png")}
          />
        </div>
      </section>

      <Card id="about" className="scroll-mt-24 p-7 md:p-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.42fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
              About Me
            </p>
            <h2 className="mt-3 text-3xl font-bold text-text">
              Curious. Driven. Detail-Oriented.
            </h2>
            <div className="mt-4 h-px w-12 bg-accent-dark" />
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300">
              {profile.aboutText}
            </p>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              <InfoGroup
                icon={GraduationCap}
                label={profile.school}
                lines={profile.degrees}
              />
              <InfoGroup
                icon={Code2}
                label="Interests"
                lines={["Software Engineering", "Data Visualization"]}
              />
              <InfoGroup
                icon={BarChart3}
                label="Focus Areas"
                lines={["Full-Stack Development", "Tools & Automation"]}
              />
            </div>
          </div>

          <div className="rounded-2xl border border-border/85 bg-background/25 p-7">
            <h3 className="text-lg font-semibold text-accent-dark">
              What I enjoy
            </h3>
            <div className="mt-3 h-px w-12 bg-accent-dark" />
            <ul className="mt-6 space-y-5">
              {profile.enjoyItems.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-slate-200">
                  <CheckCircle2 className="text-blue-300" size={17} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Card>

      <Card id="projects" className="scroll-mt-24 p-6 md:p-7">
        <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
              Projects
            </p>
            <h2 className="mt-2 text-3xl font-bold text-text">
              Things I&apos;ve Built
            </h2>
          </div>
          <Button href="/projects" variant="secondary" className="self-start">
            View All Projects
            <ArrowRight size={18} />
          </Button>
        </div>

        <div className="mt-7 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, 6).map((project) => {
            const Icon = projectIcons[project.slug] ?? Code2;

            return (
              <Link key={project.slug} to={`/projects/${project.slug}`}>
                <div className="group h-full rounded-xl border border-accent-dark/45 bg-card-soft/42 p-4 transition hover:border-accent hover:bg-card-soft/70">
                  <div className="flex items-start gap-4">
                    <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-border bg-slate-700/70 text-accent">
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
                      <p className="mt-3 text-sm leading-6 text-slate-300">
                        {project.summary}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {project.tools.map((tool) => (
                          <Tag key={tool}>{tool}</Tag>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </Card>

      <Card id="skills" className="scroll-mt-24 p-6 md:p-7">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
          Skills
        </p>
        <h2 className="mt-2 text-3xl font-bold text-text">
          Technologies I Work With
        </h2>
        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-12">
          {skillItems.map((skill) => (
            <div
              key={skill.label}
              className="flex min-h-20 flex-col items-center justify-center gap-2 rounded-lg border border-accent-dark/55 bg-background/36 px-3 py-3 text-center transition hover:border-accent"
            >
              <span className="text-xl font-black text-accent">{skill.mark}</span>
              <span className="text-xs font-medium text-text">{skill.label}</span>
            </div>
          ))}
        </div>
      </Card>

      <Card id="contact" className="scroll-mt-24 p-6 md:p-7">
        <div className="grid gap-7 lg:grid-cols-[0.42fr_1fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
              Contact
            </p>
            <h2 className="mt-2 text-3xl font-bold text-text">Let&apos;s Connect</h2>
            <p className="mt-4 text-sm leading-6 text-slate-300">
              {profile.contactText}
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            <ContactCard
              href={profileLinks.email}
              icon={Mail}
              label="Email"
              value={profile.email}
            />
            {contactLinks
              .filter((link) => link.key !== "email")
              .map((link) => {
                const Icon = socialIcons[link.key];

                return (
                  <ContactCard
                    key={link.key}
                    href={link.href}
                    icon={Icon}
                    label={link.label}
                    value={link.value}
                  />
                );
              })}
          </div>
        </div>
      </Card>
    </div>
  );
}

type InfoGroupProps = {
  icon: LucideIcon;
  label: string;
  lines: string[];
};

function InfoGroup({ icon: Icon, label, lines }: InfoGroupProps) {
  return (
    <div className="border-border/80 md:border-r md:pr-6 md:last:border-r-0">
      <div className="flex items-start gap-3">
        <Icon className="mt-1 shrink-0 text-accent-dark" size={21} />
        <div>
          <h3 className="text-sm font-bold leading-6 text-text">{label}</h3>
          {lines.map((line) => (
            <p key={line} className="mt-2 text-xs leading-5 text-slate-300">
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
  icon: LucideIcon;
  label: string;
  value: string;
};

function ContactCard({ href, icon: Icon, label, value }: ContactCardProps) {
  return (
    <a
      className="flex items-center gap-4 rounded-xl border border-border/80 bg-background/30 p-5 transition hover:border-accent"
      href={href}
      rel="noreferrer"
      target={href.startsWith("http") ? "_blank" : undefined}
    >
      <Icon className="shrink-0 text-accent-dark" size={25} />
      <span>
        <span className="block text-sm font-bold text-text">{label}</span>
        <span className="mt-1 block break-all text-xs text-slate-300">
          {value}
        </span>
      </span>
    </a>
  );
}
