import type { Project } from "../types";

export const projects: Project[] = [
  {
    id: "intelliops",
    title: "IntelliOps",
    description: "An intelligent incident detection platform for DevOps tools.",
    image: "/images/projects/intelliops.png",
    tags: ["DevOps", "Python", "Docker"],
    liveUrl: "https://...",
    githubUrl: "https://github.com/Hamdane-Insaf/...",
    featured: true,
  },
  {
    id: "portfy",
    title: "Portfy",
    description: "A modern portfolio platform for developers.",
    image: "/images/projects/portfy.png",
    tags: ["React", "TypeScript"],
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
    githubUrl: "https://github.com/Hamdane-Insaf/...",
    featured: true,
  },
];