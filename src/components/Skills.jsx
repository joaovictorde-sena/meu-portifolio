import React from "react";
import "./Skills.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGithub,
  FaGit,
} from "react-icons/fa";
import {
  SiTypescript,
  SiMysql,
  SiJquery,
} from "react-icons/si";

const skillsData = {
  "Front-end": [
    { name: "HTML5", icon: <FaHtml5 /> },
    { name: "CSS3", icon: <FaCss3Alt /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "ReactJS", icon: <FaReact /> },
    { name: "Jquery", icon: <SiJquery />}
  ],
  "Banco de dados": [{ name: "MySQL", icon: <SiMysql /> }],
  Ferramentas: [
    { name: "Git", icon: <FaGit /> },
    { name: "GitHub", icon: <FaGithub /> },
  ],
};
const Skills = () => {
  return (
    <section className="skills" id="skills">
      <h2>Habilidades</h2>
      {Object.keys(skillsData).map((category) => (
        <div key={category} className="skill-category">
          <h3>{category}</h3>
          <div className="skill-cards">
            {skillsData[category].map((skill) => (
              <div key={skill.name} className="skill-card">
                {skill.icon}
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Skills;
