import { useEffect, useState } from "react";
import { Code, Download, Menu, X } from "lucide-react";
import Container from "./Container";
import Button from "../common/Button";
import "./Navbar.css";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  // Surligne le lien de la section visible à l'écran
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        }),
      { rootMargin: "-40% 0px -55% 0px" }
    );
    links.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header className="navbar">
      <Container>
        <div className="navbar__inner">
          <a href="#home" className="navbar__logo">
            <Code size={28} /> Insaf.
          </a>

          <nav className={`navbar__links ${open ? "is-open" : ""}`} aria-label="Main">
            {links.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                className={active === l.id ? "active" : ""}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="navbar__actions">
            <div className="navbar__cv">
              <Button href="/Insaf-CV.pdf" download>
                Download CV <Download size={16} />
              </Button>
            </div>
            <button
              className="navbar__burger"
              aria-label="Toggle menu"
              aria-expanded={open}
              onClick={() => setOpen(!open)}
            >
              {open ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </Container>
    </header>
  );
}