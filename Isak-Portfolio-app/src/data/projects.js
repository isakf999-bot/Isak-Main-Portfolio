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
import netflixImage from "../assets/netflix.png";
import netflixDetailImage from "../assets/netflix-detail.png";
import netflixPlayerImage from "../assets/netflix-player.png";
import netflixSearchImage from "../assets/netflix-search.png";
import netflixLightImage from "../assets/netflix-light.png";
import ecommerceHomeImage from "../assets/ecommerce-home.png";
import ecommerceClothesImage from "../assets/ecommerce-clothes.png";
import ecommerceCartImage from "../assets/ecommerce-cart.png";
import ecommerceCheckoutImage from "../assets/ecommerce-checkout.png";
import ecommercePaymentImage from "../assets/ecommerce-payment.png";
import ecommerceConfirmedImage from "../assets/ecommerce-confirmed.png";
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
    id: 0,
    title: "Netflix Inspired Trailer website",
    description:
      "A Netflix-inspired streaming platform concept called LUMA, with a full-width featured-title hero banner, a trending movies carousel and a clean dark UI built to feel like a real streaming service.",
    type: "AI-assisted",
    focus: "React, TypeScript and CSS, streaming platform UI/UX",
    repo: "https://github.com/isakf999-bot/Netflix-Inspired-website",
    liveSite: "https://netflix-inspired-website.vercel.app/",
    screenshot: netflixImage,
    tech: ["React", "TypeScript", "JavaScript", "HTML5", "CSS3"],
    techTone: {
      React: "react",
      TypeScript: "ts",
      JavaScript: "js",
      HTML5: "html",
      CSS3: "css",
    },
    images: [
      { src: netflixImage, caption: "LUMA homepage with featured trailer and trending row." },
      { src: netflixDetailImage, caption: "Movie detail view with synopsis, cast and genres." },
      { src: netflixPlayerImage, caption: "Trailer playing inline, without leaving the page." },
      { src: netflixSearchImage, caption: "Live search with instant results." },
      { src: netflixLightImage, caption: "Light mode, toggled from the same header button." },
    ],
  },
  {
    id: 12,
    title: "E-Commerce Clothing",
    description:
      "A modern e-commerce clothing store with a full shopping flow: browsing by category, product pages with sizing, a live cart drawer and a multi-step checkout with shipping, payment and review.",
    type: "AI-assisted",
    focus: "React, TypeScript and Tailwind CSS, full shopping cart and checkout flow",
    repo: "https://github.com/isakf999-bot/E-Commerce-Clothing",
    liveSite: "https://e-commerce-clothing-sable.vercel.app/",
    screenshot: ecommerceHomeImage,
    tech: ["React", "TypeScript", "Tailwind"],
    techTone: {
      React: "react",
      TypeScript: "ts",
      Tailwind: "tailwind",
    },
    images: [
      { src: ecommerceHomeImage, caption: "Homepage hero with the new season's essentials." },
      { src: ecommerceClothesImage, caption: "Category browsing with filters and live pricing." },
      { src: ecommerceCartImage, caption: "Live cart drawer with subtotal and free-shipping progress." },
      { src: ecommerceCheckoutImage, caption: "Checkout step 1: shipping details and order summary." },
      { src: ecommercePaymentImage, caption: "Checkout step 2: payment (safe demo card, no real charges)." },
      { src: ecommerceConfirmedImage, caption: "Order confirmed, with order number and shipping summary." },
    ],
  },
  {
    id: 1,
    title: "Translate Website",
    description:
      "A translate app that you can translate text to different languages. It has a clean UI, responsive design and uses a public translation API for real-time results.",
    type: "AI-assisted",
    focus: "React, CSS and JavaScript, API integration",
    repo: "https://github.com/isakf999-bot/Translate.app",
    liveSite: "https://translate-app-l4e1.vercel.app/",
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
    liveSite: "https://github-profile-search-cyan.vercel.app/",
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
    liveSite: "https://guess-word-game-three.vercel.app/",
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
    liveSite: "https://project-planner-app-gamma.vercel.app/",
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
    id: 9,
    title: "Typing game",
    description:
      "A simple typing game built with handcoded JavaScript, featuring a timer, score system and dynamic word generation for an engaging user experience.",
    type: "Handcoded",
    focus: "Javascript game development, timer countdown, score system",
    repo: "https://github.com/isakf999-bot/TypingGame.JS",
    liveSite: "https://typing-game-js.vercel.app/",
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
    liveSite: "https://website-test-chi-blush.vercel.app/",
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
