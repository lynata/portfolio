import './Apropos.scss';
import section from '../images/section.png';
import point from '../images/point.png';

export default function Apropos() {
    return (
        <section className="Apropos" id="Apropos">
            <div className="titre">
                <img id="section" src={section} alt="rose"/>
                <h3>À Propos</h3>
            </div>
            <div className="descPropos">
                <p>Bonjour! Je suis Lyna Tang, une finissante Montréalaise du programme d'intégration multimédia. <br/>(Je suis en train de bâtir mon portfolio, je m'excuse d'avance pour les erreurs.) <br/> <a href="https://www.behance.net/lyna_tang">Lien vers mon Behance</a>  </p>
            </div>
            <div className="liste">
                <div className="listeTitre">
                    <img src={point} alt=""/>
                    Logiciels, outils et langages connus :
                </div>
                <ul>
                    <li>JavaScript</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Vue.js</li>
                    <li>React</li>
                    <li>MySQL</li>
                    <li>Adobe Photoshop</li>
                    <li>Adobe Illustrator</li>
                    <li>PHP</li>
                    <li>Figma</li>
                    <li>Unity</li>
                    <li>Aseprite</li>
                </ul>
            </div>
        </section>
    )
}