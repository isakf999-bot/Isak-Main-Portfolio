// ============================================================
// SKILLS-DATA — Listan av skills som visas på Home-sidan.
// Lägg till/ta bort skills här. Varje skill har ett namn och
// en ikon (importeras från components/icons.jsx).
// ============================================================
import {
  HtmlIcon,
  CssIcon,
  ScssIcon,
  JsIcon,
  TsIcon,
  FigmaIcon,
  ReactIcon,
  GitHubIcon,
  VSCodeIcon,
} from "../components/icons";

export const skills = [
  { name: "HTML5", icon: <HtmlIcon /> },
  { name: "CSS3", icon: <CssIcon /> },
  { name: "SCSS", icon: <ScssIcon /> },
  { name: "JavaScript", icon: <JsIcon /> },
  { name: "TypeScript", icon: <TsIcon /> },
  { name: "Figma", icon: <FigmaIcon /> },
  { name: "React", icon: <ReactIcon /> },
  { name: "GitHub", icon: <GitHubIcon /> },
  { name: "VS Code", icon: <VSCodeIcon /> },
];
