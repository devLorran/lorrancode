import React from 'react'
import './header.css'
import mainLogo from "../../images/LorranCode2.png";
export const Header = () => {
    return (
        <header id="header" className='header'>
            <div className="div-logo"> 
                <img src={mainLogo} className="main-logo" alt="Lorran Code" /> 
            </div>
            <div className='navigation'>
                <input type='checkbox' className='toggle-menu' />
                <div className='hamburger'></div>
                <ul className='menu'>
                    <li> <a href="#header">Home</a> </li>
                    <li> <a href="#sobre">Sobre</a> </li>
                    <li> <a href="#tecnologia">Stacks</a> </li>
                    <li> <a href="#projects">Projetos em destaque</a> </li>
                    <li> <a href="#services">Serviços</a> </li>
                </ul>
            </div>
        </header>
    )
}
