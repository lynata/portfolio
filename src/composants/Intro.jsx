import './Intro.scss';
import imgLyna from '../images/me.jpg';
import point from '../images/point.png';
import point2 from '../images/point2.png';
import feuilleD from '../images/feuilleD.png';
import feuilleG from '../images/feuilleG.png';

export default function Intro() {
    return(
        <section className="Intro" id="Intro" >
            <div className="avatar">
                <h3>Lyna Tang</h3>
                <img id="imgLyna" src={imgLyna} alt="Lyna"/>
            </div>
            <div className="desc">
                <ul>
                    <li><img className="fleur" src={point} alt=""/> Developpeuse front-end</li>
                    <li><img className="fleur" src={point2} alt=""/> Designeuse</li>
                    <li><img className="fleur" src={point} alt=""/> Illustratrice</li>
                </ul>
            </div>
            <div className="deco">
                <img className="decoD" src={feuilleD} alt=""/>
                <img className="decoG" src={feuilleG} alt=""/>
            </div>
        </section>
    )
}