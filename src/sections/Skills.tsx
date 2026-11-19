import Container from "../components/layout/Container";
import SectionTitle from "../components/common/SectionTitle";
import { skillCategories } from "../data/skills";
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
            {skillCategories.map(({ title, icon: Icon, items }) => (
              <li key={title} className="skills__card">
                <h3>
                  <Icon size={20} /> {title}
                </h3>
                <ul className="skills__chips">
                  {items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}