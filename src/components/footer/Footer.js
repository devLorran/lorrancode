import React from 'react'
import "./footer.css"
import imgLogo from "../../images/LorranCode.png"
export const Footer = () => {
  return (
    <div className="footer">
        <p>Todos os direitos reservados LorranCode&reg; </p> <img className="imgFooter" src={imgLogo} />
    </div>
  )
}
