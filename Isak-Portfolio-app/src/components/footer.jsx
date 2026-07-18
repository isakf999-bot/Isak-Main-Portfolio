// ============================================================
// FOOTER — Sidfot med sociala ikoner och copyright-text.
// ============================================================
import { InstagramIcon, LinkedInIcon, TwitterIcon, GitHubIcon } from "./icons";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-socials">
        <a href="https://github.com/isakf999-bot" target="_blank" rel="noreferrer" aria-label="GitHub">
          <GitHubIcon />
        </a>
        <a href="https://instagram.com/isakforsberg11" target="_blank" rel="noreferrer" aria-label="Instagram">
          <InstagramIcon />
        </a>
        <a href="https://www.linkedin.com/in/isakforsberg05" target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <LinkedInIcon />
        </a>
        <a href="https://x.com/FoppaCS" target="_blank" rel="noreferrer" aria-label="Twitter / X">
          <TwitterIcon />
        </a>
      </div>
      <p>© 2026 Isak Forsberg.</p>
    </footer>
  );
}
