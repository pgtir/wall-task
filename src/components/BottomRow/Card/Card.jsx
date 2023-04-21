import React from "react";
import Shape from "./images/Shape.png";
const Card = (props) => {
  return (
    <div className="bottom-card">
      <div
        style={{ background: `url(${props.image})`, height: "193px " }}
        className="card-img"
      >
        \<div className="timeline">3 Months</div>
      </div>
      <div className="card-content">
        <div className="info">{props.info}</div>
        <div className="bought">
          <span>Bought</span>
          <div className="num-area">
            <span>{props.amount1}</span>
            <img src={Shape}></img>
          </div>
        </div>
        <div className="floor">
          <span>Floor</span>
          <div className="stats">
            <div className="num-area">
              <span>{props.amount2}</span>
              <img src={Shape}></img>
            </div>
              <span className="percent">{props.amount3}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
