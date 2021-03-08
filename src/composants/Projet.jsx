import './Projet.scss';

export default function Projet(props) {
    return (
        <div className="Projet" >
            <img src={`imgPrj/${props.img}.png`} alt="image du projet"/>
            <div className="titrePrj" >
                <h3>{props.titre}</h3>
                <p>Rôle : {props.role}</p>
            </div>
            <a href={props.lien}>Lien vers le projet</a>
            <div className="descPrj">
                Description :
                <p>{props.desc}</p>
            </div>
        </div>
    )
}