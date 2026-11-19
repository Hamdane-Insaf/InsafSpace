import type { LucideIcon } from "lucide-react";

export interface SkillCategory {
  title: string;
  icon: LucideIcon;
  items: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}
export interface Experience {
  id: string;
  role: string;
  organization: string;
  period: string;
  description: string;
  type: "leadership" | "internship" | "education";
}