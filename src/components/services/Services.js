import React from 'react'
import "./services.css"
export const Services = () => {
  // window.addEventListener('scroll', reveal); 

  // function reveal(){
  //     var reveals = document.querySelectorAll('.reveal'); 
  
  //     for(var i = 0; i < reveals.length; i++){
  //         var windowheight = window.innerHeight;
  //         var revealtop = reveals[i].getBoundingClientRect().top;
  //         var revealpoint = 0;
  
  //         if (revealtop < windowheight - revealpoint) {
  //             reveals[i].classList.add('active');
  //         } else {
  //             reveals[i].classList.remove('active');
  //         }
  //     }
  // }
  return (
    <div id="services" className="div-services">
        <section className="realeased-services">
        <h2> Serviços </h2>
        <div className="services-grid reveal">
            <div className="services-card">
                <span>UI Design</span>
                <p> Desenvolvimento de interfaces de forma interativa e modernizada </p>
            </div>
            <div className="services-card">
                <span>Mobile Design</span>
                <p> Desenvolvimento de aplicativos mobile profissionais </p>
            </div>
            <div className="services-card">
                <span>Responsive design</span>
                <p> Desenvolvimento de interfaces responsivas com o uso de media queries </p>
            </div>
        </div>
        
    </section>
    </div>
  )
}
