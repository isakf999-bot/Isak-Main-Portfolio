// ============================================================
// CONTACT-SIDA — Tre kort: intro/öppen för uppdrag, vad jag kan
// hjälpa till med, samt kontaktdetaljer med ikoner.
// Tar emot setPage för "See projects"-knappen.
// ============================================================
import {
  PhoneIcon,
  EmailIcon,
  InstagramIcon,
  FacebookIcon,
  TwitterIcon,
} from "../components/icons";
import "./contact.css";

export default function Contact({ setPage }) {
  return (
    <section className="contact-section">
      <div className="section-title-row">
        <div>
          <p className="eyebrow">Contact</p>
          <h2>Let’s build something great together</h2>
        </div>
      </div>

      <div className="contact-grid">
        <article className="contact-card">
          <p className="contact-kicker">Open for collaborations</p>
          <p className="contact-copy">
            I enjoy working on clean UI, responsive interfaces, and thoughtful web experiences. If you are looking for a front-end developer for a project, a redesign, or a concept build, I’d love to hear about it.
          </p>
          <div className="contact-actions">
            <a href="https://github.com/isakf999-bot" target="_blank" rel="noreferrer" className="contact-link">
              View GitHub
            </a>
            <button className="secondary-btn" onClick={() => setPage("portfolio")}>
              See projects
            </button>
          </div>
        </article>

        <article className="contact-card alt">
          <p className="contact-kicker">What I can help with</p>
          <ul className="contact-list">
            <li>Responsive landing pages and marketing sites</li>
            <li>React-based UI components and interfaces</li>
            <li>Design-to-code work with Figma handoff</li>
            <li>Clean, accessible front-end polish and refinements</li>
          </ul>
        </article>

        <article className="contact-card details">
          <p className="contact-kicker">Contact details</p>
          <div className="contact-detail-row">
            <span className="contact-detail-label"><PhoneIcon /></span>
            <span className="contact-detail-value">+46 76 251 41 21</span>
          </div>
          <div className="contact-detail-row">
            <span className="contact-detail-label"><EmailIcon /></span>
            <span className="contact-detail-value">isakf999@gmail.com</span>
          </div>
          <div className="contact-detail-row">
            <span className="contact-detail-label"><InstagramIcon /></span>
            <span className="contact-detail-value">isakforsberg11</span>
          </div>
          <div className="contact-detail-row">
            <span className="contact-detail-label"><TwitterIcon /></span>
            <span className="contact-detail-value">FoppaCS</span>
          </div>
          <div className="contact-detail-row">
            <span className="contact-detail-label"><FacebookIcon /></span>
            <span className="contact-detail-value">Isak Forsberg</span>
          </div>
        </article>
      </div>
    </section>
  );
}
