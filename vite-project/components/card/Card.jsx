import React from "react";
import {Link} from "react-router-dom"
import "./Card.scss";

function Card({ card }) {
  return (
    <Link to = "/baskets?cat=design">
      <div className="catCard">
        <img src={card.img} alt="" />
        <span className="desc">{card.desc}</span>
        <span className="title">{card.title}</span>
      </div>
    </Link>
  );
}
export default Card;