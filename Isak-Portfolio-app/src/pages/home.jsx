// ============================================================
// HOME-SIDA — Hero-sektion (rubrik + CTA-knappar) samt
// Skills-grid och About me-kort.
// Tar emot setPage för att kunna byta sida via knapparna.
// ============================================================
import SkillBadge from "../components/skillBadge";
import { skills } from "../data/skills";
import "./home.css";

export default function Home({ setPage }) {
  return (
    <>
      {/* ------ Hero-sektion (rubrik + knappar) ------ */}
      <section className="hero-section">
        <div className="hero-glow" aria-hidden="true" />
        <div className="hero-copy">
          <p className="availability-pill">
            <span className="availability-dot" />
            Available for new projects
          </p>
          <h1>
            Hello, I'm <span className="hero-name">Isak</span>
          </h1>
          <h2>And i am Front End Developer</h2>
          <p className="hero-description">
            I create modern, clean and responsive web experiences with a strong focus on design, usability and performance.
          </p>

          <div className="hero-actions">
            <button className="primary-btn" onClick={() => setPage("portfolio")}>
              View projects
              <span className="btn-arrow" aria-hidden="true">→</span>
            </button>
            <button className="secondary-btn" onClick={() => setPage("experience")}>
              View experience
            </button>
          </div>
        </div>
      </section>

      {/* ------ Skills + About me ------ */}
      <section className="skills-section">
        <div className="section-title-row">
          <div>
            <p className="eyebrow">Skills</p>
            <h2>Core front-end skills</h2>
          </div>
        </div>

        <div className="skills-grid">
          {skills.map((skill) => (
            <SkillBadge key={skill.name} skill={skill} />
          ))}
        </div>

        <div className="about-me-card">
          <p className="eyebrow">About me</p>
          <p className="about-me-copy">
            I’m Isak Forsberg, a 20 year old front-end developer from Sweden, focused on building modern, responsive websites with clean visuals, smooth interactions and a strong design sensibility.
            I enjoy turning ideas into polished web experiences using React, JavaScript, HTML, CSS and Figma. I am currently building my portfolio and looking for opportunities to collaborate on projects that value thoughtful design and clean code.
            I am taking a course on backend development to expand my skillset and better understand the full web development process and become an fullstack developer in the future.

          </p>
        </div>
      </section>
    </>
  );
}
