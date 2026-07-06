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
                <h4>Sundsgården Folk High School</h4>
                <p className="timeline-role">Front End Developer</p>
                <p className="timeline-copy">
                Vocational training focused on web development, digital tools, and modern development workflows. Gained hands-on experience with HTML, CSS, JavaScript, Git/GitHub, and design tools such as Figma, while working with agile methods and collaborative projects. Built responsive web applications and developed problem-solving and teamwork skills in a practical learning environment.
                </p>
              </div>
            </article>

            <article className="timeline-item">
              <span className="timeline-marker" aria-hidden="true" />
              <div className="timeline-content">
                <p className="timeline-date">2026-08-17 - 2026-12-18</p>
                <h4>Sundsgården Folk High School</h4>
                <p className="timeline-role">Back End Developer</p>
                <p className="timeline-copy">
                 IT Back-End Developer – Sundsgården Folk High School Vocational education focused on modern back-end development and server-side applications. Gained hands-on experience with JavaScript, TypeScript, Node.js, REST APIs, SQL and NoSQL databases, authentication, security, and software testing. Worked on both individual and team-based projects using Git, Docker, and agile development methodologies.
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
