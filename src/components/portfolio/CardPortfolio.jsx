import React from "react";
import "./portfolio.css";

// function CardPortfolio(props) {
//     return (

//         <div className="portfolio__container grid">
//             <div className="portfolio__data grid">
//                 <div className="portfolio__info">
//                     <h3 className="title__text">{props.title}</h3>
//                     <p className="desc__text">{props.desc}</p>  
//                 </div>
//             </div>
//         </div>
//     )
// }   

function CardPortfolio(props) {
    return (
        <div class="card">
        <div class="card-img"></div>
        <div class="card-info">
          <p class="text-title">{props.title}</p>
          <p class="text-body">{props.desc}</p>
          <p class="text-body">{props.tech}</p>
        </div>
        </div>
      )
}



export default CardPortfolio