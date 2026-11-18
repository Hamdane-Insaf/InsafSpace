import Container from "../components/layout/Container";
import SectionTitle from "../components/common/SectionTitle";
import { skills } from "../data/skills";
import "./Skills.css";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <Container>
        <div className="skills__grid">
          <SectionTitle
            label="My Skills"
            title="Technologies I Work With"
            description="A versatile developer with a strong foundation in modern technologies."
          />

          <ul className="skills__list">
            {skills.map((s) => (
              <li key={s.name} className="skills__item">
                <img src={s.icon} alt="" width={36} height={36} />
                <span>{s.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}