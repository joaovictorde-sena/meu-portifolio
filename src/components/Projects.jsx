import React, { useState } from "react";

import imgFylo from "../images/projeto-fylo-landing-page.png";
import imgCineverse from "../images/projeto-cineverse.png";
import imgGeoIp from "../images/projeto-geoip.png";
import imgThynk from "../images/projeto-thynk-travel.png";
import "./Projects.css"


const sampleProjects = [
  {
    id: 1,
    title: "Fylo Landing Page",
    image: imgFylo,
    description: "Landing page responsiva criada para apresentar serviço de armazenamento em nuvem.",
    github: "https://github.com/joaovictorde-sena/fylo-landing-page",
  },
  {
    id: 2,
    title: "Cineverse",
    image: imgCineverse,
    description: "Aplicação web desenvolvida com React e Vite para exibição de filmes e séries",
    github: "https://github.com/joaovictorde-sena/CineVerse",
  },
  {
    id: 3,
    title: "GeoIpTracker",
    image: imgGeoIp,
    description: "Aplicação web que permite rastrear informações de localização de endereços IP em tempo real.",
    github: "https://github.com/joaovictorde-sena/GeoIP-Tracker"
  },
  {
    id: 4,
    title: "Thynk Travel",
    image: imgThynk,
    description: "Landing page para agência de turismo, com busca interativa de pacotes e apresentação de destinos populares",
    github: "https://github.com/joaovictorde-sena/thynk-travel"
  },
];

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  const [loading, setLoading] = useState(false);

  const visibleProjects = showAll ? sampleProjects : sampleProjects.slice(0, 2);
  return (
    <section className="projects" id="projects">
      <h2 className="title">Meus Projetos</h2>
      <div className="projects-container">
        {visibleProjects.map((project) => (
          <div key={project.id} className="project active">
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <img src={project.image} alt={project.title} />
              <h3>{project.title}</h3>
              <div className="project-info">{project.description}</div>
            </a>
          </div>
        ))}
      </div>

      {!showAll &&(
        <button
    className="show-projects-button"
    onClick={() => {
      setLoading(true);
      setTimeout(() => {
        setShowAll(true);
        setLoading(false);
      }, 600); 
    }}
  >
    {loading ? "Carregando..." : "Mostrar mais"}
  </button>

      )}
    </section>
  );
};

export default Projects;
