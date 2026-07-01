// ============================================================
// EXPERIENCE-SIDA — Två info-kort: utbildning och arbetsfokus.
// ============================================================
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

      <div className="experience-grid">
        <article className="info-card">
          <p className="eyebrow">Education</p>
          <h3>Sunds Gårdens Folkhögskola</h3>
          <p className="info-meta">Front End Developer</p>
          <p className="info-meta">2026-01-12 - 2026-06-05</p>
          <p className="info-copy">
            Focused on HTML, CSS, JavaScript, React, SCSS, Figma, responsive design, user experience and collaborative web development.
          </p>
        </article>

        <article className="info-card">
          <p className="eyebrow">Work focus</p>
          <h3>Summer temp at Strafe.com</h3>
          <p className="info-meta">Front End Developer</p>
          <p className="info-meta">2026-06-01 - 2026-07-01</p>
          <p className="info-copy">
            Worked to help them fix bugs, add new features and improve the user experience on their website. I learned how to work in a company environment, worked with one developer and got experience on how to work view branches, pull requests and code reviews. I also got to see how a company works with their website and how they prioritize different tasks.
          </p>
        </article>

        <article className="info-card">
          <p className="eyebrow">Education</p>
          <h3>Sunds Gårdens Folkhögskola</h3>
          <p className="info-meta">Back End Developer</p>
          <p className="info-meta">2026-08-17 - 2026-12-17</p>
          <p className="info-copy">
            Worked to help them fix bugs, add new features and improve the user experience on their website. I learned how to work in a company environment, worked with one developer and got experience on how to work view branches, pull requests and code reviews. I also got to see how a company works with their website and how they prioritize different tasks.
          </p>
        </article>

        <article className="info-card">
          <p className="eyebrow">Work focus</p>
          <h3>Front end developer at Strafe.com</h3>
          <p className="info-meta">Front End Developer</p>
          <p className="info-meta">2026-08-01 - 2027-01-01</p>
          <p className="info-copy">
            Worked to help them fix bugs, add new features and improve the user experience on their website. I learned how to work in a company environment, worked with one developer and got experience on how to work view branches, pull requests and code reviews. I also got to see how a company works with their website and how they prioritize different tasks.
          </p>
        </article>
      </div>
    </section>
  );
}
