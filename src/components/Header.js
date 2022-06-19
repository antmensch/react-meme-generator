import React from "react";
import logo from "../img/logo-trollface.svg"

export default function Header() {
    return(
        <header className="header">
            <div className="header--logo-group">
                <img className="header--logo-pic" src={logo} width="31px" height="26px" />
                <span className="header--logo-text">Meme Generator</span>
            </div>
            <div className="header--info">React Course - Project 3</div>
            
        </header>
    );
}