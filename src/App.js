import './App.css';
import { Header } from './components/header/Header';
import { Sobre } from './components/sobre/Sobre';
import { Projects } from './components/projects/Projects';
import { Services } from './components/services/Services';
import { Footer } from './components/footer/Footer';
function App() {
  window.addEventListener('scroll', reveal); 

function reveal(){
    var reveals = document.querySelectorAll('.reveal'); 

    for(var i = 0; i < reveals.length; i++){
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 0;

        if (revealtop < windowheight - revealpoint) {
            reveals[i].classList.add('active');
        } else {
            reveals[i].classList.remove('active');
        }
    }
}
window.addEventListener("scroll", function(){
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});
  return (
    <div className="App">
      <Header />
      <Sobre />
      <Projects />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
