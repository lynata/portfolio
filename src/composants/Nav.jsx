import React, { Component } from 'react';
import imgAcc from "../images/rose.png";
// import MenuItems from '../data/sections.json';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
// import { render } from 'react-dom';
// import { useState } from 'react';
import ResponsiveMenu from 'react-responsive-navbar';
import './Nav.scss';

// export default function Nav() {
    export default class Nav extends Component {
    render() {
    // const [cacheMenu, setCacheMenu] = useState(null);

    // const handleClick = (event) => {
    //     setCacheMenu(event.currentTarget);
    // };

    // const handleClose = () => {
    //     setCacheMenu(null);
    // };

    // const toggleClass = () => {
    //     const currentState = this.state.active;
    //     this.setState({ active: !currentState });
    // };


        return (
            // <header className="Nav">
            //     {/* <div id="accueil"><a href=""><img id="imgRose" src={imgAcc} alt="Accueil"/></a></div> */}
            //     <div id="navDerou">
            //         {/* <div id="menuIcon"><MenuRoundedIcon fontSize="large"/></div> */}
            //         <input type="checkbox" id="chk"/>
            //         <label htmlFor="chk" id="menuIcon">
            //             <i><MenuRoundedIcon fontSize="large"/></i>
            //         </label>
            //         <ul >
            //             <li><a href="#"><img id="imgRose" src={imgAcc} alt="Accueil"/></a></li>
            //             <li><a href="#">Projets</a></li>
            //             <li><a href="#">A Propos</a></li>
            //             <li><a href="#">Contact</a></li>
            //         </ul>
            //         {/* <ul>
            //             {MenuItems.map((item) => {
            //                 return (
            //                     <li>
            //                         <a className={item.nom} href={item.nomClasse}>
            //                         {item.nom}
            //                         </a>
            //                     </li>
            //                 )
            //             })}
            //         </ul> */}
            //     </div>
            // </header>
            <header className="Nav">
                <div className="logo">
                    <img className="rose" src={imgAcc} alt="Lyna Tang"/>
                    <img className="rose" src={imgAcc} alt="Lyna Tang"/>
                </div>
                <ResponsiveMenu
                    menuOpenButton={<MenuRoundedIcon />}
                    menuCloseButton={<CloseRoundedIcon />}
                    changeMenuOn="800px"
                    largeMenuClassName="menuLarge"
                    smallMenuClassName="menuPetit"
                    menu={
                        <ul>
                            <li><a href="#Intro"><img id="imgRose" src={imgAcc} alt="Accueil"/></a></li>
                            <li><a href="#Projets">Projets</a></li>
                            <li><a href="#Apropos">À Propos</a></li>
                            <li><a href="#Contact">Contact</a></li>
                        </ul>
                    }
                />
            </header>

        )

    }

}