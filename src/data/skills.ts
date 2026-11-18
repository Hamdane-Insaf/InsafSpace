import type { Skill } from "../types";

const icon = (name: string) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/${name}/${name}-original.svg`;

export const skills: Skill[] = [
  { name: "React & TypeScript", icon: icon("react") },
  { name: "Next.js", icon: icon("nextjs") },
  { name: "Vue.js", icon: icon("vuejs") },
  { name: "Tailwind CSS", icon: icon("tailwindcss") },
  { name: "Node.js & Express", icon: icon("nodejs") },
  { name: "PostgreSQL", icon: icon("postgresql") },
  { name: "Docker", icon: icon("docker") },
  { name: "DevOps", icon: icon("githubactions") },
];