import React from 'react'
import './sobre.css'
import image from "../../images/Lorran.jpg";
import { SocialNetworks } from '../SocialNetworks/SocialNetworks';
import TechnologiesContainer from '../TecnologiasContainer/TecnologiaContainer';
import InformationContainer from '../InformationContainer/InformationContainer';

export const Sobre = () => {
    return (
        <div id="sobre" className='sobre reveal'>
            <div className="main-text">
                <p> Ajudando pessoas dar seus primeiros passos em programação e também contribuindo com o crescimento das empresas através da programação </p>
                <span>Usando o Front-End e conhecimentos profissionais para destacar os seus produtos no mercado</span>
            </div>
            <h2 className='myName'>Lorran Rodrigues</h2>
            <div className='graphBox'>
            <div className='box' id="box-left">
                <img className='meImg' src={image} alt='Lorran'/>
                <SocialNetworks />
                <InformationContainer />
                {/* <a className='btn' href="#">Download currículo</a> */}
            </div>
            <div className='box'>
                <h2>Sobre</h2>
                <p>Primeiramente bom dia/boa tarde e boa noite me chamo Lorran atualmente moro em Bangu Rio de Janeiro e tenho experiência de 2 e 6 meses com desenvolvimento Front End HTML5 CSS3 JavaScript Jquery e bootstrap criação de interface de usuário, melhorias em interfaces criação de novas funcionalidades entre outros, conhecimento com ReactJS, experiência com metodologia SCRUM, atendimento ao cliente, experiência com sistema ERP criação de usuários, desbloqueio de usuários, implementação de novas melhorias no sistema via JavaScript consulta no banco de dados SQL via ERP.</p>
            <section className='minhas-stacks'>
                <TechnologiesContainer />
            </section>
            <section className='my-projects reveal'>
                <h2>Projetos Feitos</h2>
                <p>Clicando nesse botão você pode ver todos os projetos que realizei ao longo da minha carreira como desenvolvedor</p>
                <a href="#" className="btn-projetcs">Ver Projetos</a>
            </section>
            </div>
        </div>
        </div>
    )
}
