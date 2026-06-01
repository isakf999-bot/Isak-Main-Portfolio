// ============================================================
// APP — Roten av sidan. Hanterar bara två saker:
//   page            = vilken sida som visas (home/experience/portfolio/contact)
//   selectedProject = vilket projekt som är öppet i popupen (eller null)
//
// Allt innehåll ligger i egna komponenter (components/) och sidor
// (pages/). Layouten är: Navbar -> aktuell sida -> popup -> Footer.
// ============================================================
import { useState } from "react";
import "./App.css";

import Navbar from "./components/nav";
import Footer from "./components/footer";
import ProjectModal from "./components/modal";

import Home from "./pages/home";
import Experience from "./pages/experience";
import Portfolio from "./pages/portfolio";
import Contact from "./pages/contact";

export default function App() {
  const [page, setPage] = useState("home");
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="site-shell">
      {/* ====== HEADER (toppmeny + brand) ====== */}
      <Navbar page={page} setPage={setPage} />

      {/* ====== MAIN — Innehållet för aktuell sida ====== */}
      <main className="content">
        {page === "home" && <Home setPage={setPage} />}
        {page === "experience" && <Experience />}
        {page === "contact" && <Contact setPage={setPage} />}
        {page === "portfolio" && <Portfolio onOpen={setSelectedProject} />}
      </main>

      {/* ====== PROJEKT-POPUP — Visas bara när ett projekt är valt ====== */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />

      {/* ====== FOOTER ====== */}
      <Footer />
    </div>
  );
}
