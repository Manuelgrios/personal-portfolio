import { education } from "./education";
import { siteConfig } from "./siteConfig";

export type CtaLink = {
  label: string;
  href: string;
};

export type Profile = {
  name: string;
  headline: string;
  subtitle: string;
  school: string;
  degrees: string[];
  location: string;
  email: string;
  bio: string;
  shortBio: string;
  focusAreas: string[];
  hero: {
    eyebrow: string;
    headline: string[];
    highlightedHeadline: string;
    body: string;
    primaryCta: CtaLink;
    secondaryCta: CtaLink;
    image: {
      src: string;
      alt: string;
    };
  };
  sections: {
    about: {
      eyebrow: string;
      heading: string;
      body: string;
      infoGroups: Array<{
        iconKey: "education" | "code" | "chart";
        label: string;
        lines: string[];
      }>;
      enjoyHeading: string;
      enjoyItems: string[];
    };
    projects: {
      eyebrow: string;
      heading: string;
      indexHeading: string;
      description: string;
      viewAllLabel: string;
    };
    skills: {
      eyebrow: string;
      heading: string;
      description?: string;
    };
    contact: {
      eyebrow: string;
      heading: string;
      pageHeading: string;
      body: string;
    };
  };
};

const school = "University of Washington Bothell";
const degrees = education.map((item) => item.degree);

export const profile: Profile = {
  name: siteConfig.brand.name,
  headline: "Building tools. Solving problems. Visualizing data.",
  subtitle: "Applied Computing and Data Visualization Student",
  school,
  degrees,
  location: "Seattle, Washington",
  email: "manuelgarios@outlook.com",
  bio:
    "I work best on projects where the problem has to be traced carefully: a route fails, a build step breaks, a data view is unclear, or a system needs to be easier to maintain. My portfolio connects software engineering, automation, and data visualization through projects that can be explained clearly and improved over time.",
  shortBio:
    "I'm an Applied Computing and Data Visualization student at the University of Washington Bothell. My work focuses on software tools, automation, debugging, and data visualization, with an emphasis on making technical problems easier to test, explain, and improve.",
  focusAreas: [
    "Software engineering",
    "Data visualization",
    "Tools and automation",
    "Debugging",
  ],
  hero: {
    eyebrow: "Applied Computing + Data Visualization Student",
    headline: ["Building tools.", "Solving problems."],
    highlightedHeadline: "Visualizing data.",
    body:
      "I'm an Applied Computing and Data Visualization student at the University of Washington Bothell. My work focuses on software tools, automation, debugging, and data visualization, with an emphasis on making technical problems easier to test, explain, and improve.",
    primaryCta: { label: "View Projects", href: "/#projects" },
    secondaryCta: { label: "Contact Me", href: "/#contact" },
    image: {
      src: "assets/headshot.png",
      alt: "Professional headshot of Manuel Garnica",
    },
  },
  sections: {
    about: {
      eyebrow: "About Me",
      heading: "Curious. Driven. Detail-Oriented.",
      body:
        "I work best on projects where the problem has to be traced carefully: a route fails, a build step breaks, a data view is unclear, or a system needs to be easier to maintain. My portfolio connects software engineering, automation, and data visualization through projects that can be explained clearly and improved over time.",
      infoGroups: [
        {
          iconKey: "education",
          label: school,
          lines: degrees,
        },
        {
          iconKey: "code",
          label: "Interests",
          lines: ["Software Engineering", "Data Visualization"],
        },
        {
          iconKey: "chart",
          label: "Focus Areas",
          lines: ["Full-Stack Development", "Tools & Automation"],
        },
      ],
      enjoyHeading: "What I enjoy",
      enjoyItems: [
        "Debugging systems until the failure point is clear",
        "Building tools that reduce repeated manual work",
        "Organizing technical problems into clear steps",
        "Explaining results through clean visuals and documentation",
      ],
    },
    projects: {
      eyebrow: "Projects",
      heading: "Things I've Built",
      indexHeading: "Project index",
      description:
        "Selected projects focused on software tools, automation, debugging, data structures, and data visualization.",
      viewAllLabel: "View All Projects",
    },
    skills: {
      eyebrow: "Skills",
      heading: "Technologies I Work With",
    },
    contact: {
      eyebrow: "Contact",
      heading: "Let's Connect",
      pageHeading: "Get in touch",
      body:
        "I'm open to internships, project collaboration, and technical work involving software tools, automation, debugging, or data visualization.",
    },
  },
};
