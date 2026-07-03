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

// --- Logotyp-mark ("IF") — geometriskt monogram i navbaren/favicon ---
export function LogoMark() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M5 5 L5 19 M12 5 L12 19 M12 5 L19 5 M12 11.5 L17.5 11.5"
        fill="none"
        stroke="#04121d"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// --- HTML-ikon --- (W3C-skölden, tvåtonad + "5")
export function HtmlIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#E44D26" d="M4 2l1.8 18.2L12 22l6.2-1.8L20 2H4z" />
      <path fill="#F16529" d="M12 2v20l6.2-1.8L20 2H12z" />
      <text
        x="12"
        y="16.3"
        textAnchor="middle"
        fontSize="9"
        fontWeight="800"
        fontFamily="Arial, sans-serif"
        fill="#ffffff"
      >
        5
      </text>
    </svg>
  );
}

// --- CSS-ikon --- (W3C-skölden, tvåtonad + "3")
export function CssIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#1572B6" d="M4 2l1.8 18.2L12 22l6.2-1.8L20 2H4z" />
      <path fill="#33A9DC" d="M12 2v20l6.2-1.8L20 2H12z" />
      <text
        x="12"
        y="16.3"
        textAnchor="middle"
        fontSize="9"
        fontWeight="800"
        fontFamily="Arial, sans-serif"
        fill="#ffffff"
      >
        3
      </text>
    </svg>
  );
}

// --- SCSS-ikon --- (rosa ruta + skript-logotypen "Sass")
export function ScssIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" style={{ color: "#CD6799" }}>
      <rect x="2" y="2" width="20" height="20" rx="5" fill="currentColor" />
      <text
        x="12"
        y="15.5"
        textAnchor="middle"
        fontSize="9"
        fontWeight="700"
        fontStyle="italic"
        fontFamily="'Brush Script MT', 'Segoe Script', cursive"
        fill="#ffffff"
        textLength="15"
        lengthAdjust="spacingAndGlyphs"
      >
        Sass
      </text>
    </svg>
  );
}

// --- JavaScript-ikon --- (tvåtonad sköld + handritade J/S-former) ---
export function JsIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#C9A227" d="M4 2l1.8 18.2L12 22l6.2-1.8L20 2H4z" />
      <path fill="#F5DB3E" d="M12 2v20l6.2-1.8L20 2H12z" />
      <path
        fill="none"
        stroke="#A6841A"
        strokeWidth="0.7"
        opacity="0.55"
        d="M4.5 2.6l1.7 17.2L12 21.2l5.8-1.4L19.5 2.6H4.5z"
      />
      <path
        fill="#E9EEF1"
        d="M9.3 6.5 L11.4 6.5 L11.4 13.5 C11.4 15.5 10.3 16.3 8.7 16.3 C7.6 16.3 6.8 15.9 6.2 15.3 L7.6 13.6 C7.9 13.9 8.2 14.1 8.6 14.1 C9.1 14.1 9.3 13.8 9.3 13.1 Z"
      />
      <path
        fill="#ffffff"
        d="M12.7 6.5 L16.7 6.5 L16.7 8.7 L14.5 8.7 L14.5 9.8 L16.7 9.8 L16.7 16.3 L12.5 16.3 L12.5 14 L14.8 14 L14.8 12.9 L12.5 12.9 Z"
      />
    </svg>
  );
}

// --- TypeScript-ikon --- (blå squircle + "TS")
export function TsIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" style={{ color: "#3178C6" }}>
      <rect x="1.5" y="1.5" width="21" height="21" rx="6.5" fill="currentColor" />
      <text
        x="12"
        y="16"
        textAnchor="middle"
        fontSize="9.5"
        fontWeight="800"
        fontFamily="Arial, sans-serif"
        fill="#ffffff"
      >
        TS
      </text>
    </svg>
  );
}

// --- Figma-ikon --- (officiella logotypens 5 former, skalade in i en 24x24-ruta)
export function FigmaIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <g transform="translate(6,3) scale(0.315789)">
        <path fill="#1ABCFE" d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" />
        <path fill="#0ACF83" d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" />
        <path fill="#FF7262" d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" />
        <path fill="#F24E1E" d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" />
        <path fill="#A259FF" d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" />
      </g>
    </svg>
  );
}

// --- Utbildning-ikon (studentmössa) ---
export function GraduationCapIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" role="img" aria-label="Education">
      <path d="M12 4L2 9l10 5 10-5-10-5Z" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      <path d="M6 11.5V16c0 1.5 2.7 3 6 3s6-1.5 6-3v-4.5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M21 9v6" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

// --- Arbete-ikon (portfölj) ---
export function BriefcaseIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" role="img" aria-label="Work">
      <rect x="3" y="7.5" width="18" height="12" rx="2.2" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <path d="M8.5 7.5V6a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v1.5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3 12.5h18" stroke="currentColor" strokeWidth="1.7" />
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
      <path
        fill="currentColor"
        d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z"
      />
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
