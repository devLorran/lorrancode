import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from "react-icons/ai";
import "./informationcontainer.css"
const InformationContainer = () => {
    return (
        <section id="information">
            <div className="info-card">
                <AiFillPhone id="phone-icon"/>
                <div>
                    <h3>Telefone</h3>
                    <p>21976903588</p>
                </div>
            </div>
            <div className="info-card">
                <AiOutlineMail id="email-icon"/>
                <div>
                    <h3>E-mail</h3>
                    <p>lorranrodrigues553@gmail.com</p>
                </div>
            </div>
            <div className="info-card">
                <AiFillEnvironment id="pin-icon"/>
                <div>
                    <h3>Localicação</h3>
                    <p>Rio de Janeiro / RJ</p>
                </div>
            </div>
        </section>
    )
}

export default InformationContainer