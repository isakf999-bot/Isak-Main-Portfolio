// ============================================================
// PORTFOLIO-SIDA — Sökruta + grid med projektkort.
// Håller sitt eget sök-state och filtrerar projekten på
// titel, beskrivning, tech och typ.
// Tar emot onOpen för att öppna projekt-popupen (i App).
// ============================================================
import { useState } from "react";
import ProjectCard from "../components/card";
import { projects } from "../data/projects";
import "./portfolio.css";

export default function Portfolio({ onOpen }) {
  // --- Sökterm för att filtrera korten ---
  const [search, setSearch] = useState("");

  // --- Filtrerar projekt: matchar titel, beskrivning, tech och typ ---
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

  return (
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
              onOpen={onOpen}
            />
          ))
        ) : (
          <div className="empty-state">
            <p>No projects match your search right now.</p>
          </div>
        )}
      </div>
    </section>
  );
}
