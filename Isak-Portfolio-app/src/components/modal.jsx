// ============================================================
// PROJECT MODAL (POPUP) — Öppnas när man klickar på ett kort.
// Visar 6 bildslots med text under varje, samt knappar för
// "Visit site" och "View on GitHub". Stängs med X, ESC eller
// klick utanför.
// ============================================================
import { useEffect } from "react";
import "./modal.css";

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return;
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [project, onClose]);

  if (!project) return null;

  const slots = Array.from({ length: 6 }, (_, i) => project.images?.[i] || { src: null, caption: "" });

  return (
    <div
      className="modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} details`}
    >
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close">
          ×
        </button>

        <div className="modal-header">
          <p className="project-eyebrow">{project.focus}</p>
          <h3>{project.title}</h3>
          <p className="project-description">{project.description}</p>
        </div>

        <div className="modal-gallery">
          {slots.map((img, i) => (
            <figure key={i} className="modal-image-slot">
              <div className="modal-image-frame">
                {img.src ? (
                  <img
                    src={img.src}
                    alt={img.caption || `${project.title} image ${i + 1}`}
                  />
                ) : (
                  <span className="modal-image-placeholder">Image {i + 1}</span>
                )}
              </div>
              <figcaption className="modal-image-caption">
                {img.caption || "Add a description for this image."}
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="modal-actions">
          {project.liveSite ? (
            <a
              href={project.liveSite}
              target="_blank"
              rel="noreferrer"
              className="contact-link"
            >
              Visit site
            </a>
          ) : (
            <span className="modal-no-site">Live site link coming soon</span>
          )}
          <a
            href={project.repo}
            target="_blank"
            rel="noreferrer"
            className="secondary-btn modal-repo-btn"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
