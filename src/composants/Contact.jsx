import './Contact.scss';
import section from '../images/section.png';
import feuilleD from '../images/feuilleD.png';
import feuilleG from '../images/feuilleG.png';
import mailIcon from '../images/gmail.png';
import linkIcon from '../images/linkedin.png';
import merci from '../images/merci.png';

export default function Contact() {
    return(
        <section className="Contact">
            <div className="titre">
                <img id="section" src={section} alt="rose"/>
                <h3>Contact</h3>
            </div>
            <div className="feuilles">
                <img className="g" src={feuilleG} alt="feuille droite"/>
                <img className="d" src={feuilleD} alt="feuille gauche"/>
            </div>
            <div className="icones">
                <a href="https://www.linkedin.com/in/lyna-tang/" target="_blank" ><img className="ig" src={linkIcon} alt="LinkedIn"/></a>
                <a href="mailto:lyna.tang25@gmail.com" target="_blank" ><img className="id" src={mailIcon} alt="Gmail"/></a>
            </div>
            <div className="merci">
                <img src={merci} alt=""/>
            </div>
        </section>
    )
}