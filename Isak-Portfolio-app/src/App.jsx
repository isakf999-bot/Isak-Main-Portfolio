// ============================================================
// IMPORTS — React-hooks, stilfilen och alla projektbilder
// ============================================================
import { useEffect, useState } from "react";
import "./App.css";
import heroImage from "./assets/hero.png";
import translateImage from "./assets/translate.png";
import typinggameImage from "./assets/typinggame.png";
import genesisImage from "./assets/genesis.png";
import bookingImage from "./assets/booking.png";
import githubImage from "./assets/github.png";
import guesswordImage from "./assets/guessword.png";
import plannerImage from "./assets/planner.png";
import planner2Image from "./assets/planner2.png";
import planner3Image from "./assets/planner3.png";
import planner4Image from "./assets/planner4.png";
import planner5Image from "./assets/planner5.png";
import planner6Image from "./assets/planner6.png";


// ============================================================
// SVG-IKONER — Alla små ikoner som används i skill-badges
// och tech-pills (HTML, CSS, JS, React, Figma, GitHub osv).
// Lägg till nya ikoner här om du vill ha fler tekniker.
// ============================================================

// --- HTML-ikon ---
function HtmlIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" style={{ color: "#E34F26" }}>
      <path fill="currentColor" d="M4 2l1.8 18.2L12 22l6.2-1.8L20 2H4zm13.1 5.6H9.1l.2 2.1h7.6l-.6 6.4-4.3 1.2-4.3-1.2-.3-2.8h2.1l.1 1.4 2.4.7 2.4-.7.2-2.5H7.7l-.6-6.3h9.8l-.2 2.1z" />
    </svg>
  );
}

// --- CSS-ikon ---
function CssIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" style={{ color: "#1572B6" }}>
      <rect x="2" y="2" width="20" height="20" rx="4.5" fill="currentColor" />
      <text
        x="12"
        y="16.5"
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize="12"
        fontWeight="900"
        fontFamily="Arial, sans-serif"
        fill="#ffffff"
      >
        3
      </text>
    </svg>
  );
}

// --- SCSS-ikon ---
function ScssIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" style={{ color: "#CF649A" }}>
      <rect x="2" y="2" width="20" height="20" rx="5" fill="currentColor" />
      <text x="12" y="16" textAnchor="middle" fontSize="8" fontWeight="800" fontFamily="Arial, sans-serif" fill="#fff">SCSS</text>
    </svg>
  );
}

// --- JavaScript-ikon ---
function JsIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" style={{ color: "#F7DF1E" }}>
      <rect x="2" y="2" width="20" height="20" rx="4" fill="currentColor" />
      <text x="12" y="15" textAnchor="middle" fontSize="8" fontWeight="800" fontFamily="Arial, sans-serif" fill="#000">JS</text>
    </svg>
  );
}

// --- Figma-ikon ---
function FigmaIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" fill="#0F1728" />
      <path fill="#0ACF83" d="M8 5.5h4c2.2 0 4 1.8 4 4s-1.8 4-4 4H8V5.5Z" />
      <path fill="#A259FF" d="M8 11h4c2.2 0 4 1.8 4 4s-1.8 4-4 4H8v-8Z" />
      <path fill="#F24E1E" d="M8 17h4c2.2 0 4 1.8 4 4s-1.8 4-4 4H8v-8Z" />
      <path fill="#1ABCFE" d="M14 7.5c0-2.2 1.8-4 4-4v8h-4V7.5Z" />
      <path fill="#FF7262" d="M14 15c0-2.2 1.8-4 4-4v8h-4v-4Z" />
    </svg>
  );
}

// --- React-ikon ---
function ReactIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" style={{ color: "#61DAFB" }}>
      <circle cx="12" cy="12" r="2.2" fill="currentColor" />
      <ellipse cx="12" cy="12" rx="8" ry="3.2" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <ellipse cx="12" cy="12" rx="8" ry="3.2" transform="rotate(60 12 12)" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <ellipse cx="12" cy="12" rx="8" ry="3.2" transform="rotate(120 12 12)" fill="none" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

// --- GitHub-ikon ---
function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" style={{ color: "#FFFFFF" }}>
      <path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12c0 4.4 2.9 8.1 6.8 9.4.5.1.7-.2.7-.5v-1.8c-2.8.6-3.4-1.3-3.4-1.3-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.6 2.4 1.1 3 .8.1-.6.4-1.1.7-1.3-2.2-.2-4.5-1.1-4.5-4.8 0-1.1.4-2 1-2.7-.1-.2-.4-1.1.1-2.3 0 0 .8-.3 2.7 1 .8-.2 1.6-.3 2.5-.3s1.7.1 2.5.3c1.9-1.3 2.7-1 2.7-1 .5 1.2.2 2.1.1 2.3.6.7 1 1.6 1 2.7 0 3.7-2.3 4.6-4.5 4.8.4.3.7.9.7 1.9v2.8c0 .3.2.6.7.5 3.9-1.3 6.8-5 6.8-9.4C22 6.5 17.5 2 12 2z" />
    </svg>
  );
}

// --- VS Code-ikon ---
function VSCodeIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" style={{ color: "#007ACC" }}>
      <path fill="currentColor" d="M16.6 2l-7.5 6.4L5.1 5.1 2 6.5v11l3.1 1.4 4-3.3 7.5 6.4 3.4-1.4V3.4L16.6 2zm0 3.4v13.2l-6.2-6.6 6.2-6.6zM5.1 8.9l2.7 2.4-2.7 2.4V8.9z" />
    </svg>
  );
}

// ============================================================
// KONTAKT-IKONER — Används på Contact-sidan i kontaktkortet
// (telefon, mail, Instagram, Facebook, Twitter/X).
// ============================================================

// --- Telefon-ikon ---
function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" role="img" aria-label="Phone">
      <path fill="currentColor" d="M6.6 2.5c.5-.2 1.1 0 1.4.5l1.1 2.2c.2.4.2.9 0 1.3l-1 1.5c-.2.3-.2.7-.1 1 .5 1.1 1.3 2.2 2.3 3.1 1 1 2.1 1.8 3.3 2.3.3.1.7.1 1-.1l1.5-1c.4-.2.9-.2 1.3 0l2.2 1.1c.5.3.7.9.5 1.4l-.8 1.7c-.3.7-.9 1.2-1.7 1.2-3.3 0-6.4-1.3-8.8-3.7-2.4-2.4-3.7-5.5-3.7-8.8 0-.8.4-1.4 1.1-1.7l1.7-.8z" />
    </svg>
  );
}

// --- E-post-ikon ---
function EmailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" role="img" aria-label="Email">
      <path fill="currentColor" d="M4 6.5c-.8 0-1.5.7-1.5 1.5v8c0 .8.7 1.5 1.5 1.5h16c.8 0 1.5-.7 1.5-1.5V8c0-.8-.7-1.5-1.5-1.5H4Zm0 1.5h16l-7.2 5.1c-.4.3-.9.3-1.3 0L4 8Z" />
    </svg>
  );
}

// --- Instagram-ikon ---
function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" role="img" aria-label="Instagram">
      <rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="17.5" cy="6.5" r="1.1" fill="currentColor" />
    </svg>
  );
}

// --- Facebook-ikon ---
function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" role="img" aria-label="Facebook">
      <path fill="currentColor" d="M13.5 20v-6.5h2.3l.3-2.7h-2.6V9.6c0-.8.2-1.3 1.3-1.3h1.4V5.8c-.2 0-1.1-.1-2.1-.1-2.1 0-3.5 1.3-3.5 3.7v2.1H8v2.7h2.3V20h3.2Z" />
    </svg>
  );
}

// --- Twitter/X-ikon ---
function TwitterIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" role="img" aria-label="Twitter">
      <path fill="currentColor" d="M18.9 4.5h2.8l-6.2 7.1 7.3 8.4H16l-4.5-5.9-5.1 5.9H3.6l6.6-7.5L3.5 4.5h6.6l4.1 5.4 4.7-5.4Zm-1 14.1h1.5L7.2 5.8H5.5l12.3 12.8Z" />
    </svg>
  );
}

// ============================================================
// SMÅ ÅTERANVÄNDBARA KOMPONENTER
// SkillBadge = en pill för en skill på Home-sidan.
// TechPill   = en pill för en teknik under varje projektkort.
// ============================================================

// --- SkillBadge: visas i skills-grid på Home ---
function SkillBadge({ skill }) {
  return (
    <div className="skill-badge">
      <span className="skill-icon">{skill.icon}</span>
      <span>{skill.name}</span>
    </div>
  );
}

// --- TechPill: visas under varje projekt på Portfolio-sidan ---
function TechPill({ label, tone }) {
  return (
    <span className={`tech-pill ${tone}`}>
      <span className="tech-dot" />
      {label}
    </span>
  );
}

// ============================================================
// PROJEKTKORT — Ett kort i Portfolio-griden. Klickas för att
// öppna popup (ProjectModal). GitHub-knappen stoppar klick-
// propagering så den inte öppnar popupen.
// ============================================================
function ProjectCard({ project, onOpen }) {
  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onOpen(project);
    }
  };

  return (
    <article
      className="project-card"
      role="button"
      tabIndex={0}
      onClick={() => onOpen(project)}
      onKeyDown={handleKeyDown}
      style={{ cursor: "pointer" }}
    >
      <div className="project-preview">
        <span className="preview-label">{project.type}</span>
        <div className="preview-screen">
          <img
            src={project.screenshot}
            alt={`${project.title} screenshot`}
            className="preview-screenshot"
          />
        </div>
      </div>

      <div className="project-body">
        <div className="project-header">
          <div>
            <p className="project-eyebrow">{project.focus}</p>
            <h3>{project.title}</h3>
          </div>
          <a
            href={project.repo}
            target="_blank"
            rel="noreferrer"
            className="repo-link"
            onClick={(e) => e.stopPropagation()}
          >
            GitHub
          </a>
        </div>

        <p className="project-description">{project.description}</p>

        <div className="tech-list">
          {project.tech.map((item) => (
            <TechPill key={item} label={item} tone={project.techTone[item] || "default"} />
          ))}
        </div>
      </div>
    </article>
  );
}

// ============================================================
// PROJECT MODAL (POPUP) — Öppnas när man klickar på ett kort.
// Visar 5 bildslots med text under varje, samt knappar för
// "Visit site" och "View on GitHub". Stängs med X, ESC eller
// klick utanför.
// ============================================================
function ProjectModal({ project, onClose }) {
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

// ============================================================
// HUVUDKOMPONENT (App) — Hanterar vilken sida som visas,
// söket på Portfolio-sidan och vilken projekt-popup som är öppen.
// ============================================================
export default function App() {
  // --- State: nuvarande sida, sökterm och vald projekt-popup ---
  const [page, setPage] = useState("home");
  const [search, setSearch] = useState("");
  const [selectedProject, setSelectedProject] = useState(null);

  // ----------------------------------------------------------
  // SKILLS-DATA — Listan av skills som visas på Home-sidan.
  // Lägg till/ta bort skills här.
  // ----------------------------------------------------------
  const skills = [
    { name: "HTML5", icon: <HtmlIcon /> },
    { name: "CSS3", icon: <CssIcon /> },
    { name: "SCSS", icon: <ScssIcon /> },
    { name: "JavaScript", icon: <JsIcon /> },
    { name: "Figma", icon: <FigmaIcon /> },
    { name: "React", icon: <ReactIcon /> },
    { name: "GitHub", icon: <GitHubIcon /> },
    { name: "VS Code", icon: <VSCodeIcon /> },
  ];

  // ----------------------------------------------------------
  // PROJEKT-DATA — Här ligger ALLA dina projekt.
  // Varje projekt har:
  //   id          = unikt nummer
  //   title       = titel som visas på kortet och i popup
  //   description = kort beskrivning
  //   type        = "AI-assisted" eller "Handcoded" (pill ovanpå bilden)
  //   focus       = liten grön text ovanför titeln
  //   repo        = GitHub-länk (GitHub-knappen)
  //   liveSite    = länk till live-sidan (lämna "" om ingen finns)
  //   screenshot  = bilden som visas på själva kortet
  //   tech        = vilka tekniker som visas som pills
  //   techTone    = färg på varje tech-pill (matchar nycklarna i tech)
  //   images      = 5 bilder + texter som visas inuti popupen
  //                 { src: importerad bild eller null, caption: "text under bilden" }
  // ----------------------------------------------------------
  const projects = [
    {
      id: 1,
      title: "Translate Website",
      description:
        "A translate app that you can translate text to different languages. It has a clean UI, responsive design and uses a public translation API for real-time results.",
      type: "AI-assisted",
      focus: "React, CSS and JavaScript, API integration",
      repo: "https://github.com/isakf999-bot/Translate.app",
      liveSite: "",
      screenshot: translateImage,
      tech: ["React", "CSS3", "JavaScript", "HTML5"],
      techTone: {
        React: "react",
        CSS3: "css",
        JavaScript: "js",
        HTML5: "html",
      },
      images: [
        { src: translateImage, caption: "Main page of the translate app." },
        { src: null, caption: "" },
        { src: null, caption: "" },
        { src: null, caption: "" },
        { src: null, caption: "" },
        { src: null, caption: "" },
      ],
    },
    {
      id: 2,
      title: "Github Profile Searcher",
      description:
        "A GitHub profile searcher built with React that allows users to search for GitHub profiles and view their details, including repositories, followers and more. It features a clean, responsive design and integrates with the GitHub API for real-time data.",
      type: "AI-assisted",
      focus: "Making clean  responsivegithub profile searcher with react.",
      repo: "https://github.com/isakf999-bot/GithubProfile.search",
      liveSite: "",
      screenshot: githubImage,
      tech: ["React", "CSS3", "JavaScript", "HTML5"],
      techTone: {
        React: "react",
        CSS3: "css",
        JavaScript: "js",
        HTML5: "html",
      },
      images: [
        { src: githubImage, caption: "Main search view for GitHub profiles." },
        { src: null, caption: "" },
        { src: null, caption: "" },
        { src: null, caption: "" },
        { src: null, caption: "" },
      ],
    },
    {
      id: 3,
      title: "Guess the word game",
      description:
        "A simple word guessing game built with AI-assisted JavaScript, featuring a timer, score system and dynamic word generation for an engaging user experience.",
      type: "AI-assisted",
      focus: "Javascript game development, timer countdown, score system, working with Ai to generate dynamic content and working more effectively.",
      repo: "https://github.com/isakf999-bot/GuessWord.game",
      liveSite: "",
      screenshot: guesswordImage,
      tech: ["React", "CSS3", "JavaScript", "HTML5"],
      techTone: {
        React: "react",
        CSS3: "css",
        JavaScript: "js",
        HTML5: "html",
      },
      images: [
        { src: guesswordImage, caption: "Main view of the Guess the Word game." },
        { src: null, caption: "" },
        { src: null, caption: "" },
        { src: null, caption: "" },
        { src: null, caption: "" },
      ],
    },
    {
      id: 4,
      title: "Project planner website for react and html",
      description:
        "A project planner website. With UI from react. Adding files just like in vscode. leaving comments and building stucture for projects. You can choose fonts and find colors in an color palette with the # number for the color in vscode.",
      type: "AI-assisted",
      focus: "React, UI design and working effectively with AI.",
      repo: "https://github.com/isakf999-bot/ProjectPlanner.app",
      liveSite: "",
      screenshot: plannerImage,
      tech: ["React", "JavaScript", "CSS3", "HTML5"],
      techTone: {
        React: "react",
        JavaScript: "js",
        HTML5: "html",
        CSS3: "css",
      },
      images: [
        { src: plannerImage, caption: "Login page." },
        { src: planner2Image, caption: "Project view." },
        { src: planner3Image, caption: "Choosing project." },
        { src: planner4Image, caption: "Picking project name." },
        { src: planner5Image, caption: "Picking project framework." },
        { src: planner6Image, caption: "Planning your project." },
      ],
    },
    {
      id: 5,
      title: "AI UI Concept Board",
      description:
        "A React-based concept page with modular cards, accent colors and a clean information architecture inspired by design systems.",
      type: "AI-assisted",
      focus: "Design systems and layout",
      repo: "https://github.com/",
      liveSite: "",
      screenshot: heroImage,
      tech: ["React", "Figma", "GitHub", "JavaScript"],
      techTone: {
        React: "react",
        Figma: "figma",
        GitHub: "git",
        JavaScript: "js",
      },
      images: [
        { src: heroImage, caption: "Concept board overview." },
        { src: null, caption: "" },
        { src: null, caption: "" },
        { src: null, caption: "" },
        { src: null, caption: "" },
      ],
    },
    {
      id: 6,
      title: "AI Workflow Demo",
      description:
        "A product-focused dashboard prototype with polished components, responsive behavior and a clear visual story.",
      type: "AI-assisted",
      focus: "Dashboard and product flows",
      repo: "https://github.com/",
      liveSite: "",
      screenshot: heroImage,
      tech: ["React", "JavaScript", "GitHub", "Figma"],
      techTone: {
        React: "react",
        JavaScript: "js",
        GitHub: "git",
        Figma: "figma",
      },
      images: [
        { src: heroImage, caption: "Dashboard prototype overview." },
        { src: null, caption: "" },
        { src: null, caption: "" },
        { src: null, caption: "" },
        { src: null, caption: "" },
      ],
    },
    {
      id: 7,
      title: "Handcoded UI Concept",
      description:
        "A modern, handcoded UI concept with a focus on clean code, responsive design and a strong visual hierarchy.",
      type: "Handcoded",
      focus: "Clean code and design",
      repo: "https://github.com/",
      liveSite: "",
      screenshot: heroImage,
      tech: ["HTML5", "CSS3", "SCSS", "JavaScript"],
      techTone: {
        HTML5: "html",
        CSS3: "css",
        SCSS: "scss",
        JavaScript: "js",
      },
      images: [
        { src: heroImage, caption: "UI concept overview." },
        { src: null, caption: "" },
        { src: null, caption: "" },
        { src: null, caption: "" },
        { src: null, caption: "" },
      ],
    },
    {
      id: 8,
      title: "Handcoded Dashboard",
      description:
        "A responsive dashboard layout with handcoded components, clear information hierarchy and a focus on usability.",
      type: "Handcoded",
      focus: "Dashboard design and code",
      repo: "https://github.com/",
      liveSite: "",
      screenshot: heroImage,
      tech: ["HTML5", "CSS3", "SCSS", "JavaScript"],
      techTone: {
        HTML5: "html",
        CSS3: "css",
        SCSS: "scss",
        JavaScript: "js",
      },
      images: [
        { src: heroImage, caption: "Dashboard overview." },
        { src: null, caption: "" },
        { src: null, caption: "" },
        { src: null, caption: "" },
        { src: null, caption: "" },
      ],
    },
    {
      id: 9,
      title: "Typing game",
      description:
        "A simple typing game built with handcoded JavaScript, featuring a timer, score system and dynamic word generation for an engaging user experience.",
      type: "Handcoded",
      focus: "Javascript game development, timer countdown, score system",
      repo: "https://github.com/isakf999-bot/TypingGame.JS",
      liveSite: "",
      screenshot: typinggameImage,
      tech: ["HTML5", "CSS3", "JavaScript"],
      techTone: {
        HTML5: "html",
        CSS3: "css",
        JavaScript: "js",
      },
      images: [
        { src: typinggameImage, caption: "Main view of the typing game." },
        { src: null, caption: "" },
        { src: null, caption: "" },
        { src: null, caption: "" },
        { src: null, caption: "" },
      ],
    },
    {
      id: 10,
      title: "Genesis website",
      description:
        "A personal photo portfolio site built from scratch with handcoded HTML and CSS usingg figma for design inspiration.",
      type: "Handcoded",
      focus: "Designing clean websites with handcoded HTMLand CSS focusing on grid system.",
      repo: "https://github.com/isakf999-bot/Genesis.Assignment",
      liveSite: "https://genesiswebsiteisak.netlify.app/",
      screenshot: genesisImage,
      tech: ["HTML5", "CSS3", "SCSS", "Figma"],
      techTone: {
        HTML5: "html",
        CSS3: "css",
        SCSS: "scss",
        Figma: "figma",
      },
      images: [
        { src: genesisImage, caption: "Landing page of the Genesis site." },
        { src: null, caption: "" },
        { src: null, caption: "" },
        { src: null, caption: "" },
        { src: null, caption: "" },
      ],
    },
    {
      id: 11,
      title: "Booking website",
      description:
        "A simple booking website concept built with handcoded HTML and CSS, featuring a clean layout, responsive design. ",
      type: "Handcoded",
      focus: "Designing clean websites with handcoded HTML and CSS focusing on design.",
      repo: "https://github.com/isakf999-bot/Website.Test",
      liveSite: "",
      screenshot: bookingImage,
      tech: ["CSS3", "SCSS", "Figma", "HTML5"],
      techTone: {
        HTML5: "html",
        CSS3: "css",
        SCSS: "scss",
        Figma: "figma",
      },
      images: [
        { src: bookingImage, caption: "Landing page of the booking site." },
        { src: null, caption: "" },
        { src: null, caption: "" },
        { src: null, caption: "" },
        { src: null, caption: "" },
      ],
    }

  ];

  // ----------------------------------------------------------
  // SÖKFILTER — Filtrerar projekt på Portfolio-sidan när man
  // skriver i sökrutan. Matchar titel, beskrivning, tech och typ.
  // ----------------------------------------------------------
  const filteredProjects = projects.filter((project) => {
    const query = search.toLowerCase().trim();
    const normalizedType = project.type.toLowerCase().replace(/[-\s]+/g, " ");

    return (
      query === "" ||
      project.title.toLowerCase().includes(query) ||
      project.description.toLowerCase().includes(query) ||
      project.tech.some((tech) => tech.toLowerCase().includes(query)) ||
      normalizedType.includes(query)
    );
  });

  // ==========================================================
  // RENDER — Allt som visas på sidan
  // ==========================================================
  return (
    <div className="site-shell">

      {/* ====== HEADER (toppmeny + brand) ====== */}
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

      {/* ====== MAIN — Innehållet för aktuell sida ====== */}
      <main className="content">

        {/* ------ HOME-sida: Hero-sektion (rubrik + knappar) ------ */}
        {page === "home" && (
          <section className="hero-section">
            <div className="hero-copy">
              <p className="eyebrow">Front End Developer</p>
              <h1>Hello, I'm Isak</h1>
              <h2> And i am Front End Developer</h2>
              <p className="hero-description">
                I create modern, clean and responsive web experiences with a strong focus on design, usability and performance.
              </p>

              <div className="hero-actions">
                <button className="primary-btn" onClick={() => setPage("portfolio")}>
                  View projects
                </button>
                <button className="secondary-btn" onClick={() => setPage("experience")}>
                  View experience
                </button>
              </div>
            </div>
          </section>
        )}

        {/* ------ HOME-sida: Skills + About me ------ */}
        {page === "home" && (
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
        )}

        {/* ------ EXPERIENCE-sida: Utbildning + fokus ------ */}
        {page === "experience" && (
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
            </div>
          </section>
        )}

        {/* ------ CONTACT-sida: Tre kort (info, hjälp, detaljer) ------ */}
        {page === "contact" && (
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
        )}

        {/* ------ PORTFOLIO-sida: Sökruta + grid med projektkort ------ */}
        {page === "portfolio" && (
          <section className="portfolio-section">
            <div className="section-title-row">
              <div>
                <p className="eyebrow">Portfolio</p>
                <h2>Projects with handcoded and AI-assisted workflows</h2>
              </div>
            </div>

            <div className="portfolio-tools">
              <p className="portfolio-note">
                Search by project name or technology to filter the cards below.
              </p>
              <input
                className="search-input"
                placeholder="Search for JavaScript, React, HTML, CSS or project"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            <div className="project-grid">
              {filteredProjects.length > 0 ? (
                filteredProjects.map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    onOpen={setSelectedProject}
                  />
                ))
              ) : (
                <div className="empty-state">
                  <p>No projects match your search right now.</p>
                </div>
              )}
            </div>
          </section>
        )}
      </main>

      {/* ====== PROJEKT-POPUP — Renderas alltid, visas bara när ett projekt är valt ====== */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />

      {/* ====== FOOTER ====== */}
      <footer className="site-footer">
        <p>© 2026 Isak Forsberg. </p>
      </footer>
    </div>
  );
}
