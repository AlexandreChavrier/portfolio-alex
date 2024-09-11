import React from "react";
import Insta from "../../assets/insta.svg";
import Twitter from "../../assets/twitter.svg";
import Linkedin from "../../assets/linkedin.svg";
import Github from "../../assets/github.svg"



function HeaderSocials () {
    return (
        <div className="home__socials">
            <a href="https://www.instagram.com/alex_chaav/" className="home__social-link" target="_blank">
            <img src={Insta}/>
            </a>

            <a href="https://twitter.com/Alex_Chavrier" className="home__social-link" target="_blank">
            <img src={Twitter}/>
            </a>

            <a href="https://www.linkedin.com/in/alexandre-chavrier-912a72250/" className="home__social-link" target="_blank">
            <img src={Linkedin}/>
            </a>

            <a href="https://github.com/AlexandreChavrier" className="home__social-link" target="_blank">
            <img src={Github}/>
            </a>

        </div>
    )
}

export default HeaderSocials