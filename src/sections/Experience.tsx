import { Briefcase, GraduationCap, Users } from "lucide-react";
import Container from "../components/layout/Container";
import SectionTitle from "../components/common/SectionTitle";
import { experiences } from "../data/experience";
import type { Experience as ExperienceType } from "../types";
import "./Experience.css";

const icons: Record<ExperienceType["type"], typeof Users> = {
  leadership: Users,
  internship: Briefcase,
  education: GraduationCap,
};

export default function Experience() {
    return (
    <section id="experience" className="section">
      <Container>
        <div className="experience__grid">
          <div>
            <SectionTitle
              label="Experience & Leadership"
              title="Building Experience and Leading Community"
              description="A journey of learning, collaboration and contribution."
            />

            <ol className="timeline">
              {experiences.map((e) => {
                const Icon = icons[e.type];
                return (
                  <li key={e.id} className="timeline__item">
                    <span className="timeline__icon">
                      <Icon size={20} />
                    </span>
                    <div>
                      <h3>{e.role}</h3>
                      <p className="timeline__meta">
                        {e.organization} • {e.period}
                      </p>
                      <p className="timeline__desc">{e.description}</p>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>

          <img
            className="experience__image"
            src="/images/csc.jpg"
            alt="Computer Science Club ENSA Tangier"
            loading="lazy"
          />
        </div>
      </Container>
    </section>
  );
}