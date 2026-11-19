import { ArrowUpRight } from "lucide-react";
import type { Project } from "../../types";
import "./ProjectCard.css";

const badgeLabel: Record<Project["category"], string> = {
  academic: "Academic Project",
  personal: "Personal Project",
};

export default function ProjectCard({ project }: { project: Project }) {
  const { title, description, image, tags, category, liveUrl, githubUrl } = project;

  return (
    <article className="project-card">
      <div className="project-card__media">
        <img className="project-card__image" src={image} alt={`${title} preview`} loading="lazy" />
        <span className={`project-card__badge project-card__badge--${category}`}>
          {badgeLabel[category]}
        </span>
      </div>

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