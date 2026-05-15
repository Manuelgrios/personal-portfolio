import { Link } from "react-router-dom";
import { Card } from "../components/ui/Card";
import { SectionHeader } from "../components/ui/SectionHeader";
import { Tag } from "../components/ui/Tag";
import { projects } from "../data/projects";

export function Projects() {
  return (
    <div className="space-y-10">
      <SectionHeader
        eyebrow="Projects"
        title="Project index"
        description="A reusable project grid backed by src/data/projects.ts."
      />
      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((project) => (
          <Link key={project.slug} to={`/projects/${project.slug}`}>
            <Card className="h-full transition hover:border-accent/70">
              <h2 className="text-xl font-semibold text-text">{project.title}</h2>
              <p className="mt-3 leading-7 text-muted">{project.summary}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <Tag key={tool}>{tool}</Tag>
                ))}
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
