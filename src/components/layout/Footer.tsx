import { ArrowUp } from "lucide-react";
import Container from "./Container";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <Container>
        <div className="footer__inner">
          <p>© {new Date().getFullYear()} Insaf Hamdane. All rights reserved.</p>
          <p className="footer__tagline">Let’s build, learn and grow together!</p>
          <nav className="footer__links" aria-label="Footer">
            <a href="https://github.com/Hamdane-Insaf" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/TON-PROFIL" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href="#home" className="footer__top" aria-label="Back to top">
              <ArrowUp size={18} />
            </a>
          </nav>
        </div>
      </Container>
    </footer>
  );
}