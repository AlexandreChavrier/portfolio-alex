import React from 'react';
import "./home.css";
import Me from "../../assets/avatar-1.svg";
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';
import { ReactTyped } from 'react-typed';



function Home() {
    return (

        <section className="home container" id="home">
 
            <div className="intro">
                <div className="home__phrase">
                    <ReactTyped 
                        strings={[
                            "Hey I'm Alex",
                            "Welcome to my portfolio",
                        ]}
                        typeSpeed={80}
                        backSpeed={50}
                        loop
                    >
                    </ReactTyped>
                </div>
                <img src={Me} alt="" className="home__img" />
                <h1 className="home__name">Alexandre CHAVRIER</h1>
                <span className="home__education">I'm a full stack developper</span>
            
            <HeaderSocials/>

           
            <a href="#contact" className="btn">Hire me</a>
            
            <ScrollDown/>
            </div>
        </section>
    )
}

export default Home