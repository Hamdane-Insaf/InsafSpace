import { ArrowUpRight } from "lucide-react";
import type { Project } from "../../types";
import "./ProjectCard.css";

export default function ProjectCard({ project }: { project: Project }) {
  const { title, description, image, tags, liveUrl, githubUrl } = project;

  return (
    <article className="project-card">
      <img className="project-card__image" src={image} alt={`${title} preview`} loading="lazy" />

      <div className="project-card__body">
        <h3>{title}</h3>
        <p>{description}</p>

        <ul className="project-card__tags">
          {tags.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>

        <div className="project-card__links">
          {liveUrl && (
            <a href={liveUrl} target="_blank" rel="noreferrer">
              Live Demo <ArrowUpRight size={14} />
            </a>
          )}
          {githubUrl && (
            <a href={githubUrl} target="_blank" rel="noreferrer">
              GitHub <ArrowUpRight size={14} />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}