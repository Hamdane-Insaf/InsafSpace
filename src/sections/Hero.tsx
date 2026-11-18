import { ArrowRight, Mail } from "lucide-react";
import Container from "../components/layout/Container";
import Button from "../components/common/Button";
import "./Hero.css";

const stack = ["React", "TypeScript", "Node.js", "Python", "Docker", "GitHub"];

export default function Hero() {
  return (
    <section id="home" className="hero">
      <Container>
        <div className="hero__grid">
          <div className="hero__content">
            <p className="hero__badge">
              <span className="hero__dot" /> Available for opportunities
            </p>

            <h1 className="hero__title">
              Hello, I’m <span className="hero__name">Insaf Hamdane</span>
              <br />
              Software Engineer in the making.
            </h1>

            <p className="hero__text">
              Computer Science Student at ENSA Tangier, passionate about building innovative
              solutions, learning new technologies and growing in tech.
            </p>

            <div className="hero__actions">
              <Button href="#projects">
                Explore My Projects <ArrowRight size={16} />
              </Button>
              <Button variant="outline" href="#contact">
                <Mail size={16} /> Contact Me
              </Button>
            </div>

            <ul className="hero__stack" aria-label="Main technologies">
              {stack.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>

          <div className="hero__visual">
            <div className="hero__blob" />
            <img
              className="hero__photo"
              src="/images/insaf.png"
              alt="Portrait of Insaf Hamdane"
            />
            <p className="hero__quote">
              Dream it.
              <br />
              Code it. ♥
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}