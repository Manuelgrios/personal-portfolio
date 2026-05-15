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
      "Automated the build and deploy process for a Chrome extension using GitHub Actions and semantic versioning.",
    problem:
      "Manual extension releases were repetitive and easy to misconfigure across build and versioning steps.",
    outcome:
      "Created a deployment workflow that prepares builds consistently and keeps release steps easier to verify.",
    tools: ["JavaScript", "GitHub Actions", "CI/CD"],
  },
  {
    slug: "unity-mcp-shader-integration",
    title: "Unity MCP + Shader Integration",
    summary:
      "Built a Unity tool using MCP to manage materials and shader properties in real time.",
    problem:
      "Shader and material iteration in Unity can become slow when properties need to be adjusted repeatedly.",
    outcome:
      "Connected Unity workflows to MCP so material and shader properties could be managed more directly.",
    tools: ["C#", "Unity", "MCP", "Shaders"],
  },
  {
    slug: "flask-login-external-post-debugging",
    title: "Flask Login + External POST Debugging",
    summary:
      "Implemented a Flask login system with MySQL and debugged external POST requests using ngrok.",
    problem:
      "External request testing needed a reliable local development path for authentication and POST debugging.",
    outcome:
      "Built the login flow and used ngrok to inspect and troubleshoot external request behavior.",
    tools: ["Python", "Flask", "MySQL", "ngrok"],
  },
  {
    slug: "sorted-linked-list-dynamic-memory",
    title: "Sorted Linked List with Dynamic Memory",
    summary:
      "Implemented a sorted singly linked list in C with manual memory management and insert optimizations.",
    problem:
      "The project required ordered insertion while managing memory manually and keeping pointer behavior clear.",
    outcome:
      "Created a C implementation that maintains sorted order and reinforces pointer and allocation fundamentals.",
    tools: ["C", "Data Structures", "Pointers"],
  },
  {
    slug: "apple-developer-hiring-research",
    title: "Apple Developer Hiring Research",
    summary:
      "Researched Apple's hiring process and created a roadmap for aspiring developers to break into Apple.",
    problem:
      "The hiring path for developer roles can be unclear without organizing expectations and preparation areas.",
    outcome:
      "Compiled research into a practical roadmap focused on skills, process, and preparation direction.",
    tools: ["Research", "iOS", "Career Development"],
  },
  {
    slug: "data-visualization-portfolio-direction",
    title: "Data Visualization Portfolio Direction",
    summary:
      "Explored data storytelling through visualizations and defined the scope for a personal data portfolio.",
    problem:
      "The portfolio needed a focused direction for showing data work without overstating results or scope.",
    outcome:
      "Defined project direction around readable visualizations, data storytelling, and practical analysis tools.",
    tools: ["Python", "Data Viz", "Pandas", "Matplotlib"],
  },
];
