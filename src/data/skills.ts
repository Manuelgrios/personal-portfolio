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
    skills: ["React", "TypeScript", "JavaScript", "Git"],
  },
  {
    title: "Focus Areas",
    skills: ["Software engineering", "Data visualization", "Automation"],
  },
];

export const skillItems: SkillItem[] = [
  { label: "Python", mark: "Py" },
  { label: "JavaScript", mark: "JS" },
  { label: "C", mark: "C" },
  { label: "C#", mark: "C#" },
  { label: "Unity", mark: "U" },
  { label: "Flask", mark: "Fl" },
  { label: "MySQL", mark: "SQL" },
  { label: "Git", mark: "Git" },
  { label: "GitHub Actions", mark: "GA" },
  { label: "HTML/CSS", mark: "</>" },
  { label: "Pandas", mark: "Pd" },
  { label: "Matplotlib", mark: "Mpl" },
];
