import './ListeProjets.scss';
import section from '../images/section.png';
import projets from '../data/projets.json';
import Projet from './Projet';

export default function ListeProjets() {
    return (
        <section className="ListeProjets" id="Projets" >
            <div className="titre">
                <img id="section" src={section} alt="rose"/>
                <h3>Projets</h3>
            </div>
            <div className="contProj">
                <ul>
                    {projets.map((prj) => <li><Projet titre={prj.titre} img={prj.img} role={prj.role} desc={prj.desc} lien={prj.lien} autre={prj.autre} outils={prj.outils}/></li>)}
                </ul>
            </div>
        </section>
    )
}
