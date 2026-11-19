import { useState } from "react";
import type { FormEvent } from "react";
import { Mail, MapPin, Send } from "lucide-react";
import Container from "../components/layout/Container";
import SectionTitle from "../components/common/SectionTitle";
import SocialLinks from "../components/common/SocialLinks";
import "../components/common/Button.css";
import "./Contact.css";

const FORM_ENDPOINT = "https://formspree.io/f/mgakybgv";

type Status = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="section section--white">
      <Container>
        <div className="contact__grid">
          <div>
            <SectionTitle
              label="Get in Touch"
              title="Let’s Work Together!"
              description="Feel free to reach out for opportunities, collaborations or just a friendly hello."
            />

            <ul className="contact__info">
              <li>
                <Mail size={20} />
                <a href="mailto:insaf.hamdane@ensat.ac.ma">insaf.hamdane@ensat.ac.ma</a>
              </li>
              <li>
                <MapPin size={20} />
                <span>Tangier, Morocco</span>
              </li>
            </ul>

            <SocialLinks />
          </div>

          <form className="contact__form" onSubmit={handleSubmit}>
            <div className="contact__row">
              <label>
                Your Name
                <input type="text" name="name" required autoComplete="name" />
              </label>
              <label>
                Your Email
                <input type="email" name="email" required autoComplete="email" />
              </label>
            </div>

            <label>
              Your Message
              <textarea name="message" rows={5} required />
            </label>

            <div className="contact__submit">
              <button className="btn btn--primary" type="submit" disabled={status === "sending"}>
                {status === "sending" ? "Sending…" : "Send Message"} <Send size={16} />
              </button>

              <p role="status" className={`contact__status contact__status--${status}`}>
                {status === "success" && "Thanks! Your message has been sent."}
                {status === "error" && "Something went wrong. Please try again or email me directly."}
              </p>
            </div>
          </form>
        </div>
      </Container>
    </section>
  );
}