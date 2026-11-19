import type { Project } from "../types";

export const projects: Project[] = [
  {
    id: "secureflow",
    title: "SecureFlow – Intelligent DevSecOps Assistant",
    description:
      "A platform that automates and secures CI/CD pipelines, combining security analysis tools with AI to diagnose pipeline errors.",
    image: "/images/projects/secureflow.png",
    tags: ["React", "TypeScript", "Python", "FastAPI", "Docker", "GitHub Actions", "LangGraph"],
    category: "personal",
    githubUrl: "https://github.com/Hamdane-Insaf/...",
    featured: true,
  },
  {
    id: "intelliops",
    title: "IntelliOps",
    description:
      "An intelligent DevSecOps monitoring and incident management platform, built on a multi-agent system with human-in-the-loop validation.",
    image: "/images/projects/intelliops.png",
    tags: ["LangGraph", "LangChain", "RAG", "Kubernetes", "Grafana", "Terraform"],
    category: "academic",
    liveUrl: "https://...",
    githubUrl: "https://github.com/Hamdane-Insaf/...",
    featured: true,
  },
  {
    id: "portfy",
    title: "Portfy",
    description:
      "A digital portfolio platform with a teacher interface and LLM-generated recommendation letters, managed in Agile sprints.",
    image: "/images/projects/portfy.png",
    tags: ["Vue.js", "Express.js", "Docker", "Ansible", "Jira"],
    category: "academic",
    liveUrl: "https://...",
    githubUrl: "https://github.com/Hamdane-Insaf/...",
    featured: true,
  },
  {
    id: "gestion-stagiaires",
    title: "Gestion des Stagiaires",
    description: "A student management system.",
    image: "/images/projects/stagiaires.png",
    tags: ["Node.js", "PostgreSQL"],
    category: "academic",
    githubUrl: "https://github.com/Hamdane-Insaf/...",
    featured: true,
  },
];