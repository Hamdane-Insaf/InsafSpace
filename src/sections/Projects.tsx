import { ArrowRight } from "lucide-react";
import Container from "../components/layout/Container";
import SectionTitle from "../components/common/SectionTitle";
import Button from "../components/common/Button";
import ProjectCard from "../components/common/ProjectCard";
import { projects } from "../data/projects";
import "./Projects.css";

export default function Projects() {
  const featured = projects.filter((p) => p.featured);

  return (
    <section id="projects" className="section section--white">
      <Container>
        <div className="projects__head">
          <SectionTitle
            label="My Projects"
            title="Turning Ideas into Real Solutions"
            description="A selection of my projects showcasing my skills and creativity."
          />
          <Button href="https://github.com/Hamdane-Insaf">
            View All Projects <ArrowRight size={16} />
          </Button>
        </div>

        <div className="projects__grid">
          {featured.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </Container>
    </section>
  );
}