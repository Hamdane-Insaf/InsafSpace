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