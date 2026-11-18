import Button from "./components/common/Button";
import SectionTitle from "./components/common/SectionTitle";

export default function App() {
  return (
    <main style={{ padding: "var(--space-5)" }}>
      <SectionTitle
        label="My Projects"
        title="Turning Ideas into Real Solutions"
        description="A selection of my projects showcasing my skills and creativity."
      />
      <div style={{ display: "flex", gap: "var(--space-2)", marginTop: "var(--space-3)" }}>
        <Button>Explore My Projects</Button>
        <Button variant="outline">Contact Me</Button>
      </div>
    </main>
  );
}