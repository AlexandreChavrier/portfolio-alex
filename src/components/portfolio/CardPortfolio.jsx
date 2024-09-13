import React from "react";
import "./portfolio.css";

 

function CardPortfolio({ image, title, desc, tech, onImageClick }) {
    return (
        <div className="card">
          <div className="card-img" onClick={() => onImageClick(image)}>
            <img className="img__project" src={image} alt={title} />
          </div>
          <div className="card-info">
            <p className="text-title">{title}</p>
            <p className="text-body">{desc}</p>
            <p className="text-tech"><u>Technologies used</u> : {tech}</p>
          </div>
          <div className="button-project">
            {/* <button className="btn" id="btn-view-project">View project</button> */}
            </div>
        </div>
      )
}



export default CardPortfolio