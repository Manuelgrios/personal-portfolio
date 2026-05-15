import { ArrowRight } from "lucide-react";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { SectionHeader } from "../components/ui/SectionHeader";
import { Tag } from "../components/ui/Tag";
import { profile } from "../data/profile";
import { projects } from "../data/projects";
import { skillGroups } from "../data/skills";

export function Home() {
  return (
    <div className="space-y-20">
      <section className="grid gap-10 py-10 md:grid-cols-[1.15fr_0.85fr] md:items-center md:py-16">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
            {profile.title}
          </p>
          <h1 className="mt-5 max-w-3xl text-5xl font-bold tracking-normal text-text md:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
            Applied Computer Science student at {profile.school}, focused on
            building clear software, useful tools, and readable interfaces.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/projects">
              View projects
              <ArrowRight className="ml-2" size={18} />
            </Button>
            <Button href="/contact" variant="secondary">
              Contact
            </Button>
          </div>
        </div>
        <Card className="md:justify-self-end">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
            Focus
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {profile.focus.map((item) => (
              <Tag key={item}>{item}</Tag>
            ))}
          </div>
        </Card>
      </section>

      <section className="space-y-8">
        <SectionHeader
          eyebrow="About"
          title="Building from a practical computer science foundation."
          description={`Manuel studies Applied Computer Science at ${profile.school}. This portfolio is structured to grow one project at a time without scattering content across the codebase.`}
        />
      </section>

      <section className="space-y-8">
        <SectionHeader
          eyebrow="Projects"
          title="Selected work"
          description="Project cards pull from a single data file so future case studies stay consistent."
        />
        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project) => (
            <Card key={project.slug}>
              <h3 className="text-xl font-semibold text-text">{project.title}</h3>
              <p className="mt-3 leading-7 text-muted">{project.summary}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <Tag key={tool}>{tool}</Tag>
                ))}
              </div>
              <Button
                href={`/projects/${project.slug}`}
                variant="secondary"
                className="mt-6"
              >
                View details
              </Button>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeader
          eyebrow="Skills"
          title="Technical areas"
          description="A compact starting point for skills that can be expanded with real coursework, tools, and project evidence."
        />
        <div className="grid gap-5 md:grid-cols-2">
          {skillGroups.map((group) => (
            <Card key={group.title}>
              <h3 className="text-xl font-semibold text-text">{group.title}</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <Tag key={skill}>{skill}</Tag>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
