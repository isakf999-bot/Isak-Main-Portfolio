// ============================================================
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
// ============================================================
import heroImage from "../assets/hero.png";
import translateImage from "../assets/translate.png";
import typinggameImage from "../assets/typinggame.png";
import genesisImage from "../assets/genesis.png";
import bookingImage from "../assets/booking.png";
import githubImage from "../assets/github.png";
import guesswordImage from "../assets/guessword.png";
import plannerImage from "../assets/planner.png";
import planner2Image from "../assets/planner2.png";
import planner3Image from "../assets/planner3.png";
import planner4Image from "../assets/planner4.png";
import planner5Image from "../assets/planner5.png";
import planner6Image from "../assets/planner6.png";

export const projects = [
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
  },
];
