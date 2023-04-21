import React from "react";
import "./BottomRow.css";
import Card from "./Card/Card";
import data from "./Card/data"

const BottomRow = () => {
  return <div className="bottom-row">
   {
    data.map((card) => (
    <Card
    info= {card.info}
    image= {card.image}
    amount1= {card.amount1}
    amount2= {card.amount2}
    amount3= {card.amount3}/>
    ))
   }
  </div>;
};

export default BottomRow;
