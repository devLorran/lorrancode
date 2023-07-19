import React from 'react'
import "./projects.css"
export const Projects = () => {
  return (
    <div id="projects" className="div-projects">
    <section className="realeased-projects">
        <h2> Projetos </h2>
        <div className="projects-grid reveal">
            <div className="project-card">
                <span>Clone da NetFlix</span>
                <p> Clone da Netflix feito com ReactJS HTML5 e CSS3 e media queries para deixar responsivo com o consumo de uma API chamada The Movie DB </p>
                <a href="https://github.com/devLorran/clone-netflix" target="_blank">Ver Projeto</a>
            </div>
            <div className="project-card">
                <span>Movie Website</span>
                <p> Site de filmes responsivo feito com HTML5 CSS3 e JavaScript e JSON para renderização dos filmes </p>
                <a href="https://devlorran.github.io/movie-website/" target="_blank">Ver Projeto</a>
            </div>
            <div className="project-card">
                <span>Dashboard</span>
                <p> Dashboard responsivo feito com HTML5, CSS3, JavaScript e Vanilla para utilização de gráficos  </p>
                <a href="https://devlorran.github.io/dashboard/" target="_blank">Ver Projeto</a>
            </div>
        </div>
        
    </section>
    </div>
  )
}
