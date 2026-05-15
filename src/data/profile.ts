export type Profile = {
  name: string;
  title: string;
  school: string;
  location: string;
  email: string;
  linkedinUrl: string;
  githubUrl: string;
  resumeUrl: string;
  shortBio: string;
  focusAreas: string[];
};

export const profile: Profile = {
  name: "Manuel Garnica",
  title: "Applied Computer Science Student",
  school: "University of Washington Bothell",
  location: "Seattle, Washington",
  email: "manuelgarios@outlook.com",
  linkedinUrl: "https://www.linkedin.com/in/manuel-garnica-122233252/",
  githubUrl: "https://github.com/Manuelgrios",
  // TODO: Add the resume PDF at public/assets/resume/Manuel_Garnica_Resume.pdf.
  resumeUrl: "/assets/resume/Manuel_Garnica_Resume.pdf",
  shortBio:
    "I'm an Applied CS student at the University of Washington Bothell with a focus on building software, automating workflows, and turning data into actionable insights.",
  focusAreas: [
    "Software engineering",
    "Data visualization",
    "Tools and automation",
    "Debugging",
  ],
};

export const profileLinks = {
  email: `mailto:${profile.email}`,
  linkedin: profile.linkedinUrl,
  github: profile.githubUrl,
  resume: profile.resumeUrl,
};

export const contactLinks = [
  {
    key: "email",
    label: "Email",
    value: profile.email,
    href: profileLinks.email,
  },
  {
    key: "linkedin",
    label: "LinkedIn",
    value: profile.linkedinUrl.replace("https://www.", "").replace(/\/$/, ""),
    href: profileLinks.linkedin,
  },
  {
    key: "github",
    label: "GitHub",
    value: profile.githubUrl.replace("https://", ""),
    href: profileLinks.github,
  },
] as const;
