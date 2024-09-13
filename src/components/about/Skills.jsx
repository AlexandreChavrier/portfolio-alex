import React from "react";
import LogoJs from "../../assets/js.svg";
import LogoPy from "../../assets/python.svg";
import LogoPhp from "../../assets/php.svg";
import LogoReact from "../../assets/react.svg";
import LogoDocker from "../../assets/docker.svg";
import LogoLaravel from "../../assets/laravel.png";



function Skills () {
    return (
        <div className="about__skills grid">
            <div className="skills__data">
            <h3 className="skills">Skills</h3>
                <div className="skills__img">   
                    <img src={LogoJs} alt="" />
                </div>
                <div className="skills__img">
                    <img src={LogoPy} alt="" />
                </div>
                <div className="skills__img">
                    <img src={LogoPhp} alt="" />
                </div>
                <div className="skills__img">
                    <img src={LogoReact} alt="" />
                </div>
                <div className="skills__img">
                    <img src={LogoLaravel} alt="" />
                </div>
                <div className="skills__img">
                    <img src={LogoDocker} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Skills