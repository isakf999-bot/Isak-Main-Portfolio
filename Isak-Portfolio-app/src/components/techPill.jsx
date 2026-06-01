// ============================================================
// TECH PILL — En liten pill för en teknik under varje projektkort
// (t.ex. "React", "CSS3"). Färgen på pricken styrs av `tone`
// (react, css, js, html, scss, figma, git eller default).
// ============================================================
import "./techPill.css";

export default function TechPill({ label, tone }) {
  return (
    <span className={`tech-pill ${tone}`}>
      <span className="tech-dot" />
      {label}
    </span>
  );
}
