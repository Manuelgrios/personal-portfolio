export type SkillGroup = {
  title: string;
  skills: string[];
};

export type SkillItem = {
  label: string;
  mark: string;
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Engineering",
    skills: ["React", "TypeScript", "JavaScript", "Git", "Debugging"],
  },
  {
    title: "Focus Areas",
    skills: ["Software engineering", "Data visualization", "Automation"],
  },
];

export const skillItems: SkillItem[] = [
  { label: "Python", mark: "Py" },
  { label: "JavaScript", mark: "JS" },
  { label: "TypeScript", mark: "TS" },
  { label: "React", mark: "React" },
  { label: "HTML/CSS", mark: "</>" },
  { label: "C++", mark: "C++" },
  { label: "C#", mark: "C#" },
  { label: "Flask", mark: "Fl" },
  { label: "Git", mark: "Git" },
  { label: "GitHub Actions", mark: "GA" },
  { label: "Unity", mark: "U" },
  { label: "Data Visualization", mark: "Viz" },
  { label: "Pandas", mark: "Pd" },
  { label: "Matplotlib", mark: "Mpl" },
  { label: "Debugging", mark: "Debug" },
];
