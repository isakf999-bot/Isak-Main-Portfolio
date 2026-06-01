// ============================================================
// SVG-IKONER — Alla små ikoner som används i appen.
//
//   Tech-ikoner   : HTML, CSS, SCSS, JS, Figma, React, GitHub, VS Code
//                   (visas i skill-badges på Home + tech-pills i kort)
//   Kontakt-ikoner: telefon, mail, Instagram, Facebook, Twitter/X
//                   (visas i kontaktkortet på Contact-sidan)
//
// Lägg till nya ikoner här om du vill ha fler tekniker eller
// kontaktsätt, och exportera dem så de kan importeras där de behövs.
// ============================================================

// --- HTML-ikon ---
export function HtmlIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" style={{ color: "#E34F26" }}>
      <path fill="currentColor" d="M4 2l1.8 18.2L12 22l6.2-1.8L20 2H4zm13.1 5.6H9.1l.2 2.1h7.6l-.6 6.4-4.3 1.2-4.3-1.2-.3-2.8h2.1l.1 1.4 2.4.7 2.4-.7.2-2.5H7.7l-.6-6.3h9.8l-.2 2.1z" />
    </svg>
  );
}

// --- CSS-ikon ---
export function CssIcon() {
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
export function ScssIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" style={{ color: "#CF649A" }}>
      <rect x="2" y="2" width="20" height="20" rx="5" fill="currentColor" />
      <text x="12" y="16" textAnchor="middle" fontSize="8" fontWeight="800" fontFamily="Arial, sans-serif" fill="#fff">SCSS</text>
    </svg>
  );
}

// --- JavaScript-ikon ---
export function JsIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" style={{ color: "#F7DF1E" }}>
      <rect x="2" y="2" width="20" height="20" rx="4" fill="currentColor" />
      <text x="12" y="15" textAnchor="middle" fontSize="8" fontWeight="800" fontFamily="Arial, sans-serif" fill="#000">JS</text>
    </svg>
  );
}

// --- Figma-ikon ---
export function FigmaIcon() {
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
export function ReactIcon() {
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
export function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" style={{ color: "#FFFFFF" }}>
      <path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12c0 4.4 2.9 8.1 6.8 9.4.5.1.7-.2.7-.5v-1.8c-2.8.6-3.4-1.3-3.4-1.3-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.6 2.4 1.1 3 .8.1-.6.4-1.1.7-1.3-2.2-.2-4.5-1.1-4.5-4.8 0-1.1.4-2 1-2.7-.1-.2-.4-1.1.1-2.3 0 0 .8-.3 2.7 1 .8-.2 1.6-.3 2.5-.3s1.7.1 2.5.3c1.9-1.3 2.7-1 2.7-1 .5 1.2.2 2.1.1 2.3.6.7 1 1.6 1 2.7 0 3.7-2.3 4.6-4.5 4.8.4.3.7.9.7 1.9v2.8c0 .3.2.6.7.5 3.9-1.3 6.8-5 6.8-9.4C22 6.5 17.5 2 12 2z" />
    </svg>
  );
}

// --- VS Code-ikon ---
export function VSCodeIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" style={{ color: "#007ACC" }}>
      <path fill="currentColor" d="M16.6 2l-7.5 6.4L5.1 5.1 2 6.5v11l3.1 1.4 4-3.3 7.5 6.4 3.4-1.4V3.4L16.6 2zm0 3.4v13.2l-6.2-6.6 6.2-6.6zM5.1 8.9l2.7 2.4-2.7 2.4V8.9z" />
    </svg>
  );
}

// --- Telefon-ikon ---
export function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" role="img" aria-label="Phone">
      <path fill="currentColor" d="M6.6 2.5c.5-.2 1.1 0 1.4.5l1.1 2.2c.2.4.2.9 0 1.3l-1 1.5c-.2.3-.2.7-.1 1 .5 1.1 1.3 2.2 2.3 3.1 1 1 2.1 1.8 3.3 2.3.3.1.7.1 1-.1l1.5-1c.4-.2.9-.2 1.3 0l2.2 1.1c.5.3.7.9.5 1.4l-.8 1.7c-.3.7-.9 1.2-1.7 1.2-3.3 0-6.4-1.3-8.8-3.7-2.4-2.4-3.7-5.5-3.7-8.8 0-.8.4-1.4 1.1-1.7l1.7-.8z" />
    </svg>
  );
}

// --- E-post-ikon ---
export function EmailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" role="img" aria-label="Email">
      <path fill="currentColor" d="M4 6.5c-.8 0-1.5.7-1.5 1.5v8c0 .8.7 1.5 1.5 1.5h16c.8 0 1.5-.7 1.5-1.5V8c0-.8-.7-1.5-1.5-1.5H4Zm0 1.5h16l-7.2 5.1c-.4.3-.9.3-1.3 0L4 8Z" />
    </svg>
  );
}

// --- Instagram-ikon ---
export function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" role="img" aria-label="Instagram">
      <rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="17.5" cy="6.5" r="1.1" fill="currentColor" />
    </svg>
  );
}

// --- Facebook-ikon ---
export function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" role="img" aria-label="Facebook">
      <path fill="currentColor" d="M13.5 20v-6.5h2.3l.3-2.7h-2.6V9.6c0-.8.2-1.3 1.3-1.3h1.4V5.8c-.2 0-1.1-.1-2.1-.1-2.1 0-3.5 1.3-3.5 3.7v2.1H8v2.7h2.3V20h3.2Z" />
    </svg>
  );
}

// --- Twitter/X-ikon ---
export function TwitterIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" role="img" aria-label="Twitter">
      <path fill="currentColor" d="M18.9 4.5h2.8l-6.2 7.1 7.3 8.4H16l-4.5-5.9-5.1 5.9H3.6l6.6-7.5L3.5 4.5h6.6l4.1 5.4 4.7-5.4Zm-1 14.1h1.5L7.2 5.8H5.5l12.3 12.8Z" />
    </svg>
  );
}
