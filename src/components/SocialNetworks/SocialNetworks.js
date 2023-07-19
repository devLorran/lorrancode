import React from 'react'
import { FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa'
import "./socialnetwork.css"
export const SocialNetworks = () => {
    const socialNetworks = [
        { name: "linkedin", icon: <FaLinkedinIn />, link: "https://www.linkedin.com/in/lorran-rodrigues-a69028148/" },
        { name: "github", icon: <FaGithub />, link: "https://github.com/devLorran" },
        { name: "instagram", icon: <FaInstagram />, link: "https://www.instagram.com/goohan_/" },
    ];
    return (
        <section id='social-networks'>
            {socialNetworks.map((network) => (
                <a href={network.link} target='_blank' className='social-btn' id={network.name} key={network.name}>{network.icon}</a>
            ))}
        </section>
    )
}
