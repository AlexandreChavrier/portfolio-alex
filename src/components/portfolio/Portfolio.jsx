import React, { useState } from 'react';
import "./portfolio.css";
import CardPortfolio from './CardPortfolio';
import DataPortfolio from './DataPortfolio';

function Portfolio() {
    const [modalImage, setModalImage] = useState(null);

    const openModal = (image) => {
        setModalImage(image);
    };

    const closeModal = () => {
        setModalImage(null);
    };

    return (
        <section className="portfolio container section" id='portfolio'>
            <h2 className="section__title">Projects</h2>
            <div className="portfolio__container">
                {DataPortfolio.map((val, id) => {
                    return (
                        <CardPortfolio
                            key={id}
                            image={val.image}
                            title={val.title}
                            desc={val.desc}
                            tech={val.tech}
                            onImageClick={openModal}
                        />
                    )
                })}
            </div>
            <div className="modal" style={{ display: modalImage ? 'block' : 'none' }} onClick={closeModal}>
                <span className="close" onClick={closeModal}>&times;</span>
                <div className="modal-content">
                    <img src={modalImage} alt="Project" />
                </div>
            </div>
        </section>
    )
}

export default Portfolio

