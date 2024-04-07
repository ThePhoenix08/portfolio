import React from "react";
import movixAppImg from "../../assets/movix-web-app.png";
import portfolioImg from "../../assets/portfolio-web.png";
import todoAppImg from "../../assets/todo-web-app.png";
import './projects.scss'

const Projects = () => {
  return (
    <section id="projects">
      <p>Browse my Recent</p>
      <p className="heading">Projects</p>
      <div className="container">
        <div className="projectBox">
          <img src={movixAppImg} alt="movies and tv shows surfing website hero section screenshot" />
          <div className="projectDetails">
            <p className="title">Movix</p>
            <p className="description">
              A movies and tv shows surfing website.
            </p>
            <div className="options">
              <a href="https://github.com/ThePhoenix08/movix-website">Github</a>
              <a href="https://movix-website-mgi46c5vd-vighnesh-brahmes-projects.vercel.app">Live Demo</a>
            </div>
          </div>
        </div>
        <div className="projectBox">
          <img src={portfolioImg} alt="portfolio website hero section screenshot" />
          <div className="projectDetails">
            <p className="title">My Developer Portfolio</p>
            <p className="description">
              My Developer portfolio website to showcase my work and achievements.
            </p>
            <div className="options">
              <a href="https://github.com/ThePhoenix08/portfolio">Github</a>
              <a href="#hero">Live Demo</a>
            </div>
          </div>
        </div>
        <div className="projectBox">
          <img src={todoAppImg} alt="todo application screenshot" />
          <div className="projectDetails">
            <p className="title">ToDo Manager</p>
            <p className="description">
              A task manager application.
            </p>
            <div className="options">
              <a href="https://github.com/ThePhoenix08/to-do-app">Github</a>
              <a href="https://thephoenix08.github.io/to-do-app/">Live Demo</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
