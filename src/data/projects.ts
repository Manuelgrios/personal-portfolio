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
    slug: "chrome-extension-deployment-workflow",
    title: "Chrome Extension Deployment Workflow",
    summary:
      "Designed a GitHub Actions workflow for building, packaging, and preparing a Chrome extension release. The project focused on reducing manual deployment steps and making the release process easier to review.",
    problem:
      "The extension release process depended on manual build, packaging, and versioning steps that were easy to skip or apply inconsistently.",
    outcome:
      "Moved the release path into a repeatable GitHub Actions workflow, separating versioning, packaging, and deployment checks so release behavior is easier to audit.",
    tools: ["JavaScript", "GitHub Actions", "Semantic Versioning"],
  },
  {
    slug: "unity-mcp-shader-integration",
    title: "Unity MCP + Shader Integration",
    summary:
      "Configured a Unity MCP workflow to inspect scenes, update materials, and test shader changes through external tool calls. The main work was debugging the MCP connection and making shader iteration more repeatable.",
    problem:
      "Unity and MCP needed a reliable connection before external tool calls could inspect scene objects, update materials, or support shader testing.",
    outcome:
      "Validated the startup, dependency, and handshake steps needed for MCP control, then used that connection to make material and shader changes easier to repeat and explain.",
    tools: ["C#", "Unity", "MCP", "Shaders"],
  },
  {
    slug: "flask-login-external-post-debugging",
    title: "Flask Login + External POST Debugging",
    summary:
      "Built a Flask login flow and traced request failures across routes, HTTP methods, form data, and external POST calls. The project focused on separating backend logic errors from endpoint and network configuration issues.",
    problem:
      "The backend needed clearer debugging around GET and POST behavior, form data, external POST requests, and HTTP versus HTTPS or port mismatches.",
    outcome:
      "Used route checks, logs, and external request testing to diagnose 404, 500, and SSL-related failures without mixing backend logic bugs with endpoint configuration problems.",
    tools: ["Python", "Flask", "MySQL", "ngrok"],
  },
  {
    slug: "sorted-linked-list-dynamic-memory",
    title: "Sorted Linked List with Dynamic Memory",
    summary:
      "Implemented a sorted C++ linked list with deep-copy ownership, duplicate rejection, and an O(n+m) merge path using pointer splicing. Testing focused on memory safety, sorted order, and edge-case behavior.",
    problem:
      "The data structure needed sorted insert behavior, duplicate rejection, deep-copy ownership, and safe cleanup without relying on container abstractions.",
    outcome:
      "Implemented the Rule of Three and a linear merge path using pointer splicing, then checked sorted order, ownership behavior, and edge cases through targeted memory-safety tests.",
    tools: ["C++", "Data Structures", "Pointers", "Memory Safety"],
  },
  {
    slug: "apple-developer-hiring-research",
    title: "Apple Developer Hiring Research",
    summary:
      "Analyzed Apple's developer hiring process, including interview structure, compensation signals, work expectations, and fairness concerns. The research turned scattered hiring information into practical advice for candidates.",
    problem:
      "Information about developer hiring can be scattered across job posts, interview reports, compensation discussions, and candidate advice.",
    outcome:
      "Organized the research into a clearer view of interview structure, role expectations, compensation signals, and fairness considerations for students preparing for developer roles.",
    tools: ["Research", "Technical Interviews", "Career Analysis"],
  },
  {
    slug: "data-visualization-portfolio-direction",
    title: "Data Visualization Portfolio Direction",
    summary:
      "Defined the structure for a data visualization portfolio focused on readable charts, clear metrics, and practical analysis. The goal was to frame future projects around decisions, not just visuals.",
    problem:
      "Future analytics work needed a consistent structure for choosing datasets, selecting chart types, and explaining what each visualization helps someone decide.",
    outcome:
      "Created a direction for portfolio projects centered on readable charts, clear metrics, practical analysis questions, and explanations that connect visuals to decisions.",
    tools: ["Python", "Data Visualization", "Pandas", "Matplotlib"],
  },
];
