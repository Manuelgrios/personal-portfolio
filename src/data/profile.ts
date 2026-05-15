import { assetPath } from "../lib/assets";

export type Profile = {
  name: string;
  title: string;
  school: string;
  degrees: string[];
  location: string;
  email: string;
  linkedinUrl: string;
  githubUrl: string;
  resumeUrl: string;
  shortBio: string;
  aboutText: string;
  contactText: string;
  focusAreas: string[];
  enjoyItems: string[];
};

export const profile: Profile = {
  name: "Manuel Garnica",
  title: "Applied Computing and Data Visualization Student",
  school: "University of Washington Bothell",
  degrees: [
    "Bachelor of Arts in Applied Computing",
    "Bachelor of Science in Data Visualization",
  ],
  location: "Seattle, Washington",
  email: "manuelgarios@outlook.com",
  linkedinUrl: "https://www.linkedin.com/in/manuel-garnica-122233252/",
  githubUrl: "https://github.com/Manuelgrios",
  resumeUrl: assetPath("assets/resume/Manuel_Garnica_Resume.docx"),
  shortBio:
    "I'm an Applied Computing and Data Visualization student at the University of Washington Bothell. My work focuses on software tools, automation, debugging, and data visualization, with an emphasis on making technical problems easier to test, explain, and improve.",
  aboutText:
    "I work best on projects where the problem has to be traced carefully: a route fails, a build step breaks, a data view is unclear, or a system needs to be easier to maintain. My portfolio connects software engineering, automation, and data visualization through projects that can be explained clearly and improved over time.",
  contactText:
    "I'm open to internships, project collaboration, and technical work involving software tools, automation, debugging, or data visualization.",
  focusAreas: [
    "Software engineering",
    "Data visualization",
    "Tools and automation",
    "Debugging",
  ],
  enjoyItems: [
    "Debugging systems until the failure point is clear",
    "Building tools that reduce repeated manual work",
    "Organizing technical problems into clear steps",
    "Explaining results through clean visuals and documentation",
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
