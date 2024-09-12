import React from 'react';
import "./about.css";
import Avatar2 from "../../assets/avatar-2.svg";
import Skills from "./Skills";


function About() {
    return (
        <section className="about container section" id='about'>
            <h2 className="section__title" id="about_title">About me</h2>

            <div className="about__container grid">
                <img src={Avatar2} alt="" className="about__img" />
                <div className="about__data grid">
                    <div className="about__info">
                        <p className="about__description">I'm Alexandre CHAVRIER, a <strong>junior full stack developper</strong> from Lyon, France. 
                        I'm currently working at ada tech school for <strong>9 months</strong> and <strong>1 year on a sandwich course</strong>. 
                        I'm looking for a work-study placement to put my development skills and rigor to good use in the tech world.
                        I'm good at <strong>algorithms</strong> and my favorite languages are <strong>js</strong> and <strong>python</strong>. I also really like <span>react</span>.</p>
                        <a href="../../public/CV_Alexandre_Chavrier_F.pdf" className="btn" id='btn__download' download>Download CV</a>
                    </div>
                    <Skills/>   
                </div>

            </div>
        </section>
    )
}

export default About