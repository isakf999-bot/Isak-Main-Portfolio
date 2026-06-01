// ============================================================
// NAV (Header) — Toppmenyn med brand-text och navigeringsknappar.
// Tar emot:
//   page    = vilken sida som är aktiv (markerar rätt knapp)
//   setPage = funktion för att byta sida
// ============================================================
import "./nav.css";

export default function Navbar({ page, setPage }) {
  return (
    <header className="site-header">
      <div>
        <p className="brand-name">Isak Forsberg</p>
        <p className="brand-tag">Front End Developer</p>
      </div>

      <nav className="nav-links">
        <button
          className={page === "home" ? "nav-button active" : "nav-button"}
          onClick={() => setPage("home")}
        >
          Home
        </button>
        <button
          className={page === "experience" ? "nav-button active" : "nav-button"}
          onClick={() => setPage("experience")}
        >
          Experience
        </button>
        <button
          className={page === "portfolio" ? "nav-button active" : "nav-button"}
          onClick={() => setPage("portfolio")}
        >
          Portfolio
        </button>
        <button
          className={page === "contact" ? "nav-button active" : "nav-button"}
          onClick={() => setPage("contact")}
        >
          Contact
        </button>
      </nav>
    </header>
  );
}
