// ============================================================
// NAV (Header) — Toppmenyn med logotyp och navigeringsknappar.
// Tar emot:
//   page    = vilken sida som är aktiv (markerar rätt knapp)
//   setPage = funktion för att byta sida
// Loggan är klickbar (går till Home) och snurrar ett varv vid hover.
// .nav-inner har samma max-bredd/padding som .content, så loggan och
// Contact-länken linjerar exakt med sidans innehåll under.
// ============================================================
import { LogoMark } from "./icons";
import "./nav.css";

export default function Navbar({ page, setPage }) {
  return (
    <header className="site-header">
      <div className="nav-inner">
        <button className="brand-mark" onClick={() => setPage("home")} aria-label="Go to home">
          <LogoMark />
        </button>

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
      </div>
    </header>
  );
}
