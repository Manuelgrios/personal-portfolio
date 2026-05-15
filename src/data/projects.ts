export type Project = {
  slug: string;
  title: string;
  summary: string;
  problem: string;
  outcome: string;
  tools: string[];
  links?: {
    demo?: string;
    repo?: string;
  };
};

export const projects: Project[] = [
  {
    slug: "project-placeholder",
    title: "Project Placeholder",
    summary: "A reserved project entry ready for a real case study.",
    problem: "Replace this with the specific problem the project addressed.",
    outcome: "Replace this with what the project did and how it was built.",
    tools: ["React", "TypeScript"],
  },
];
