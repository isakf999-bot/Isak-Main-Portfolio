// ============================================================
// SKILL BADGE — En pill för en skill på Home-sidan.
// Visar en ikon + namn (t.ex. React-ikon + "React").
// Används i skills-grid på Home.
// ============================================================
import "./skillBadge.css";

export default function SkillBadge({ skill }) {
  return (
    <div className="skill-badge">
      <span className="skill-icon">{skill.icon}</span>
      <span>{skill.name}</span>
    </div>
  );
}
