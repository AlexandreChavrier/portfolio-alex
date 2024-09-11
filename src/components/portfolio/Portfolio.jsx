import React from 'react';
import "./portfolio.css";
import CardPortfolio from './CardPortfolio';
import DataPortfolio from './DataPortfolio';

function Portfolio() {
    return (
        <section className="portfolio container section" id='portfolio'>
            <h2 className="section__title">Projects</h2>
                <div className="portfolio__container">
                  {DataPortfolio.map((val, id) => {
                            return (
                                <CardPortfolio 
                                key={id}
                                title={val.title}
                                desc={val.desc}
                                tech={val.tech}
                            />
                            )
                    })}
                </div>
        </section>
    )
}

export default Portfolio

                  