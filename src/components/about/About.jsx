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
                        <p className="about__description">  I'm Alexandre CHAVRIER, a <strong>junior full stack developper</strong> from Lyon, France. 
                        I'm currently working at ada tech school for <strong>9 months</strong> and <strong>1 year on a sandwich course</strong>.<br />
                            I'm looking for a <strong>work-study placement</strong> to put my development skills and rigor to good use in the tech world.<br />
                            I'm good at <strong>algorithms</strong> and my favorite languages are <strong>JS</strong> and <strong>Python</strong>. I also really like <strong>Node/React</strong> projects where i can combine back-end and front-end skills.<br />
                            I am motivated, disciplined, and eager to <strong>learn</strong> new technologies or <strong>refine</strong> those I already know. My ability to grasp complex concepts is one of my greatest <strong>strengths</strong>,
                        which I developed during my previous studies in law.</p>
                        <a href="../../public/CV_Alexandre_Chavrier_F.pdf" className="btn" id='btn__download' download>Download CV</a>
                    </div>
                    <Skills/>   
                </div>

            </div>
        </section>
    )
}

export default About