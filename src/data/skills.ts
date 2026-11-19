import { Brain, Cloud, Code, Database, Globe, Network, Wrench, Layers } from "lucide-react";
import type { SkillCategory } from "../types";

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    icon: Code,
    items: ["C", "C++", "Java", "Python", "JavaScript", "TypeScript", "C#"],
  },
  {
    title: "Web Development",
    icon: Globe,
    items: ["HTML5", "CSS3", "React.js", "Vue.js", "Angular", "Node.js", "Express.js", ".NET"],
  },
  {
    title: "Databases",
    icon: Database,
    items: ["PostgreSQL", "MySQL", "Oracle", "SQL/PLSQL", "MongoDB", "Prisma"],
  },
  {
    title: "Artificial Intelligence",
    icon: Brain,
    items: [
      "LLM", "RAG", "LangChain", "LangGraph", "Ollama", "Open WebUI",
      "ChromaDB", "Qdrant", "Machine Learning", "Deep Learning",
    ],
  },
  {
    title: "Systems & Networks",
    icon: Network,
    items: [
      "Linux (Debian)", "Windows Server", "Active Directory", "LDAP", "VLAN", "RADIUS",
      "802.1X", "PacketFence", "Docker", "Hyper-V", "VMware", "VirtualBox",
    ],
  },
  {
    title: "DevOps & Cloud",
    icon: Cloud,
    items: [
      "Git", "GitHub", "GitLab", "CI/CD", "Jenkins", "Ansible",
      "Terraform", "Kubernetes", "Prometheus", "Grafana",
    ],
  },
  {
    title: "Software Design",
    icon: Layers,
    items: ["UML", "Object-Oriented Programming", "Design Patterns"],
  },
  {
    title: "Tools",
    icon: Wrench,
    items: ["Postman", "Figma", "Jira"],
  },
];