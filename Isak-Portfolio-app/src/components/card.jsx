// ============================================================
// PROJEKTKORT (Card) — Ett kort i Portfolio-griden. Klickas för
// att öppna popup (ProjectModal). GitHub-knappen stoppar klick-
// propagering så den inte öppnar popupen.
// ============================================================
import TechPill from "./techPill";
import "./card.css";

export default function ProjectCard({ project, onOpen }) {
  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onOpen(project);
    }
  };

  return (
    <article
      className="project-card"
      role="button"
      tabIndex={0}
      onClick={() => onOpen(project)}
      onKeyDown={handleKeyDown}
      style={{ cursor: "pointer" }}
    >
      <div className="project-preview">
        <span className="preview-label">{project.type}</span>
        <div className="preview-screen">
          <img
            src={project.screenshot}
            alt={`${project.title} screenshot`}
            className="preview-screenshot"
          />
        </div>
      </div>

      <div className="project-body">
        <div className="project-header">
          <div>
            <p className="project-eyebrow">{project.focus}</p>
            <h3>{project.title}</h3>
          </div>
          <a
            href={project.repo}
            target="_blank"
            rel="noreferrer"
            className="repo-link"
            onClick={(e) => e.stopPropagation()}
          >
            GitHub
          </a>
        </div>

        <p className="project-description">{project.description}</p>

        <div className="tech-list">
          {project.tech.map((item) => (
            <TechPill key={item} label={item} tone={project.techTone[item] || "default"} />
          ))}
        </div>
      </div>
    </article>
  );
}
