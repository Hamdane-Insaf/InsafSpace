export interface Skill {
  name: string;
  icon: string; // URL ou chemin de l'icône
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