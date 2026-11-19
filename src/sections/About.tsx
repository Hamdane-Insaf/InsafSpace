import { GraduationCap, Target, Heart } from "lucide-react";
import Container from "../components/layout/Container";
import SectionTitle from "../components/common/SectionTitle";
import "./About.css";

const facts = [
  { icon: GraduationCap, title: "ENSA Tangier", text: "GINF2" },
  { icon: Target, title: "My Goal", text: "Full-Stack Developer" },
  { icon: Heart, title: "Interests", text: "Tech • Innovation • AI" },
];

export default function About() {
  return (
    <section id="about" className="section section--white">
      <Container>
        <div className="about__grid">
          <img
            className="about__image"
            src="/images/ENSAT.png"
            alt="ENSA Tangier campus"
          />

          <div>
            <SectionTitle label="About Me" title="A Computer Science Student at ENSA Tangier" />

            <p className="about__text">
              I’m Insaf, a passionate developer with a strong interest in software development,
              problem-solving and technology. I aim to build impactful solutions and contribute to
              the tech world.
            </p>

            <ul className="about__facts">
              {facts.map(({ icon: Icon, title, text }) => (
                <li key={title}>
                  <Icon size={28} />
                  <div>
                    <strong>{title}</strong>
                    <span>{text}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}