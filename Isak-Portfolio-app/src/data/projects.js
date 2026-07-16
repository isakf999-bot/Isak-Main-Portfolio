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
//   images      = bilder + texter som visas inuti popupen
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
import landingpage1Image from "../assets/landingpage-1.png";
import landingpage2Image from "../assets/landingpage-2.png";
import landingpage3Image from "../assets/landingpage-3.png";
import landingpage4Image from "../assets/landingpage-4.png";
import landingpage5Image from "../assets/landingpage-5.png";
import landingpage6Image from "../assets/landingpage-6.png";
import translate1Image from "../assets/translate-1.png";
import translate2Image from "../assets/translate-2.png";
import translate3Image from "../assets/translate-3.png";
import github1Image from "../assets/github-1.png";
import github2Image from "../assets/github-2.png";
import github3Image from "../assets/github-3.png";
import guessword1Image from "../assets/guessword-1.png";
import planner1Image from "../assets/planner-1.png";
import planner2Image from "../assets/planner-2.png";
import planner3Image from "../assets/planner-3.png";
import planner4Image from "../assets/planner-4.png";
import planner5Image from "../assets/planner-5.png";
import planner6Image from "../assets/planner-6.png";
import typinggame1Image from "../assets/typinggame-1.png";
import typinggame2Image from "../assets/typinggame-2.png";
import genesis1Image from "../assets/genesis-1.png";
import genesis2Image from "../assets/genesis-2.png";
import genesis3Image from "../assets/genesis-3.png";
import booking1Image from "../assets/booking-1.png";
import booking2Image from "../assets/booking-2.png";
import booking3Image from "../assets/booking-3.png";

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
    tech: ["React", "TypeScript", "Tailwind", "CSS3", "HTML5"],
    techTone: {
      React: "react",
      TypeScript: "ts",
      Tailwind: "tailwind",
      CSS3: "css",
      HTML5: "html",
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
    id: 13,
    title: "Landing Page for a SaaS Analytics Platform",
    description:
      "A dark, conversion-focused landing page for Nebula, a fictional real-time analytics platform. Built with a hover dropdown in the navbar, a live product dashboard mockup, a bento feature grid, testimonials and a pricing section with a monthly/annual toggle.",
    type: "AI-assisted",
    focus: "HTML, CSS and TypeScript, SaaS marketing page design",
    repo: "https://github.com/isakf999-bot/Landingpage.Portfolio",
    liveSite: "https://landingpage-portfolio-orpin.vercel.app/",
    screenshot: landingpage1Image,
    tech: ["TypeScript", "HTML5", "CSS3"],
    techTone: {
      TypeScript: "ts",
      HTML5: "html",
      CSS3: "css",
    },
    images: [
      { src: landingpage1Image, caption: "Hero section with the main value proposition and call to action." },
      { src: landingpage2Image, caption: "Product dropdown opening straight from the navbar on hover." },
      { src: landingpage3Image, caption: "Live dashboard mockup with metrics, charts and trusted-by logos." },
      { src: landingpage4Image, caption: "Bento feature grid covering forecasting, anomalies and pipelines." },
      { src: landingpage5Image, caption: "Testimonials from data teams as social proof." },
      { src: landingpage6Image, caption: "Pricing with three tiers and a monthly/annual toggle." },
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
    screenshot: translate1Image,
    tech: ["React", "CSS3", "JavaScript", "HTML5"],
    techTone: {
      React: "react",
      CSS3: "css",
      JavaScript: "js",
      HTML5: "html",
    },
    images: [
      { src: translate1Image, caption: "Translating English to French in real time." },
      { src: translate2Image, caption: "Swap languages instantly with the toggle button." },
      { src: translate3Image, caption: "Translating to Spanish with instant results." },
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
    screenshot: github1Image,
    tech: ["React", "CSS3", "JavaScript", "HTML5"],
    techTone: {
      React: "react",
      CSS3: "css",
      JavaScript: "js",
      HTML5: "html",
    },
    images: [
      { src: github1Image, caption: "Landing page with search bar and feature highlights." },
      { src: github2Image, caption: "Profile view showing followers, repos and location." },
      { src: github3Image, caption: "Repository list with language, stars and forks." },
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
    screenshot: guessword1Image,
    tech: ["React", "CSS3", "JavaScript", "HTML5"],
    techTone: {
      React: "react",
      CSS3: "css",
      JavaScript: "js",
      HTML5: "html",
    },
    images: [
      { src: guessword1Image, caption: "Unscramble the letters and fill in your guess one letter at a time." },
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
    screenshot: planner1Image,
    tech: ["React", "JavaScript", "CSS3", "HTML5"],
    techTone: {
      React: "react",
      JavaScript: "js",
      HTML5: "html",
      CSS3: "css",
    },
    images: [
      { src: planner1Image, caption: "Login screen for the Plannr app." },
      { src: planner2Image, caption: "Dashboard once logged in, ready to create a new project." },
      { src: planner3Image, caption: "Choosing between a framework project or a basic HTML/CSS/JS project." },
      { src: planner4Image, caption: "CLI-style wizard for picking framework, variant and project type." },
      { src: planner5Image, caption: "Project workspace with file tree, notes and color palette." },
      { src: planner6Image, caption: "Picking a Google Font for the project with live preview." },
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
    screenshot: typinggame1Image,
    tech: ["HTML5", "CSS3", "JavaScript"],
    techTone: {
      HTML5: "html",
      CSS3: "css",
      JavaScript: "js",
    },
    images: [
      { src: typinggame1Image, caption: "Prompted to type a word before the timer runs out." },
      { src: typinggame2Image, caption: "Typing the word live in the input field." },
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
    screenshot: genesis1Image,
    tech: ["HTML5", "CSS3", "SCSS", "Figma"],
    techTone: {
      HTML5: "html",
      CSS3: "css",
      SCSS: "scss",
      Figma: "figma",
    },
    images: [
      { src: genesis1Image, caption: "Landing page hero with intro and featured projects." },
      { src: genesis2Image, caption: "Project grid showcasing design work." },
      { src: genesis3Image, caption: "Contact section with a simple form." },
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
    screenshot: booking1Image,
    tech: ["CSS3", "SCSS", "Figma", "HTML5"],
    techTone: {
      HTML5: "html",
      CSS3: "css",
      SCSS: "scss",
      Figma: "figma",
    },
    images: [
      { src: booking1Image, caption: "Hero section with search bar for travel destinations." },
      { src: booking2Image, caption: "Why choose us section with feature highlights." },
      { src: booking3Image, caption: "Booking steps and featured property listings." },
      { src: null, caption: "" },
      { src: null, caption: "" },
    ],
  },
];
