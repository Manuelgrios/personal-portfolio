import { Link, useParams } from "react-router-dom";
import { Card } from "../components/ui/Card";
import { SectionHeader } from "../components/ui/SectionHeader";
import { Tag } from "../components/ui/Tag";
import { projects } from "../data/projects";

export function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <div className="space-y-6">
        <SectionHeader
          eyebrow="Project"
          title="Project not found"
          description="The requested project does not exist in the project data file."
        />
        <Link className="text-sm font-semibold text-accent" to="/projects">
          Back to projects
        </Link>
      </div>
    );
  }

  return (
    <article className="space-y-8">
      <SectionHeader
        eyebrow="Project"
        title={project.title}
        description={project.summary}
      />
      <div className="grid gap-5 md:grid-cols-2">
        <Card>
          <h2 className="text-lg font-semibold text-text">Problem</h2>
          <p className="mt-3 leading-7 text-muted">{project.problem}</p>
        </Card>
        <Card>
          <h2 className="text-lg font-semibold text-text">Outcome</h2>
          <p className="mt-3 leading-7 text-muted">{project.outcome}</p>
        </Card>
      </div>
      <Card>
        <h2 className="text-lg font-semibold text-text">Tools</h2>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tools.map((tool) => (
            <Tag key={tool}>{tool}</Tag>
          ))}
        </div>
      </Card>
    </article>
  );
}
