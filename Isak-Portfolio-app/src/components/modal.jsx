// ============================================================
// PROJECT MODAL (POPUP) — Öppnas när man klickar på ett kort.
// Visar bara bildslots som faktiskt har en bild (upp till 6) med
// text under varje, samt knappar för "Visit site" och
// "View on GitHub". Stängs med X, ESC eller klick utanför.
//
// Klick på en bild öppnar en lightbox där man kan bläddra genom
// ALLA bilder i projektet med pilar (◀ ▶) eller piltangenter.
// ============================================================
import { useEffect, useState } from "react";
import "./modal.css";

export default function ProjectModal({ project, onClose }) {
  // null = lightbox stängd, annars index på bilden som visas i fullstorlek
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const slots = project ? (project.images || []).filter((img) => img.src) : [];

  const closeLightbox = () => setLightboxIndex(null);
  const showPrev = () =>
    setLightboxIndex((i) => (i === null ? i : (i - 1 + slots.length) % slots.length));
  const showNext = () =>
    setLightboxIndex((i) => (i === null ? i : (i + 1) % slots.length));

  useEffect(() => {
    if (!project) return;
    const handleKey = (e) => {
      if (lightboxIndex !== null) {
        // Lightbox öppen: pilar bläddrar, ESC stänger bara lightboxen
        if (e.key === "Escape") closeLightbox();
        else if (e.key === "ArrowLeft") showPrev();
        else if (e.key === "ArrowRight") showNext();
      } else if (e.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [project, onClose, lightboxIndex, slots.length]);

  if (!project) return null;

  const activeImage = lightboxIndex !== null ? slots[lightboxIndex] : null;

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
              <button
                type="button"
                className="modal-image-frame"
                onClick={() => setLightboxIndex(i)}
                aria-label={`Open image ${i + 1} of ${slots.length}`}
              >
                <img
                  src={img.src}
                  alt={img.caption || `${project.title} image ${i + 1}`}
                />
                <span className="modal-image-zoom" aria-hidden="true">
                  ⤢
                </span>
              </button>
              {img.caption && (
                <figcaption className="modal-image-caption">{img.caption}</figcaption>
              )}
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

      {/* --- Lightbox: fullstor bild med pilar och räknare --- */}
      {activeImage && (
        <div
          className="lightbox-backdrop"
          onClick={(e) => {
            e.stopPropagation();
            closeLightbox();
          }}
          role="dialog"
          aria-modal="true"
          aria-label={`${project.title} image viewer`}
        >
          <button
            className="lightbox-close"
            onClick={(e) => {
              e.stopPropagation();
              closeLightbox();
            }}
            aria-label="Close image"
          >
            ×
          </button>

          {slots.length > 1 && (
            <button
              className="lightbox-arrow lightbox-arrow--prev"
              onClick={(e) => {
                e.stopPropagation();
                showPrev();
              }}
              aria-label="Previous image"
            >
              ‹
            </button>
          )}

          <figure className="lightbox-figure" onClick={(e) => e.stopPropagation()}>
            <img
              src={activeImage.src}
              alt={activeImage.caption || `${project.title} image ${lightboxIndex + 1}`}
            />
            <figcaption className="lightbox-caption">
              {activeImage.caption && <span>{activeImage.caption}</span>}
              <span className="lightbox-counter">
                {lightboxIndex + 1} / {slots.length}
              </span>
            </figcaption>
          </figure>

          {slots.length > 1 && (
            <button
              className="lightbox-arrow lightbox-arrow--next"
              onClick={(e) => {
                e.stopPropagation();
                showNext();
              }}
              aria-label="Next image"
            >
              ›
            </button>
          )}
        </div>
      )}
    </div>
  );
}
