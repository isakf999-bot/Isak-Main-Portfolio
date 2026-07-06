// ============================================================
// EXPERIENCE-SIDA — Två kolumner: Education till vänster,
// Work till höger, varsin vertikal tidslinje.
// ============================================================
import { GraduationCapIcon, BriefcaseIcon } from "../components/icons";
import "./experience.css";

export default function Experience() {
  return (
    <section className="experience-section">
      <div className="section-title-row">
        <div>
          <p className="eyebrow">Experience</p>
          <h2>Education and focus</h2>
        </div>
      </div>

      <div className="experience-columns">
        {/* ------ Education (vänster) ------ */}
        <div className="experience-column">
          <div className="experience-column-header">
            <span className="experience-column-icon">
              <GraduationCapIcon />
            </span>
            <h3>Education</h3>
          </div>

          <div className="timeline">
            <article className="timeline-item">
              <span className="timeline-marker" aria-hidden="true" />
              <div className="timeline-content">
                <p className="timeline-date">2026-01-12 - 2026-06-05</p>
                <h4>Sunds Gårdens Folkhögskola</h4>
                <p className="timeline-role">Front End Developer</p>
                <p className="timeline-copy">
                  Focused on HTML, CSS, JavaScript, React, SCSS, Figma, responsive design, user experience and collaborative web development.
                </p>
              </div>
            </article>

            <article className="timeline-item">
              <span className="timeline-marker" aria-hidden="true" />
              <div className="timeline-content">
                <p className="timeline-date">2026-08-17 - 2026-12-18</p>
                <h4>Sunds Gårdens Folkhögskola</h4>
                <p className="timeline-role">Back End Developer</p>
                <p className="timeline-copy">
                  Worked to help them fix bugs, add new features and improve the user experience on their website. I learned how to work in a company environment, worked with one developer and got experience on how to work with branches and pull requests . I also got to see how a company works with their website and how they prioritize different tasks.
                </p>
              </div>
            </article>
          </div>
        </div>

        {/* ------ Work (höger) ------ */}
        <div className="experience-column">
          <div className="experience-column-header">
            <span className="experience-column-icon">
              <BriefcaseIcon />
            </span>
            <h3>Work</h3>
          </div>

          <div className="timeline">
            <article className="timeline-item">
              <span className="timeline-marker" aria-hidden="true" />
              <div className="timeline-content">
                <p className="timeline-date">2026-06-01 - 2026-07-01</p>
                <h4>Summer temp at Strafe.com</h4>
                <p className="timeline-role">Front End Developer</p>
                <p className="timeline-copy">
                  Worked to help them fix bugs, add new features and improve the user experience on their website. I learned how to work in a company environment, worked with one developer and got experience on how to work with branches and pull requests . I also got to see how a company works with their website and how they prioritize different tasks.
                </p>
              </div>
            </article>

            <article className="timeline-item">
              <span className="timeline-marker" aria-hidden="true" />
              <div className="timeline-content coming-soon">
                <p className="coming-soon-text">Coming soon...</p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
