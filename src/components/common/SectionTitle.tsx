import "./SectionTitle.css";

interface SectionTitleProps {
  label: string;
  title: string;
  description?: string;
}

export default function SectionTitle({ label, title, description }: SectionTitleProps) {
  return (
    <header className="section-title">
      <p className="section-title__label">{label}</p>
      <h2 className="section-title__heading">{title}</h2>
      {description && <p className="section-title__desc">{description}</p>}
    </header>
  );
}